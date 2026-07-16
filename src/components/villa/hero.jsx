import { MapPin, Users, ChevronDown } from 'lucide-react';
import { VILLA } from '@/data/villa';
import { toFa } from '@/lib/utils';

export function Hero() {
  return (
    <section className="relative h-[92dvh] w-full overflow-hidden bg-ink">
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        poster={VILLA.videoPoster}
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={VILLA.video} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-ink/50" />

      <div className="relative flex h-full flex-col justify-end px-6 pb-14">
        <div className="animate-rise">
          <div className="mb-5 inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-[0.7rem] font-medium text-white backdrop-blur-md">
            <MapPin className="h-3.5 w-3.5" />
            {VILLA.address}
          </div>

          <h1 className="text-[2.6rem] font-bold leading-[1.15] text-white">
            {VILLA.name}
          </h1>

          <p className="mt-3 max-w-[22rem] text-[0.95rem] font-light leading-relaxed text-white/75">
            {VILLA.tagline}
          </p>

          <div className="mt-6 flex items-center gap-2 text-[0.8rem] text-white/70">
            <Users className="h-4 w-4" />
            <span>
              ظرفیت {toFa(VILLA.capacity.base)} نفر، تا {toFa(VILLA.capacity.max)}{' '}
              نفر
            </span>
          </div>
        </div>

        <a
          href="#gallery"
          aria-label="مشاهده تصاویر"
          className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/50 transition-colors hover:text-white"
        >
          <ChevronDown className="h-6 w-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
