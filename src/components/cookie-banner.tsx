'use client';

import Link from 'next/link';
import { useCookieBanner } from '@/context/CookieBannerContext';

export default function CookieBanner() {
  const { isDismissed, dismiss } = useCookieBanner();

  if (isDismissed) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gray-900 text-white shadow-lg animate-slide-up">
      <div className="max-w-7xl mx-auto px-4 md:py-6 py-3 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-3">
              <span className="md:text-3xl text-2xl">🍪</span>
              <div>
                <p className="max-md:text-sm">
                  Используя этот сайт, вы соглашаетесь с использованием файлов cookies. Подробнее —
                  в&nbsp;
                  <Link
                    href="/cookies"
                    className="underline hover:text-blue-400 transition"
                    target="_blank"
                  >
                    Политике использования cookies
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-3 w-full sm:w-auto">
            <button
              onClick={dismiss}
              className="flex-1 sm:flex-none px-6 py-2 text-sm font-medium bg-blue-600 hover:bg-blue-700 rounded-lg transition"
            >
              Понятно
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
