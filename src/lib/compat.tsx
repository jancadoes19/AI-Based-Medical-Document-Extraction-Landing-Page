import React from 'react';
/**
 * Browser-compatible shims for next/link and next/navigation.
 * Used by the Magic Patterns preview (Vite) environment.
 * In a real Next.js build, import directly from 'next/link' and 'next/navigation'.
 */

// ── Link shim ────────────────────────────────────────────────────────────────
interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
}
export function Link({ href, children, ...props }: LinkProps) {
  return (
    <a href={href} {...props}>
      {children}
    </a>);

}
// ── usePathname shim ─────────────────────────────────────────────────────────
export function usePathname(): string {
  if (typeof window === 'undefined') return '/';
  return window.location.pathname;
}
// ── useRouter shim ───────────────────────────────────────────────────────────
export function useRouter() {
  return {
    push: (url: string) => {
      if (typeof window !== 'undefined') window.location.href = url;
    },
    replace: (url: string) => {
      if (typeof window !== 'undefined') window.location.replace(url);
    },
    back: () => {
      if (typeof window !== 'undefined') window.history.back();
    },
    prefetch: () => {}
  };
}
// ── useSearchParams shim ─────────────────────────────────────────────────────
export function useSearchParams() {
  if (typeof window === 'undefined') {
    return {
      get: (_key: string) => null
    };
  }
  const params = new URLSearchParams(window.location.search);
  return {
    get: (key: string) => params.get(key)
  };
}
// ── useParams shim ───────────────────────────────────────────────────────────
export function useParams(): Record<string, string> {
  if (typeof window === 'undefined') return {};
  // Extract slug from pathname like /blog/my-article
  const parts = window.location.pathname.split('/').filter(Boolean);
  return {
    slug: parts[parts.length - 1] ?? ''
  };
}