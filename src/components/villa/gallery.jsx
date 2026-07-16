'use client';

import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { Expand } from 'lucide-react';
import { VILLA } from '@/data/villa';
import { toFa } from '@/lib/utils';
import { SectionHeading } from './section-heading';

const SLIDES = VILLA.photos.map((src) => ({ src }));

export function Gallery() {
  const [index, setIndex] = useState(-1);

  return (
    <section id="gallery" className="scroll-mt-4 bg-cream py-12">
      <div className="px-6">
        <SectionHeading eyebrow="گالری" title="تصاویر اقامتگاه" />
      </div>

      {/*
        Horizontal snap carousel: the photos are mixed portrait and landscape,
        so each sits in a fixed 4:5 frame to keep the rail from jumping.
      */}
      <div className="no-scrollbar flex snap-x snap-mandatory gap-3 overflow-x-auto px-6 pb-2">
        {VILLA.photos.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`بزرگ‌نمایی تصویر ${toFa(i + 1)}`}
            className="group relative aspect-[4/5] w-[74%] shrink-0 snap-center overflow-hidden rounded-card bg-sand"
          >
            <img
              src={src}
              alt={`نمایی از ${VILLA.name} - تصویر ${toFa(i + 1)}`}
              loading={i < 2 ? 'eager' : 'lazy'}
              decoding="async"
              className="h-full w-full object-cover transition-transform duration-700 group-active:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent opacity-0 transition-opacity group-active:opacity-100" />
            <span className="absolute bottom-3 left-3 flex h-8 w-8 items-center justify-center rounded-full bg-ink/45 text-white backdrop-blur-md">
              <Expand className="h-3.5 w-3.5" />
            </span>
            <span className="absolute bottom-3 right-3 rounded-full bg-ink/45 px-2.5 py-1 text-[0.65rem] font-medium text-white backdrop-blur-md">
              {toFa(i + 1)} / {toFa(VILLA.photos.length)}
            </span>
          </button>
        ))}
      </div>

      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={SLIDES}
        controller={{ closeOnBackdropClick: true }}
      />
    </section>
  );
}
