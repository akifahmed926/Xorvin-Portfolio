import type { Metadata } from 'next';
import { Michroma, Inter } from 'next/font/google';
import './globals.css';

const michroma = Michroma({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
  fallback: ['sans-serif'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  fallback: ['system-ui', 'sans-serif'],
});

export const metadata: Metadata = {
  title: 'Xorvin Portfolio — AI Automation, Web & App Development Agency',
  description: 'Xorvin transforms ambitious ideas into intelligent AI automation, web, and app solutions.',
  openGraph: {
    title: 'Xorvin Portfolio — AI Automation, Web & App Development Agency',
    description: 'Xorvin transforms ambitious ideas into intelligent AI automation, web, and app solutions.',
    url: 'https://xorvin.io',
    siteName: 'Xorvin',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Xorvin Portfolio — AI Automation, Web & App Development Agency',
    description: 'Xorvin transforms ambitious ideas into intelligent AI automation, web, and app solutions.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`dark scroll-smooth ${michroma.variable} ${inter.variable}`}>
      <body className="bg-background text-text-primary min-h-screen antialiased selection:bg-primary selection:text-black">
        {children}
      </body>
    </html>
  );
}
