'use client';

import { useState } from 'react';
import { Phone, Sparkles } from 'lucide-react';
import { VILLA, TEL_HREF } from '@/data/villa';
import { ChatSheet } from './chat';

/**
 * Phone is the only booking channel, so the number stays one thumb-tap away at
 * all times. The chat trigger lives in this bar rather than floating over it.
 */
export function CallBar() {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <>
      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-40 mx-auto w-full max-w-[430px]">
        <div className="pointer-events-auto flex items-center gap-2 border-t border-line bg-cream/90 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur-xl">
          <a
            href={TEL_HREF}
            className="flex h-13 flex-1 items-center justify-center gap-2.5 rounded-2xl bg-forest text-white transition-transform active:scale-[0.98]"
          >
            <Phone className="h-4 w-4" strokeWidth={2.25} />
            <span className="flex flex-col items-start leading-none">
              <span className="text-[0.62rem] font-light text-white/60">
                تماس و رزرو
              </span>
              <span className="mt-1 text-[0.95rem] font-bold tracking-wide">
                {VILLA.phone}
              </span>
            </span>
          </a>

          <button
            type="button"
            onClick={() => setChatOpen(true)}
            aria-label="گفتگو با دستیار هوشمند"
            className="flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl border border-line bg-white text-forest transition-transform active:scale-[0.98]"
          >
            <Sparkles className="h-[1.15rem] w-[1.15rem]" strokeWidth={1.75} />
          </button>
        </div>
      </div>

      <ChatSheet open={chatOpen} onOpenChange={setChatOpen} />
    </>
  );
}
