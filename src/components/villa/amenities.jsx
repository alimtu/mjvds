import {
  Utensils,
  Flame,
  Sun,
  Mountain,
  Wifi,
  Car,
  Tv,
  ArrowUpDown,
  Wind,
  Thermometer,
  WashingMachine,
  ShowerHead,
} from 'lucide-react';
import { AMENITIES } from '@/data/villa';
import { SectionHeading } from './section-heading';

const ICONS = {
  kitchen: Utensils,
  bbq: Flame,
  terrace: Sun,
  view: Mountain,
  wifi: Wifi,
  parking: Car,
  tv: Tv,
  elevator: ArrowUpDown,
  ac: Wind,
  heating: Thermometer,
  washer: WashingMachine,
  shower: ShowerHead,
};

export function Amenities() {
  return (
    <section id="amenities" className="scroll-mt-4 bg-cream px-6 py-12">
      <SectionHeading eyebrow="امکانات" title="آنچه در اختیار شماست" />

      <div className="grid grid-cols-2 gap-2.5">
        {AMENITIES.map(({ icon, label }) => {
          const Icon = ICONS[icon];
          return (
            <div
              key={icon}
              className="flex items-center gap-2.5 rounded-2xl border border-line bg-white px-3.5 py-3.5"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-forest/8 text-forest">
                <Icon className="h-[1.15rem] w-[1.15rem]" strokeWidth={1.75} />
              </span>
              <span className="text-[0.8rem] font-medium leading-tight text-ink">
                {label}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
