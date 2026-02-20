// Simple portal auth using localStorage
// TODO (Claude Code): Replace with real JWT/session auth against your backend

// Hardcoded demo credentials — replace with real API auth
const VALID_CREDENTIALS: Record<string, string> = {
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

  const login = (email: string, password: string): boolean => {
    const normalizedEmail = email.trim().toLowerCase();
    // Check hardcoded credentials first
    if (VALID_CREDENTIALS[normalizedEmail] === password) {
      localStorage.setItem('immenzo_portal_auth', 'true');
      localStorage.setItem('immenzo_portal_email', normalizedEmail);
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem('immenzo_portal_auth');
    localStorage.removeItem('immenzo_portal_email');
  };

  const getEmail = (): string => {
    try {
      return localStorage.getItem('immenzo_portal_email') ?? '';
    } catch {
      return '';
    }
  };

  return { isAuthenticated, login, logout, getEmail };
}