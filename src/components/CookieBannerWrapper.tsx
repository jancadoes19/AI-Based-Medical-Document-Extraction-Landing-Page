import React, { useEffect, useState } from 'react';
import { CookieBanner } from './CookieBanner';
export function CookieBannerWrapper() {
  const [showCookieBanner, setShowCookieBanner] = useState(false);
  useEffect(() => {
    try {
      const consent = localStorage.getItem('immenzo_cookie_consent');
      if (!consent) {
        setShowCookieBanner(true);
      }
    } catch {
      setShowCookieBanner(true);
    }
  }, []);
  if (!showCookieBanner) return null;
  return (
    <CookieBanner
      isOpen={showCookieBanner}
      onClose={() => setShowCookieBanner(false)}
      onAcceptAll={() => {
        localStorage.setItem('immenzo_cookie_consent', 'all');
        setShowCookieBanner(false);
      }}
      onEssentialOnly={() => {
        localStorage.setItem('immenzo_cookie_consent', 'essential');
        setShowCookieBanner(false);
      }} />);


}