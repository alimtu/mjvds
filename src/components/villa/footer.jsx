import { Phone, MapPin } from 'lucide-react';
import { VILLA, TEL_HREF } from '@/data/villa';

/** Jalali year, in Persian digits — the site is Persian, so 1405 not 2026. */
const jalaliYear = new Intl.DateTimeFormat('fa-IR-u-ca-persian', {
  year: 'numeric',
}).format(new Date());

export function Footer() {
  return (
    <footer className="bg-ink px-6 pb-28 pt-12 text-white">
      <div className="flex items-center gap-3">
        <img
          src={VILLA.hostAvatar}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="h-12 w-12 rounded-2xl object-cover"
        />
        <div>
          <span className="block text-[0.65rem] text-white/45">میزبان شما</span>
          <span className="block text-[0.95rem] font-bold">
            {VILLA.hostName}
          </span>
        </div>
      </div>

      <p className="mt-5 max-w-[20rem] text-[0.8rem] font-light leading-relaxed text-white/50">
        {VILLA.name}؛ اقامتگاهی دنج در {VILLA.city} با تراسی رو به کوهستان.
        منتظر میزبانی از شما هستیم.
      </p>

      <div className="mt-7 space-y-3 text-[0.8rem] font-light">
        <a href={TEL_HREF} className="flex items-center gap-2.5 text-white/75">
          <Phone className="h-3.5 w-3.5 text-white/30" />
          {VILLA.phone}
        </a>
        <p className="flex items-center gap-2.5 text-white/75">
          <MapPin className="h-3.5 w-3.5 text-white/30" />
          {VILLA.address}
        </p>
      </div>

      <div className="mt-9 border-t border-white/10 pt-5">
        <p className="text-[0.65rem] font-light text-white/30">
          © {jalaliYear} — تمامی حقوق برای {VILLA.name} محفوظ است.
        </p>
      </div>
    </footer>
  );
}
