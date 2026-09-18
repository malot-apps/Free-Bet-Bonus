import type {Metadata} from 'next';
import './globals.css'; // Global styles

export const metadata: Metadata = {
  title: 'BetBonus — Premium Rewards Demo',
  description: 'Explore a premium rewards interface through an educational simulation. No real money, deposits or withdrawals.',
  openGraph: {
    title: 'BetBonus — Premium Rewards Demo',
    description: 'Explore a premium rewards interface through an educational simulation. No real money, deposits or withdrawals.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BetBonus — Premium Rewards Demo',
    description: 'Explore a premium rewards interface through an educational simulation. No real money, deposits or withdrawals.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
