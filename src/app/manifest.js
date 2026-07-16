import { VILLA } from '@/data/villa';

export default function manifest() {
  return {
    name: `${VILLA.name} | اقامتگاه در ${VILLA.city}`,
    short_name: VILLA.shortName,
    description:
      'اقامتگاه محمدجواد در علی‌آباد کتول؛ تراس بزرگ، باربیکیوی سنگی و چشم‌انداز کوهستان.',
    start_url: '/',
    display: 'standalone',
    background_color: '#fbf9f5',
    theme_color: '#14442f',
    orientation: 'portrait',
    icons: [
      {
        src: VILLA.hostAvatar,
        sizes: '192x192',
        type: 'image/jpeg',
        purpose: 'any',
      },
      {
        src: VILLA.hostAvatar,
        sizes: '512x512',
        type: 'image/jpeg',
        purpose: 'any',
      },
    ],
    categories: ['travel', 'lifestyle'],
    lang: 'fa',
    dir: 'rtl',
  };
}
