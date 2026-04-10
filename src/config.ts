/**
 * Runtime config that controls the landing page behavior.
 * Flip LAUNCH_MODE from "waitlist" to "launched" on launch day.
 */

export type LaunchMode = 'waitlist' | 'launched'

export const LAUNCH_MODE: LaunchMode = 'waitlist'

/** Human-readable launch date for the hero badge. Replace before deploy. */
export const LAUNCH_DATE = 'Coming Soon'

/** Real App Store URL — placeholder until listing is live. */
export const APP_STORE_URL = '#'

/** Real Google Play URL — placeholder until listing is live. */
export const PLAY_STORE_URL = '#'

/** Waitlist endpoint on pointstax-api. */
export const WAITLIST_ENDPOINT =
  import.meta.env.VITE_WAITLIST_ENDPOINT ?? 'https://api.pointstax.ai/api/v1/waitlist'
