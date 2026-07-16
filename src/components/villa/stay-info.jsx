import { Users, BedDouble, LogIn, LogOut } from 'lucide-react';
import { VILLA, TEL_HREF } from '@/data/villa';
import { toFa } from '@/lib/utils';
import { SectionHeading } from './section-heading';

export function StayInfo() {
  const facts = [
    {
      icon: Users,
      label: 'ظرفیت',
      value: `${toFa(VILLA.capacity.base)} نفر (تا ${toFa(VILLA.capacity.max)})`,
    },
    {
      icon: BedDouble,
      label: 'اتاق خواب',
      value: `${toFa(VILLA.bedrooms)} خوابه`,
    },
    { icon: LogIn, label: 'ورود', value: `از ساعت ${VILLA.checkIn}` },
    { icon: LogOut, label: 'خروج', value: `تا ساعت ${VILLA.checkOut}` },
  ];

  return (
    <section id="stay" className="scroll-mt-4 bg-sand px-6 py-12">
      <SectionHeading eyebrow="اقامت" title="جزئیات اقامت شما" />

      <div className="grid grid-cols-2 gap-2.5">
        {facts.map(({ icon: Icon, label, value }) => (
          <div
            key={label}
            className="rounded-2xl border border-line bg-white p-4"
          >
            <Icon
              className="mb-2.5 h-[1.15rem] w-[1.15rem] text-forest"
              strokeWidth={1.75}
            />
            <span className="block text-[0.68rem] text-ink-soft">{label}</span>
            <span className="mt-0.5 block text-[0.85rem] font-semibold text-ink">
              {value}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-2.5 rounded-2xl border border-line bg-white p-4">
        <span className="block text-[0.68rem] text-ink-soft">
          نحوه استراحت
        </span>
        <p className="mt-1 text-[0.82rem] font-medium leading-relaxed text-ink">
          {VILLA.beds}
        </p>
      </div>

      {/*
        No price is published. The owner's rates differ sharply between ordinary
        and peak dates, and a stale number here would mislead a paying guest.
      */}
      <div className="mt-2.5 rounded-2xl bg-forest p-5 text-white">
        <span className="block text-[0.68rem] text-white/60">قیمت</span>
        <p className="mt-1.5 text-[0.9rem] font-semibold leading-relaxed">
          نرخ اقامت بسته به تاریخ و تعداد نفرات متفاوت است.
        </p>
        <p className="mt-1 text-[0.78rem] font-light leading-relaxed text-white/65">
          برای استعلام قیمت و تقویم خالی، تماس بگیرید. حداقل مدت اقامت{' '}
          {toFa(VILLA.minNights)} شب است.
        </p>
        <a
          href={TEL_HREF}
          className="mt-4 flex h-11 items-center justify-center rounded-xl bg-white text-[0.85rem] font-bold text-forest transition-transform active:scale-[0.98]"
        >
          استعلام قیمت
        </a>
      </div>
    </section>
  );
}
