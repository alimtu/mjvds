'use client';

import { useState, useRef, useEffect } from 'react';
import { Send, Loader2, Sparkles, X } from 'lucide-react';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from '@/components/ui/drawer';
import { VILLA } from '@/data/villa';

const GREETING = {
  role: 'assistant',
  content: `سلام! 👋 من دستیار ${VILLA.name} هستم. درباره‌ی امکانات، ظرفیت، موقعیت یا نحوه‌ی رزرو بپرسید.`,
};

const SUGGESTIONS = [
  'چه امکاناتی دارد؟',
  'ظرفیت اقامتگاه چقدر است؟',
  'ساعت ورود و خروج؟',
];

export function ChatSheet({ open, onOpenChange }) {
  const [messages, setMessages] = useState([GREETING]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  async function send(text) {
    const content = text.trim();
    if (!content || isLoading) return;

    const next = [...messages, { role: 'user', content }];
    setMessages(next);
    setInput('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        // Drop the local greeting; it is UI, not conversation history.
        body: JSON.stringify({ messages: next.slice(1) }),
      });
      const data = await res.json();
      if (data.error) throw new Error(data.error);
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: data.message },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: `متأسفم، ارتباط برقرار نشد. لطفاً دوباره تلاش کنید یا با شماره ${VILLA.phone} تماس بگیرید.`,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent className="mx-auto max-h-[88dvh] max-w-[430px] border-line bg-cream">
        <DrawerHeader className="border-b border-line pb-3 pt-1">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-forest text-white">
                <Sparkles className="h-4 w-4" />
              </span>
              <div className="text-right">
                <DrawerTitle className="text-[0.9rem] font-bold text-ink">
                  دستیار {VILLA.shortName}
                </DrawerTitle>
                <DrawerDescription className="text-[0.7rem] text-ink-soft">
                  پاسخ به سوالات درباره‌ی اقامتگاه
                </DrawerDescription>
              </div>
            </div>
            <DrawerClose asChild>
              <button
                aria-label="بستن"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-sand text-ink-soft"
              >
                <X className="h-4 w-4" />
              </button>
            </DrawerClose>
          </div>
        </DrawerHeader>

        <div className="min-h-[240px] flex-1 space-y-3 overflow-y-auto px-4 py-4">
          {messages.map((m, i) => (
            <div
              key={i}
              className={`flex ${m.role === 'user' ? 'justify-start' : 'justify-end'}`}
            >
              <div
                className={`max-w-[82%] rounded-2xl px-3.5 py-2.5 text-[0.82rem] leading-relaxed ${
                  m.role === 'user'
                    ? 'rounded-tr-md bg-forest text-white'
                    : 'rounded-tl-md border border-line bg-white text-ink'
                }`}
              >
                {m.content}
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex justify-end">
              <div className="rounded-2xl rounded-tl-md border border-line bg-white px-4 py-3">
                <div className="flex gap-1">
                  {[0, 150, 300].map((d) => (
                    <span
                      key={d}
                      className="h-1.5 w-1.5 animate-bounce rounded-full bg-ink-soft/50"
                      style={{ animationDelay: `${d}ms` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}
          <div ref={endRef} />
        </div>

        {messages.length === 1 && (
          <div className="no-scrollbar flex gap-2 overflow-x-auto px-4 pb-3">
            {SUGGESTIONS.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => send(s)}
                className="shrink-0 rounded-full border border-line bg-white px-3 py-1.5 text-[0.72rem] font-medium text-ink-soft"
              >
                {s}
              </button>
            ))}
          </div>
        )}

        <form
          onSubmit={(e) => {
            e.preventDefault();
            send(input);
          }}
          className="flex gap-2 border-t border-line bg-cream px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-3"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="سوالتان را بنویسید..."
            disabled={isLoading}
            className="h-11 flex-1 rounded-xl border border-line bg-white px-3.5 text-[0.82rem] text-ink outline-none placeholder:text-ink-soft/60 focus:border-forest-soft"
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            aria-label="ارسال"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-forest text-white disabled:opacity-40"
          >
            {isLoading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Send className="h-4 w-4 -scale-x-100" />
            )}
          </button>
        </form>
      </DrawerContent>
    </Drawer>
  );
}
