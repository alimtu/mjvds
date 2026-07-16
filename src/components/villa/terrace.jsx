import { Flame, Mountain, Utensils, Footprints } from 'lucide-react';
import { VILLA } from '@/data/villa';

/**
 * The terrace is what distinguishes this listing, so it gets its own section
 * rather than three icons in the amenity grid. Everything stated here is
 * visible in photos 1-4: the stone barbecue, the dining table, the view.
 */
const HIGHLIGHTS = [
  { icon: Flame, text: 'آتشدان و باربیکیوی سنگی، آماده برای کباب' },
  { icon: Utensils, text: 'میز غذاخوری در فضای باز، زیر سایه‌بان' },
  { icon: Mountain, text: 'چشم‌انداز باز به کوه‌های جنگلی' },
];

export function Terrace() {
  return (
    <section className="relative overflow-hidden bg-forest-deep px-6 py-14 text-white">
      <img
        src="/villa/3.jpeg"
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-20"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-forest-deep/70 via-forest-deep/85 to-forest-deep" />

      <div className="relative">
        <span className="mb-2 flex items-center gap-2 text-[0.7rem] font-semibold tracking-wide text-clay">
          <span className="h-px w-5 bg-clay/60" />
          تراس
        </span>
        <h2 className="text-2xl font-bold leading-snug">
          قلب اقامتگاه، بیرون از خانه است
        </h2>
        <p className="mt-3 text-[0.9rem] font-light leading-relaxed text-white/70">
          تراس سرپوشیده و بزرگ اقامتگاه، جایی است که بیشتر وقتتان را در آن
          می‌گذرانید؛ صبح با قهوه و منظره‌ی کوه، و شب کنار آتش باربیکیو.
        </p>

        <ul className="mt-7 space-y-3.5">
          {HIGHLIGHTS.map(({ icon: Icon, text }) => (
            <li key={text} className="flex items-center gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/10 text-clay">
                <Icon className="h-[1.05rem] w-[1.05rem]" strokeWidth={1.75} />
              </span>
              <span className="text-[0.85rem] leading-snug text-white/85">
                {text}
              </span>
            </li>
          ))}
        </ul>

        {/*
          Access, not a selling point — so it sits apart from the HIGHLIGHTS
          list rather than posing as a fourth one.
        */}
        <div className="mt-7 flex items-start gap-3 rounded-2xl border border-white/15 bg-white/5 p-4">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/10 text-white/70">
            <Footprints className="h-[1.05rem] w-[1.05rem]" strokeWidth={1.75} />
          </span>
          <div>
            <span className="block text-[0.7rem] font-semibold text-white/50">
              دسترسی
            </span>
            <p className="mt-1 text-[0.82rem] font-light leading-relaxed text-white/75">
              {VILLA.terraceAccess}
            </p>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-2.5">
          <img
            src="/villa/1.jpeg"
            alt="آتشدان سنگی و میز غذاخوری در تراس"
            loading="lazy"
            className="aspect-[4/5] w-full rounded-2xl object-cover"
          />
          <img
            src="/villa/4.jpeg"
            alt="چشم‌انداز کوهستان از تراس اقامتگاه"
            loading="lazy"
            className="aspect-[4/5] w-full rounded-2xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}
