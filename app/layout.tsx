import type {Metadata} from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css'; // Global styles

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
});

export const metadata: Metadata = {
  title: 'Luminance Unisex Salon and Spa | Electronic City, Bangalore',
  description: 'Top Unisex Salon & Spa in Electronic City, Bangalore. Professional Hair, Skin & Spa Services. Book Your Appointment Today.',
  keywords: 'Salon in Electronic City, Unisex Salon in Bangalore, Spa near Bommasandra, Haircut, Facial, Bridal Makeup',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body className="font-sans bg-zinc-950 text-zinc-50 antialiased selection:bg-amber-500/30" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
