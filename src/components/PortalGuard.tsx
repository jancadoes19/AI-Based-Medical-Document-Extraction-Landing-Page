import React, { Component } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { usePortalAuth } from '../hooks/usePortalAuth';
interface PortalGuardProps {
  children: React.ReactNode;
}
export function PortalGuard({ children }: PortalGuardProps) {
  const { isAuthenticated } = usePortalAuth();
  const location = useLocation();
  if (!isAuthenticated()) {
    return (
      <Navigate
        to={`/portal?redirect=${encodeURIComponent(location.pathname)}`}
        replace />);


  }
  return <>{children}</>;
}