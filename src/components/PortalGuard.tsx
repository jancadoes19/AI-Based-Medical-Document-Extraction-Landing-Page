import React, { useEffect, Component } from 'react';
import { useRouter, usePathname } from '../lib/compat';
import { usePortalAuth } from '../hooks/usePortalAuth';
interface PortalGuardProps {
  children: React.ReactNode;
}
export function PortalGuard({ children }: PortalGuardProps) {
  const { isAuthenticated } = usePortalAuth();
  const router = useRouter();
  const pathname = usePathname();
  useEffect(() => {
    if (!isAuthenticated()) {
      router.replace(`/portal?redirect=${encodeURIComponent(pathname)}`);
    }
  }, [isAuthenticated, pathname, router]);
  if (!isAuthenticated()) {
    return null; // Or a loading spinner
  }
  return <>{children}</>;
}