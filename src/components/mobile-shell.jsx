import { VILLA } from '@/data/villa';

/**
 * The site is mobile-only by design. On a wide screen we keep the phone-width
 * column and fill the surround with a blurred villa photo, so the constraint
 * reads as deliberate rather than as a broken desktop layout.
 */
export function MobileShell({ children }) {
  return (
    <div className="relative min-h-dvh w-full bg-ink">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 hidden bg-cover bg-center lg:block"
        style={{ backgroundImage: `url(${VILLA.photos[3]})` }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 hidden backdrop-blur-3xl lg:block bg-ink/75"
      />

      <div className="relative mx-auto min-h-dvh w-full max-w-[430px] bg-cream text-ink shadow-[0_0_80px_rgba(0,0,0,0.55)]">
        {children}
      </div>
    </div>
  );
}
