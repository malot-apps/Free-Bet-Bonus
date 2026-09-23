import type {Metadata} from 'next';
import './globals.css'; // Global styles

export const metadata: Metadata = {
  title: 'BetBonus — প্রিমিয়াম রিওয়ার্ড ডেমো',
  description: 'একটি এডুকেশনাল সিমুলেশনের মাধ্যমে প্রিমিয়াম রিওয়ার্ড ইন্টারফেস এক্সপ্লোর করুন। কোনো ডিপোজিট বা আসল টাকা ছাড়াই।',
  openGraph: {
    title: 'BetBonus — প্রিমিয়াম রিওয়ার্ড ডেমো',
    description: 'একটি এডুকেশনাল সিমুলেশনের মাধ্যমে প্রিমিয়াম রিওয়ার্ড ইন্টারফেস এক্সপ্লোর করুন। কোনো ডিপোজিট বা আসল টাকা ছাড়াই।',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BetBonus — প্রিমিয়াম রিওয়ার্ড ডেমো',
    description: 'একটি এডুকেশনাল সিমুলেশনের মাধ্যমে প্রিমিয়াম রিওয়ার্ড ইন্টারফেস এক্সপ্লোর করুন। কোনো ডিপোজিট বা আসল টাকা ছাড়াই।',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="bn">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
