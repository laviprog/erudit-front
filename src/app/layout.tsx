import './globals.css';
import { Inter } from 'next/font/google';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import { Slide, ToastContainer } from 'react-toastify';

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
