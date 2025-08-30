import './globals.css';
import { Inter } from 'next/font/google';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '500', '600', '700', '900'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
