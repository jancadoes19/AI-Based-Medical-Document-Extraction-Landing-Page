/**
 * Portal auth hook — tries real JWT auth against Flask backend first,
 * falls back to demo credentials for local preview.
 */
import { auth } from '../lib/api';

// Demo credentials for Magic Patterns preview (no backend running)
const DEMO_CREDENTIALS: Record<string, string> = {
  'demo@immenzo.com': 'my@pple9M!!',
  'janice@immenzo.com': 'my@pple9M!!'
};

export function usePortalAuth() {
  const isAuthenticated = (): boolean => {
    try {
      return localStorage.getItem('immenzo_portal_auth') === 'true';
    } catch {
      return false;
    }
  };

  const login = async (email: string, password: string): Promise<boolean> => {
    const normalizedEmail = email.trim().toLowerCase();

    // 1. Try real backend auth
    try {
      const { data, error } = await auth.login(normalizedEmail, password);
      if (data && !error) {
        localStorage.setItem('immenzo_portal_auth', 'true');
        localStorage.setItem('immenzo_portal_email', normalizedEmail);
        localStorage.setItem('immenzo_access_token', data.access_token);
        localStorage.setItem('immenzo_refresh_token', data.refresh_token);
        if (data.user) {
          localStorage.setItem('immenzo_portal_user', JSON.stringify(data.user));
        }
        return true;
      }
    } catch {

      // Backend unavailable — fall through to demo credentials
    }
    // 2. Fallback: demo credentials (preview / no backend)
    if (DEMO_CREDENTIALS[normalizedEmail] === password) {
      localStorage.setItem('immenzo_portal_auth', 'true');
      localStorage.setItem('immenzo_portal_email', normalizedEmail);
      return true;
    }

    return false;
  };

  const logout = async () => {
    try {
      await auth.logout();
    } catch {

      // ignore
    }localStorage.removeItem('immenzo_portal_auth');
    localStorage.removeItem('immenzo_portal_email');
    localStorage.removeItem('immenzo_access_token');
    localStorage.removeItem('immenzo_refresh_token');
    localStorage.removeItem('immenzo_portal_user');
  };

  const getEmail = (): string => {
    try {
      return localStorage.getItem('immenzo_portal_email') ?? '';
    } catch {
      return '';
    }
  };

  const getUser = () => {
    try {
      const raw = localStorage.getItem('immenzo_portal_user');
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  };

  const getAccessToken = (): string | null => {
    try {
      return localStorage.getItem('immenzo_access_token');
    } catch {
      return null;
    }
  };

  return { isAuthenticated, login, logout, getEmail, getUser, getAccessToken };
}