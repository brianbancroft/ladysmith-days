import type { ReactNode } from 'react'

type ScheduleItem = {
  title: ReactNode
  time: string
  emphasis?: boolean
}

type ScheduleVenue = {
  label: string
  mapHref: string
  dotColor: string
  chipBg: string
  chipColor: string
  items: ScheduleItem[]
  note?: ReactNode
}

const saturday: ScheduleVenue[] = [
  {
    label: 'Oyster Bay Marina',
    mapHref: 'https://www.google.com/maps/search/?api=1&query=48.996127,-123.814068',
    dotColor: '#8E5BB5',
    chipBg: '#F0E8F8',
    chipColor: '#8E5BB5',
    items: [{ title: 'Bullhead Derby', time: '7 AM' }],
  },
  {
    label: 'Transfer Beach',
    mapHref: 'https://maps.app.goo.gl/paWKAUm6MGFgEuLm9',
    dotColor: '#EF5562',
    chipBg: '#FDE7E9',
    chipColor: '#EF5562',
    items: [
      { title: 'Rotary Pancake Breakfast', time: '9:30 AM' },
      { title: 'Ladysmith Days Expo & Market', time: '10 AM', emphasis: true },
      { title: 'Kids Crafts Table', time: '10 AM' },
      { title: 'Old Time Games', time: '12 PM' },
      { title: 'Beer Garden', time: '4 PM' },
      { title: 'Kids Entertainment (Woodstick)', time: '12 PM' },
      { title: 'Nail Driving Contest', time: '1 PM' },
      { title: 'Zucchini Races', time: '2 PM' },
      { title: 'Greasy Pole Contest', time: '3 PM' },
      {
        title: (
          <>
            Professional Wrestling{' '}
            <span className="font-semibold text-sm text-ld-slate">feat. VIPW</span>
          </>
        ),
        time: '5:15 PM',
        emphasis: true,
      },
    ],
  },
]

const sunday: ScheduleVenue[] = [
  {
    label: 'Downtown 1st Ave',
    mapHref: 'https://www.google.com/maps/search/?api=1&query=48.993262,-123.817340',
    dotColor: '#1FA3A0',
    chipBg: '#E0F4F3',
    chipColor: '#158784',
    items: [
      {
        title: (
          <>
            Soap Box Derby{' '}
            <span className="font-medium text-sm text-ld-slate whitespace-nowrap">
              — meet at 1st &amp; Gatacre
            </span>
          </>
        ),
        time: '10 AM',
        emphasis: true,
      },
      { title: 'Skateboard Demo', time: '10 AM' },
    ],
  },
  {
    label: 'Transfer Beach',
    mapHref: 'https://maps.app.goo.gl/paWKAUm6MGFgEuLm9',
    dotColor: '#EF5562',
    chipBg: '#FDE7E9',
    chipColor: '#EF5562',
    items: [
      {
        title: (
          <>
            <span style={{ color: '#2E4FA3' }}>L</span>
            <span style={{ color: '#F58220' }}>D</span>
            <span style={{ color: '#6CBE45' }}>C</span>
            <span style={{ color: '#56B4E4' }}>U</span> Kids Fun Zone
          </>
        ),
        time: '11 AM',
        emphasis: true,
      },
      { title: 'Bands on the Beach', time: '12 PM', emphasis: true },
    ],
    note: (
      <>
        With beer garden featuring <strong>Bayview Brewing</strong>.
      </>
    ),
  },
]

const bands = ['Peace, Love and Joy', 'Sarah Leo', 'Sol Blue Vibes', 'Pontiac Bandits', 'Ryan Mc Mahon']

function VenueBlock({ venue }: { venue: ScheduleVenue }) {
  return (
    <div className="flex flex-col gap-2">
      <a
        href={venue.mapHref}
        target="_blank"
        rel="noopener noreferrer"
        className="self-start flex items-center gap-2 font-bold text-sm px-3.5 py-1.5 rounded-full transition-colors"
        style={{ background: venue.chipBg, color: venue.chipColor }}
      >
        <span
          className="w-[9px] h-[9px] rounded-full inline-block"
          style={{ background: venue.dotColor }}
        />
        {venue.label}
        <span className="text-xs font-semibold opacity-75">Map ↗</span>
      </a>
      {venue.items.map(({ title, time, emphasis }, i) => (
        <div key={i} className="flex justify-between gap-3 items-baseline">
          <span className={`text-base ${emphasis ? 'font-bold' : 'font-semibold'}`}>{title}</span>
          <span className="font-extrabold text-sm whitespace-nowrap">{time}</span>
        </div>
      ))}
      {venue.note ? (
        <p className="m-0 text-sm font-medium text-ld-slate leading-relaxed">{venue.note}</p>
      ) : null}
    </div>
  )
}

export function SectionSchedule() {
  return (
    <section id="schedule" className="pt-14 pb-8 px-4 max-w-[1160px] mx-auto">
      <div className="text-center flex flex-col gap-2.5 items-center mb-8">
        <h2 className="m-0 font-extrabold text-[clamp(30px,4.4vw,52px)] text-ld-navy">
          The Schedule
        </h2>
        <div className="w-[110px] h-1.5 bg-ld-gold rounded-full" />
        <p className="m-0 font-medium text-[17px] text-ld-slate">
          Tap any venue for directions — admission and participation are free.
        </p>
      </div>

      <div className="grid gap-6 items-stretch" style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(min(340px,100%),1fr))' }}>
        <article className="bg-white border-[3px] border-[#6CBE45] rounded-3xl overflow-hidden shadow-[0_14px_34px_rgba(46,79,163,.10)]">
          <div className="bg-[#6CBE45] text-white text-center py-3.5 px-3">
            <div className="font-extrabold text-[clamp(22px,2.6vw,28px)] tracking-wide italic">
              Saturday, August 1<sup>st</sup>
            </div>
          </div>
          <div className="px-5 pt-[18px] pb-[22px] flex flex-col gap-[18px]">
            {saturday.map((venue) => (
              <VenueBlock key={venue.label} venue={venue} />
            ))}
          </div>
        </article>

        <article className="bg-white border-[3px] border-[#56B4E4] rounded-3xl overflow-hidden shadow-[0_14px_34px_rgba(46,79,163,.10)]">
          <div className="bg-[#56B4E4] text-white text-center py-3.5 px-3">
            <div className="font-extrabold text-[clamp(22px,2.6vw,28px)] tracking-wide italic">
              Sunday, August 2<sup>nd</sup>
            </div>
          </div>
          <div className="px-5 pt-[18px] pb-[22px] flex flex-col gap-[18px]">
            {sunday.map((venue) => (
              <VenueBlock key={venue.label} venue={venue} />
            ))}
            <div className="flex flex-col gap-[5px] -mt-2 border-l-[3px] border-[#EEF2FE] pl-3">
              {bands.map((band) => (
                <span key={band} className="font-semibold text-[15px] text-ld-navy">
                  {band}
                </span>
              ))}
              <span className="font-semibold text-sm text-[#9A6A00]">
                Community Impact Award presentation
              </span>
              <span className="flex items-center gap-2 font-extrabold text-[17px] text-ld-navy">
                Sunset Strip
                <span className="bg-ld-gold text-[#7A5200] font-bold text-[11px] tracking-wider uppercase px-2.5 py-0.5 rounded-full">
                  Headliner
                </span>
              </span>
            </div>
            <div className="flex justify-between gap-3 items-baseline mt-1 bg-ld-navy text-white rounded-xl py-2 px-3.5">
              <span className="font-bold text-base">LDCU Fireworks</span>
              <span className="font-extrabold text-sm whitespace-nowrap">10 PM</span>
            </div>
          </div>
        </article>
      </div>

      <p className="text-center font-bold text-[clamp(16px,2vw,20px)] text-[#EF6A5F] mt-[30px] mb-0">
        Food &amp; merchandise vendors · Fun &amp; games for everyone!
      </p>
    </section>
  )
}
