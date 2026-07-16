import { VILLA, SITE_URL } from '@/data/villa';
import { MobileShell } from '@/components/mobile-shell';
import './globals.css';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${VILLA.name} | اقامتگاه در ${VILLA.city}`,
    template: `%s | ${VILLA.name}`,
  },
  description:
    'اقامتگاه محمدجواد در علی‌آباد کتول؛ آپارتمانی دنج با تراس بزرگ، باربیکیوی سنگی و چشم‌انداز کوهستان. ظرفیت ۴ تا ۸ نفر. برای رزرو تماس بگیرید.',
  keywords: [
    'ویلای محمدجواد',
    'اجاره ویلا در علی‌آباد کتول',
    'اقامتگاه علی‌آباد کتول',
    'اجاره روزانه ویلا گلستان',
    'ویلا با تراس و باربیکیو',
    'رزرو اقامتگاه گلستان',
  ],
  authors: [{ name: VILLA.name }],
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: 'website',
    locale: 'fa_IR',
    url: SITE_URL,
    siteName: VILLA.name,
    title: `${VILLA.name} | اقامتگاه در ${VILLA.city}`,
    description:
      'تراس بزرگ رو به کوهستان، باربیکیوی سنگی و آشپزخانه مجهز. ظرفیت ۴ تا ۸ نفر در علی‌آباد کتول.',
    images: [
      {
        url: VILLA.photos[3],
        width: 1280,
        height: 720,
        alt: VILLA.name,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: VILLA.hostAvatar,
    apple: VILLA.hostAvatar,
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#14442f',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className="antialiased">
        <MobileShell>{children}</MobileShell>
      </body>
    </html>
  );
}
