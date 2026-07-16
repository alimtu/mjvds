import { MapPin, Navigation } from 'lucide-react';
import { VILLA, GOOGLE_MAPS_DIRECTIONS } from '@/data/villa';
import { SectionHeading } from './section-heading';

export function Location() {
  return (
    <section id="location" className="scroll-mt-4 bg-cream px-6 py-12">
      <SectionHeading eyebrow="موقعیت" title="کجا هستیم؟" />

      <div className="overflow-hidden rounded-card border border-line bg-white">
        <div className="flex items-start gap-3 p-5">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-clay/10 text-clay">
            <MapPin className="h-[1.05rem] w-[1.05rem]" strokeWidth={1.75} />
          </span>
          <div>
            <span className="block text-[0.9rem] font-semibold text-ink">
              {VILLA.address}
            </span>
            <p className="mt-1 text-[0.78rem] font-light leading-relaxed text-ink-soft">
              اقامتگاه در شهر علی‌آباد کتول قرار دارد؛ با دسترسی آسان به مرکز
              شهر و جاده‌ی جنگلی کوهستان.
            </p>
          </div>
        </div>

        <a
          href={GOOGLE_MAPS_DIRECTIONS}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-14 items-center justify-center gap-2 border-t border-line bg-white text-[0.85rem] font-bold text-forest transition-colors active:bg-sand"
        >
          <Navigation className="h-4 w-4" strokeWidth={2} />
          مسیریابی با گوگل مپ
        </a>
      </div>
    </section>
  );
}
