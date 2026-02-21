/**
 * API client for the Immenzo Flask backend.
 * All requests are proxied through Next.js rewrites → backend:8000
 */

const BASE = '/api';

// ── Types ────────────────────────────────────────────────────────────────────

export interface ApiResponse<T = unknown> {
  data: T | null;
  error: string | null;
  status: number;
}

export interface AuthTokens {
  access_token: string;
  refresh_token: string;
  user: {
    id: string;
    email: string;
    name: string;
    role: string;
  };
}

export interface JobStatus {
  job_id: string;
  status: 'pending' | 'processing' | 'completed' | 'failed';
  progress?: number;
  created_at: string;
  updated_at: string;
}

export interface JobResult {
  job_id: string;
  status: 'completed' | 'failed';
  result?: {
    extracted_text?: string;
    entities?: Record<string, unknown>;
    fhir_bundle?: Record<string, unknown>;
    confidence_score?: number;
    requires_review?: boolean;
    language?: 'en' | 'id';
  };
  error?: string;
}

export interface OcrUploadResponse {
  job_id: string;
  message: string;
  status: 'queued';
}

// ── Helpers ──────────────────────────────────────────────────────────────────

function getAuthHeader(): Record<string, string> {
  if (typeof window === 'undefined') return {};
  const token = localStorage.getItem('immenzo_access_token');
  return token ? { Authorization: `Bearer ${token}` } : {};
}

async function request<T>(
path: string,
options: RequestInit = {})
: Promise<ApiResponse<T>> {
  try {
    const res = await fetch(`${BASE}${path}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...getAuthHeader(),
        ...(options.headers ?? {})
      }
    });

    const data = res.ok ? await res.json().catch(() => null) : null;
    const errorBody = !res.ok ?
    await res.json().catch(() => ({ message: res.statusText })) :
    null;

    return {
      data: data as T,
      error: errorBody?.message ?? errorBody?.error ?? null,
      status: res.status
    };
  } catch (err) {
    return {
      data: null,
      error: err instanceof Error ? err.message : 'Network error',
      status: 0
    };
  }
}

// ── Auth ─────────────────────────────────────────────────────────────────────

export const auth = {
  login: (email: string, password: string) =>
  request<AuthTokens>('/auth/login', {
    method: 'POST',
    body: JSON.stringify({ email, password })
  }),

  logout: () => request('/auth/logout', { method: 'POST' }),

  refresh: (refresh_token: string) =>
  request<AuthTokens>('/auth/refresh', {
    method: 'POST',
    body: JSON.stringify({ refresh_token })
  })
};

// ── OCR ──────────────────────────────────────────────────────────────────────

export const ocr = {
  /**
   * Upload a document for async OCR processing via Kafka.
   * Returns a job_id — poll jobs.getStatus() for progress.
   */
  upload: (
  file: File,
  options?: {language?: 'en' | 'id';engine?: 'groq' | 'tesseract';}) =>
  {
    const form = new FormData();
    form.append('file', file);
    if (options?.language) form.append('language', options.language);
    if (options?.engine) form.append('engine', options.engine);

    return request<OcrUploadResponse>('/ocr/upload', {
      method: 'POST',
      headers: { ...getAuthHeader() }, // no Content-Type — let browser set multipart boundary
      body: form
    });
  }
};

// ── Jobs ─────────────────────────────────────────────────────────────────────

export const jobs = {
  getStatus: (jobId: string) => request<JobStatus>(`/jobs/${jobId}/status`),

  getResult: (jobId: string) => request<JobResult>(`/jobs/${jobId}/result`),

  /**
   * Poll job status until completed/failed or timeout.
   * @param jobId - Job ID from OCR upload
   * @param onProgress - Callback with current status
   * @param intervalMs - Polling interval (default 2s)
   * @param timeoutMs - Max wait time (default 5 min)
   */
  poll: (
  jobId: string,
  onProgress?: (status: JobStatus) => void,
  intervalMs = 2000,
  timeoutMs = 300_000)
  : Promise<JobResult> => {
    return new Promise((resolve, reject) => {
      const start = Date.now();

      const tick = async () => {
        if (Date.now() - start > timeoutMs) {
          reject(new Error('Job polling timed out'));
          return;
        }

        const { data, error } = await jobs.getStatus(jobId);

        if (error || !data) {
          reject(new Error(error ?? 'Failed to get job status'));
          return;
        }

        onProgress?.(data);

        if (data.status === 'completed' || data.status === 'failed') {
          const result = await jobs.getResult(jobId);
          if (result.data) resolve(result.data);else
          reject(new Error(result.error ?? 'Failed to get job result'));
          return;
        }

        setTimeout(tick, intervalMs);
      };

      tick();
    });
  }
};

// ── FHIR ─────────────────────────────────────────────────────────────────────

export const fhir = {
  convert: (jobId: string) =>
  request(`/fhir/convert/${jobId}`, { method: 'POST' }),

  getBundle: (jobId: string) => request(`/fhir/bundle/${jobId}`)
};

// ── SatuSehat ────────────────────────────────────────────────────────────────

export const satusehat = {
  push: (jobId: string) =>
  request(`/satusehat/push/${jobId}`, { method: 'POST' })
};