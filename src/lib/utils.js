import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const FA_DIGITS = '۰۱۲۳۴۵۶۷۸۹';

/** Render Latin digits as Persian ones. */
export function toFa(value) {
  return String(value).replace(/\d/g, (d) => FA_DIGITS[d]);
}
