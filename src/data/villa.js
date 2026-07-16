/**
 * Single source of truth for the villa.
 *
 * Every value here is either taken from the owner's Jabama listing data
 * (accommodation 62beb243ddf6bf001dad75b9, code 380611) or verified by
 * inspecting the photographs in /public/villa. Nothing is invented.
 *
 * Do not add an amenity, attraction, or price that cannot be traced to one of
 * those two sources — guests book and pay based on this page.
 */

/**
 * Deployment domain. Inherited from the previous owner's site — "afra" refers to
 * Afratakhteh, which is not where this property is. Change this when the villa
 * gets its own domain; it is the only place the URL is written.
 */
export const SITE_URL = 'https://afra-landing.ir';

export const VILLA = {
  name: 'ویلای محمدجواد',
  shortName: 'ویلای محمدجواد',
  tagline: 'اقامتی آرام در علی‌آباد کتول، با تراسی رو به کوهستان',

  city: 'علی‌آباد کتول',
  province: 'گلستان',
  address: 'گلستان، علی‌آباد کتول',

  phone: '09910811996',
  phoneDigits: '09910811996',
  whatsapp: '989910811996',

  coords: { lat: 36.903256, lng: 54.8624191 },

  capacity: { base: 4, max: 8 },
  bedrooms: 1,
  beds: 'دو تخت یک‌نفره در اتاق خواب، به‌همراه تشک و رختخواب در پذیرایی',

  checkIn: '۱۴:۰۰',
  checkOut: '۱۲:۰۰',
  minNights: 1,

  /** Jabama `reservationType: "instant"` — no host approval step. */
  instantBooking: true,

  /** Top floor of an apartment block in town; there is a lift. */
  buildingType: 'آپارتمان طبقه آخر در مجتمع مسکونی، دارای آسانسور',

  video: '/villa/video-1.mp4',
  videoPoster: '/villa/video-poster.jpg',
  hostAvatar: '/villa/mjvds.jpg',
  hostName: 'محمدجواد',

  photos: Array.from({ length: 15 }, (_, i) => `/villa/${i + 1}.jpeg`),
};

/**
 * The rooms, as they actually appear in /public/villa. Each entry cites the
 * photo it was written from — if you cannot point at it in that photo, it does
 * not belong in the description.
 */
export const SPACES = [
  {
    key: 'terrace',
    title: 'تراس سرپوشیده',
    photo: '/villa/3.jpeg',
    description:
      'تراس بزرگ و سرپوشیده با کف سرامیک روشن، آتشدان و باربیکیوی سنگی با دودکش، میز غذاخوری چوبی شش‌نفره، میز و صندلی سبک حیاطی، گلدان‌های فراوان و چشم‌انداز باز به شهر و کوه‌های جنگلی.',
  },
  {
    key: 'living',
    title: 'پذیرایی',
    photo: '/villa/6.jpeg',
    description:
      'پذیرایی نسبتاً بزرگ با مبلمان کلاسیک، فرش‌های قرمز، سقف کناف با نورپردازی مخفی و ارتباط مستقیم با آشپزخانه. محل استراحت مهمانان اضافه (با تشک و رختخواب) همین فضاست.',
  },
  {
    key: 'kitchen',
    title: 'آشپزخانه',
    photo: '/villa/10.jpeg',
    description:
      'آشپزخانه اپن و مجهز: اجاق گاز و فر، هود، یخچال، سینک ظرفشویی و کابینت‌بندی کامل. ماشین لباسشویی هم در همین فضا قرار دارد.',
  },
  {
    key: 'bedroom',
    title: 'اتاق خواب',
    photo: '/villa/8.jpeg',
    description:
      'یک اتاق خواب با دو تخت یک‌نفره (کنار هم)، کمد دیواری بزرگ، دراور و شوفاژ.',
  },
  {
    key: 'bathroom',
    title: 'حمام و سرویس',
    photo: '/villa/12.jpeg',
    description:
      'حمام با کابین دوش، روشویی با آینه و باکس، و سرویس بهداشتی. رادیاتور حوله‌خشک‌کن نیز موجود است.',
  },
];

/**
 * `icon` values map to keys in the ICONS table in components/villa/amenities.jsx.
 * `source` records why we are allowed to claim it.
 */
export const AMENITIES = [
  { icon: 'kitchen', label: 'آشپزخانه مجهز', source: 'photo' },
  { icon: 'bbq', label: 'باربیکیو و آتشدان سنگی', source: 'photo' },
  { icon: 'terrace', label: 'تراس بزرگ', source: 'photo' },
  { icon: 'view', label: 'ویوی کوهستان', source: 'photo' },
  { icon: 'wifi', label: 'اینترنت وای‌فای', source: 'owner' },
  { icon: 'parking', label: 'پارکینگ', source: 'owner' },
  { icon: 'tv', label: 'تلویزیون', source: 'owner' },
  { icon: 'elevator', label: 'آسانسور', source: 'owner' },
  { icon: 'ac', label: 'کولر گازی', source: 'photo' },
  { icon: 'heating', label: 'شوفاژ', source: 'photo' },
  { icon: 'washer', label: 'ماشین لباسشویی', source: 'photo' },
  { icon: 'shower', label: 'حمام و سرویس بهداشتی', source: 'photo' },
];

export const GOOGLE_MAPS_DIRECTIONS = `https://www.google.com/maps/dir/?api=1&destination=${VILLA.coords.lat},${VILLA.coords.lng}`;

export const TEL_HREF = `tel:${VILLA.phone}`;
