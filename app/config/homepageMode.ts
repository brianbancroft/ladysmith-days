/**
 * Controls which version of the homepage is shown.
 *
 * - 'ramp-up' — before the schedule is finalized. Save-the-date + get involved, no schedule/maps.
 * - 'active'  — schedule is live, event is upcoming or underway.
 * - 'post'    — event just wrapped up. Thank-you recap + save-the-date for next year.
 *
 * Flip this by hand when the event's status changes — ask Claude to update it,
 * or edit the string directly and redeploy.
 */
export type HomepageMode = 'ramp-up' | 'active' | 'post'

export const HOMEPAGE_MODE: HomepageMode = 'post'
