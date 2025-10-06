'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type ConsentStatus = 'pending' | 'accepted' | 'rejected';

interface CookieConsentContextType {
  consentStatus: ConsentStatus;
  acceptCookies: () => void;
  rejectCookies: () => void;
}

const CookieConsentContext = createContext<CookieConsentContextType | undefined>(undefined);

const CONSENT_KEY = 'erudit-cookie-consent';

export function CookieConsentProvider({ children }: { children: ReactNode }) {
  const [consentStatus, setConsentStatus] = useState<ConsentStatus>('pending');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const savedConsent = localStorage.getItem(CONSENT_KEY);
    if (savedConsent === 'accepted' || savedConsent === 'rejected') {
      setConsentStatus(savedConsent as ConsentStatus);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem(CONSENT_KEY, 'accepted');
    setConsentStatus('accepted');
  };

  const rejectCookies = () => {
    localStorage.setItem(CONSENT_KEY, 'rejected');
    setConsentStatus('rejected');
  };

  if (!isClient) {
    return null;
  }

  return (
    <CookieConsentContext.Provider value={{ consentStatus, acceptCookies, rejectCookies }}>
      {children}
    </CookieConsentContext.Provider>
  );
}

export function useCookieConsent() {
  const context = useContext(CookieConsentContext);
  if (context === undefined) {
    throw new Error('useCookieConsent must be used within CookieConsentProvider');
  }
  return context;
}