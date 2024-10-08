import React from 'react'
import { SessionProvider } from 'next-auth/react';
import Header from '@/components/Header';
import { Toaster } from '@/components/ui/toaster';
import Footer from '@/components/Footer';
import { Inter } from 'next/font/google';
import Navbar from '@/components/navbar';

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div>
          <Navbar />
          {children}
          <Footer />
      </div>
    );
  }