# ویلای محمدجواد — Rebrand & Redesign

**Date:** 2026-07-16
**Status:** Awaiting owner review

## Goal

Replace the existing "ویلای مصطفی" landing page with a mobile-only page for a
different property belonging to MohammadJavad. Strip every trace of the previous
owner, the previous property, and the portfolio project this repo was forked
from. Booking is by phone only.

## The property (single source of truth)

Every fact below is either from the Jabama payload the owner supplied
(accommodation `62beb243ddf6bf001dad75b9`, listing code `380611`) or verified by
inspecting the photos in `public/afra/`. Nothing here is inferred or invented.

| Field | Value | Source |
|---|---|---|
| Brand name | ویلای محمدجواد | Owner decision |
| Location | گلستان، علی‌آباد کتول | Jabama (`areaType: city`) |
| Coordinates | 36.903256, 54.8624191 | Owner |
| Phone | 09910811996 | Owner |
| Base capacity | 4 guests | Jabama `guests.base` |
| Max capacity | 8 guests | Jabama `guests.base + guests.extra` |
| Bedrooms | 1 | Jabama title (یک خوابه) |
| Beds | 2 single beds in the bedroom; floor mattresses (تشک) in the living room | Photo 8 + owner |
| Check-in | 14:00 | Jabama `checkIn` |
| Check-out | 12:00 | Jabama `checkOut` |
| Minimum stay | 1 night | Jabama `minNight` |

### Amenities

Verified from photographs:

- آشپزخانه مجهز — gas stove, oven, hood, fridge, sink (photos 6, 10)
- ماشین لباسشویی (photo 10)
- آتشدان و باربیکیوی سنگی (photos 1, 2, 3)
- تراس بزرگ (photos 1, 2, 3, 4)
- ویوی کوهستان و جنگل (photos 2, 3, 4)
- کولر گازی (photo 3)
- شوفاژ / رادیاتور (photo 8)
- سرویس بهداشتی با کابین دوش (photo 12)

Confirmed by the owner (not visible in photos):

- اینترنت وای‌فای
- پارکینگ
- تلویزیون
- آسانسور

### Assets

- 15 photos: `public/villa/1.jpeg` … `15.jpeg` (mixed portrait/landscape, ~1280px)
- Host avatar: `public/villa/mjvds.jpg` (1254×1254)
- Hero video: `video-1.MOV`, 23MB — must be converted to web mp4

## Explicitly false claims being removed

The current page describes a **different property in a different village**. All of
the following are untrue for this listing and must not survive:

- استخر آبگرم (hot tub) — no pool exists
- افراتخته / ارتفاع ۱۵۵۰ متری / اقیانوس ابر / جنگل‌های هیرکانی / درختان سرخدار —
  this property is in the town of علی‌آباد کتول (36.903, 54.862), roughly 15km
  from and well below Afratakhteh (36.793, 54.964)
- Host name, ratings, and description sourced from Jajiga room `3146019` —
  that is Mostafa's listing
- Phone 09384330636 — Mostafa's number

## Decisions

| Decision | Choice | Rationale |
|---|---|---|
| Identity | Brand as ویلای محمدجواد | Owner decision; the Jabama "apartment/personalRoom" typing is a platform category, not how the property is marketed |
| Content source | Hardcoded in `src/data/villa.js`; `/api/room` deleted | The Jajiga route points at the wrong property. The Jabama payload is an authenticated one-off checkout response, not a stable public API — fetching it at runtime would break without warning |
| Price | Not shown; "برای استعلام قیمت تماس بگیرید" | The data carries conflicting rates (base 9,980,000 vs 18,000,000 on actual booked dates). A stale or wrong price is worse than none, and omitting it drives the phone call that is now the only booking channel |
| Desktop | Mobile view in a centered 430px column over a blurred villa photo | Owner wants mobile only; the backdrop makes the constraint read as intentional |
| Map | Removed; directions button retained | Drops the Leaflet bundle from a mobile-only page while keeping the useful part |
| AI chat | **Kept and rebuilt**; existing AvalAI key, `api.avalai.ir` baseURL and `gpt-4o` model reused as-is | Owner decision (reversed an earlier call to drop it). Owner was offered an env-var move and explicitly chose to keep the current hardcoded config |
| Jabama link | Not shown | Owner decision — direct phone booking only |
| Video | Convert `video-1.MOV` → compressed mp4 via ffmpeg (confirmed installed, 8.1.2) | MOV does not play reliably outside Safari, and 23MB is unacceptable on mobile data. Target: H.264 mp4, no audio track, `+faststart`, 1080px max, a few MB. A poster frame is extracted from the video so the hero paints before it loads |
| Cancellation policy | **Omitted** | The Jabama "متعادل" policy governs Jabama bookings. This site takes direct phone bookings, so publishing those terms would commit the host to refund rules he never agreed to for direct guests |

## Architecture

```
src/data/villa.js              — every fact above; the only place they live
src/app/layout.js              — metadata, fonts, MobileShell
src/app/page.js                — composes sections, no content of its own
src/app/globals.css            — tokens + IRANSans faces
src/components/mobile-shell.jsx — 430px column + blurred desktop backdrop
src/components/villa/
  hero.jsx                     — video, scrim, name, location, scroll cue
  gallery.jsx                  — swipeable carousel + lightbox
  amenities.jsx                — icon grid
  terrace.jsx                  — feature section
  stay-info.jsx                — capacity, beds, check-in/out
  location.jsx                 — address + directions button
  call-bar.jsx                 — sticky bottom CTA (call + chat trigger)
  chat.jsx                     — AI assistant bottom sheet
  footer.jsx
```

Each section reads its data from `villa.js` and owns one concern. `page.js`
becomes a list of sections, so a section can be reordered or dropped without
touching anything else.

## Visual design

Palette derived from the property's own photographs:

| Token | Value | Origin |
|---|---|---|
| `--forest` | `#14442F` | The mountain treeline |
| `--cream` | `#FBF9F5` | Terrace stonework |
| `--clay` | `#C2643B` | Brickwork and carpets |
| `--ink` | `#1A1614` | Text |

Type is IRANSans (already correctly wired at `globals.css:49`). Geist is dropped —
the site is Persian-only and Geist was serving as an unused Latin fallback.

Three decisions carry the mobile UX:

1. **Sticky bottom call bar.** Thumb-reachable, always visible. Phone is the only
   booking channel, so the number must never be more than one tap away.
2. **Gallery as the hero product.** Full-width snap carousel with a peek of the
   next photo; tap opens the lightbox. Photos are mixed aspect ratio, so each sits
   in a fixed-ratio frame to stop layout shift.
3. **The terrace gets its own section.** The stone barbecue, the dining table, and
   the view over the rooftops are what distinguishes this listing.

## Deletions

**Firebase (all of it):** `src/lib/firebase.js`, `src/components/firebase-analytics.jsx`,
`src/components/push-notification.jsx`, `public/firebase-messaging-sw.js`,
`src/app/fcm-token/`, and the `firebase` dependency.

**Routes:** `src/app/api/room/`, `src/app/api/contact/`. (`api/chat/` is **kept**,
with its system prompt fully rewritten — see below.)

**Portfolio leftovers:** `contact-form.jsx`, `statistics-dashboard.jsx`,
`ai-chat.jsx`, `secret-redirect.jsx`, `navbar.jsx`, `profile-image.jsx`,
`animated-sections.jsx`, `animated-wrapper.jsx`, `expandable-section.jsx`,
`theme-toggle.jsx`, `theme-provider.jsx`, `motion.jsx`, `map-component.jsx`.
`ThemeProvider` must also be unwired from `layout.js`, which currently wraps the
whole tree in it.

**Most of `src/components/ui/`** — `button`, `card`, `badge`, `separator`.
Verified unreachable: `badge` is imported only by `animated-sections.jsx` (deleted
here), while `button`, `card`, and `separator` are imported by nothing in the
codebase today. `ui/drawer.jsx` is **kept** — it wraps `vaul` and is the bottom
sheet the rebuilt chat sits in. `src/lib/utils.js` (`cn`) is kept and used by the
new components.

Note: `drawer.jsx` styles itself with `bg-background` / `bg-muted` /
`text-foreground` / `text-muted-foreground`, so those theme tokens must survive
the `globals.css` rewrite or the drawer must be restyled to the new palette.

**Stray assets:** `public/ali.png`, `uni.png`, `drnext_logo.jpeg`,
`snapp_market_logo.jpeg`, `wallgold_logo.jpeg`, `sakok.jpg`, `next.svg`,
`vercel.svg`, `file.svg`, `globe.svg`, `window.svg`.

**Dependencies (10 of 21 removed):** `firebase`, `leaflet`, `react-leaflet`,
`recharts`, `nodemailer`, `react-photo-album`, `@radix-ui/react-separator`,
`@radix-ui/react-slot`, `@radix-ui/react-dialog`, `class-variance-authority`.
(`react-photo-album` and `@radix-ui/react-dialog` are already imported by nothing
today.)

**Dependencies kept:** `next`, `react`, `react-dom`, `framer-motion`,
`lucide-react`, `yet-another-react-lightbox`, `clsx`, `tailwind-merge`,
`next-pwa`, `openai` (AvalAI chat), `vaul` (chat bottom sheet).

**Rewritten:** `manifest.js` (currently declares "Ali Montazerion - Portfolio"),
`sitemap.js` (currently points at `aboutali.ir` with portfolio anchors),
`package.json` name field.

**Renamed:** `public/afra/` → `public/villa/` — "afra" refers to Afratakhteh, the
wrong village.

## AI assistant

Kept at the owner's request, reusing the current AvalAI configuration verbatim:
key hardcoded in `src/app/api/chat/route.js`, `baseURL: https://api.avalai.ir/v1`,
model `gpt-4o`, `max_tokens: 500`.

**The system prompt is rewritten from scratch.** The current one
(`route.js:9-51`) is ~40 lines asserting the Afratakhteh story — 1550m elevation,
the cloud ocean, thousand-year-old yew trees, "shekar-e mamnu" protected area —
plus Mostafa's phone number. Every one of those is false for this property. A
chatbot is more dangerous than static copy here because it will *actively assert*
these claims to a guest who asks, so the prompt is rebuilt from the verified facts
table above and constrained to them.

Prompt requirements:

- Villa name ویلای محمدجواد, in علی‌آباد کتول، گلستان; phone 09910811996
- Capacity, bedrooms, bed arrangement, check-in/out exactly as the facts table
- Only the verified + owner-confirmed amenities; no others
- **Never quote a price** — direct all pricing to a phone call, consistent with
  the page
- **Never invent an amenity or a nearby attraction.** If asked something not in
  the prompt, say so and refer the guest to the phone number
- Persian, warm and hospitable, scoped to this property and its booking

**The UI is rebuilt, not rebranded.** `ai-chat.jsx` is still substantially the
portfolio original: `DrawerTitle` reads "Chat with AI", `DrawerDescription` reads
"Ask about Ali's experience", the input placeholder is "Ask about Ali's
experience...", and the footer reads "Ask me anything about Ali" — English LTR UI
in sky-blue, wrapped around a Persian greeting about the wrong village. It is
replaced by `components/villa/chat.jsx` in the new palette, RTL, with a Persian
greeting and error string (the current error message, "Sorry, I encountered an
error", is also English).

**Chat and call must not fight for the same corner.** The old chat used a floating
button at `bottom-6 right-6`, which would sit on top of the new sticky call bar.
Instead, the call bar owns the bottom edge and carries both actions: a primary
تماس button and a secondary chat trigger beside it.

## Security — owner has accepted this risk

`src/app/api/chat/route.js:4` contains a live AvalAI API key hardcoded in source
and already committed to git history. The owner was offered a move to an env var
and chose to keep the current configuration, so this design keeps it as-is.

Recording the residual risk plainly: the key is readable by anyone with repo
access, it remains in git history regardless of any future change to the file, and
it will be published if this repository is ever made public. Rotating it at AvalAI
is the only thing that revokes it. This is the owner's call to make, and it is
made — noted here so it is a decision on record rather than an oversight.

## Out of scope

- Rewriting git history to purge the exposed key, or rotating it (owner's call)
- Moving the AvalAI key to an env var (owner declined)
- Any booking/calendar system — phone only
- Renaming the repository directory itself (`Project/mostafa`)
- Multi-language support — Persian only

## Open items

- Cancellation policy is omitted (see Decisions). If the host wants terms shown
  for direct bookings, he must state what those terms are.
