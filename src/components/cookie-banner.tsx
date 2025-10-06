'use client';

import { useCookieConsent } from '@/contexts/CookieConsentContext';
import Link from 'next/link';

export default function CookieBanner() {
  const { consentStatus, acceptCookies, rejectCookies } = useCookieConsent();

  if (consentStatus !== 'pending') {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gray-900 text-white shadow-lg animate-slide-up">
      <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-start gap-3">
              <span className="text-2xl">🍪</span>
              <div>
                <p className="text-sm leading-relaxed">
                  Мы используем файлы cookies для улучшения работы сайта и анализа посещаемости. 
                  Продолжая использовать сайт, вы соглашаетесь с нашей{' '}
                  <Link 
                    href="/cookies" 
                    className="underline hover:text-blue-400 transition"
                    target="_blank"
                  >
                    Политикой использования cookies
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-3 w-full sm:w-auto">
            <button
              onClick={rejectCookies}
              className="flex-1 sm:flex-none px-4 py-2 text-sm font-medium text-gray-300 hover:text-white border border-gray-600 rounded-lg hover:bg-gray-800 transition"
            >
              Отклонить
            </button>
            <button
              onClick={acceptCookies}
              className="flex-1 sm:flex-none px-6 py-2 text-sm font-medium bg-blue-600 hover:bg-blue-700 rounded-lg transition"
            >
              Принять все
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}