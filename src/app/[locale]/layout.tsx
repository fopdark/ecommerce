/* eslint-disable @next/next/no-img-element */
import '@/styles/global.css';
import 'react-toastify/dist/ReactToastify.css';

// Import slick css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { NextIntlClientProvider, useMessages } from 'next-intl';
import React from 'react';

import Loading from '@/components/Loading';

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: 'ko' | 'en_US' };
}) {
  // Validate that the incoming `locale` parameter is valid
  // Using internationalization in Client Components
  const messages = useMessages();

  return (
    <html lang={locale}>
      <body>
        <Loading />
        <div id="main-content">
          <NextIntlClientProvider locale={locale} messages={messages}>
            {children}
          </NextIntlClientProvider>
        </div>
      </body>
    </html>
  );
}
