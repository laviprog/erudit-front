import './globals.css';
import { Inter } from 'next/font/google';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import { Slide, ToastContainer } from 'react-toastify';

import { Metadata } from 'next';
import YandexMetrika from '@/components/yandex-metrika';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '500', '600', '700', '900'],
});

export const metadata: Metadata = {
  title: 'ЭрудитПати | Интеллектуальные игры в Камышине',
  description:
    'Интеллектуально-развлекательные игры ЭрудитПати в Камышине: классические квизы для взрослых, семейные игры и корпоративные мероприятия. Проверьте свою эрудицию в атмосфере азарта и веселья!',
  keywords: [
    'интеллектуальные игры Камышин',
    'квиз Камышин',
    'ЭрудитПати',
    'викторины Камышин',
    'что где когда Камышин',
    'игры для взрослых Камышин',
    'семейные игры Камышин',
    'корпоративные игры Камышин',
    'развлечения Камышин',
    'мероприятия Камышин',
    'куда пойти в Камышине',
    'игры на корпоратив',
  ],
  openGraph: {
    title: 'ЭрудитПати - Интеллектуальные игры в Камышине',
    description:
      'Квизы и викторины для взрослых, семейные игры, корпоративные мероприятия. Проверьте свою эрудицию!',
    url: 'https://erudit-party.ru',
    siteName: 'ЭрудитПати',
    images: [
      {
        url: 'https://erudit-party.ru/images/preview.webp',
        width: 1200,
        height: 630,
        alt: 'ЭрудитПати - Интеллектуально-развлекательные игры в Камышине',
      },
    ],
    locale: 'ru_RU',
    type: 'website',
  },
  alternates: {
    canonical: 'https://erudit-party.ru',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <YandexMetrika />

        <ToastContainer
          position="bottom-right"
          autoClose={2500}
          limit={3}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Slide}
        />

        <Header />
        {children}
        <div id="modal-root"></div>
        <Footer />
      </body>
    </html>
  );
}
