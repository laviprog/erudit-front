'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import ym, { YMInitializer } from 'react-yandex-metrika';
import { useCookieConsent } from '@/contexts/CookieConsentContext';

const YM_COUNTER_ID = 104382748;

const YandexMetrika = () => {
  const pathname = usePathname();
  const { consentStatus } = useCookieConsent();

  useEffect(() => {
    if (pathname && consentStatus === 'accepted') {
      ym('hit', pathname);
    }
  }, [pathname, consentStatus]);

  if (consentStatus !== 'accepted') {
    return null;
  }

  return (
    <YMInitializer
      accounts={[YM_COUNTER_ID]}
      options={{
        defer: true,
        webvisor: true,
        clickmap: true,
        trackLinks: true,
        accurateTrackBounce: true,
      }}
      version="2"
    />
  );
};

export default YandexMetrika;