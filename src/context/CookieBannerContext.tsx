'use client';

import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

interface CookieBannerContextType {
  isDismissed: boolean;
  dismiss: () => void;
}

const CookieBannerContext = createContext<CookieBannerContextType | undefined>(undefined);

const BANNER_KEY = 'erudit-cookie-banner-dismissed';

export function CookieBannerProvider({ children }: { children: ReactNode }) {
  const [isClient, setIsClient] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const saved = localStorage.getItem(BANNER_KEY);
    setIsDismissed(saved === '1');
  }, []);

  const dismiss = () => {
    localStorage.setItem(BANNER_KEY, '1');
    setIsDismissed(true);
  };

  if (!isClient) return null;

  return (
    <CookieBannerContext.Provider value={{ isDismissed, dismiss }}>
      {children}
    </CookieBannerContext.Provider>
  );
}

export function useCookieBanner() {
  const ctx = useContext(CookieBannerContext);
  if (!ctx) throw new Error('useCookieBanner must be used within CookieBannerProvider');
  return ctx;
}
