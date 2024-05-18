import FloatingButton from '@/components/FloatingButton';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Loading from '@/components/Loading';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Suspense } from 'react';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} `}>
        <Suspense fallback={<Loading />}>
          <Header />
          {children}
          <FloatingButton />
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}