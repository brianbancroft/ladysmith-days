import { Link } from '@remix-run/react'

const cards = [
  { to: '/volunteer', label: 'Volunteer with us →', bg: 'bg-call-homepage-volunteer', position: 'bg-center' },
  { to: '/sponsor', label: 'Sponsor our events →', bg: 'bg-call-homepage-sponsor', position: 'bg-top' },
  { to: '/vendor', label: 'Sell merch →', bg: 'bg-call-homepage-vendor', position: 'bg-center' },
]

function SectionGetInvolved() {
  return (
    <section id="get-involved" className="max-w-[1160px] mx-auto pt-14 px-4 pb-2.5">
      <div className="text-center flex flex-col gap-2.5 items-center mb-[30px]">
        <h2 className="m-0 font-extrabold text-[clamp(28px,4vw,44px)] text-ld-navy">
          Make it happen with us
        </h2>
        <div className="w-[110px] h-1.5 bg-ld-gold rounded-full" />
        <p className="m-0 font-medium text-[17px] text-ld-slate max-w-xl">
          The Ladysmith Celebration Society runs the whole weekend on volunteers and
          sponsors — and there&apos;s still room for you.
        </p>
      </div>
      <div className="grid gap-[18px]" style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(min(240px,100%),1fr))' }}>
        {cards.map(({ to, label, bg, position }) => (
          <Link
            key={to}
            to={to}
            className={`relative flex items-end h-[170px] rounded-2xl overflow-hidden bg-cover ${bg} ${position} shadow-[0_10px_26px_rgba(46,79,163,.18)] transition-all hover:-translate-y-1 hover:shadow-[0_16px_32px_rgba(46,79,163,.28)]`}
          >
            <span className="w-full bg-gradient-to-t from-blue-800/95 to-blue-800/0 text-ld-gold font-extrabold text-xl pt-[26px] pb-3 px-4">
              {label}
            </span>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default SectionGetInvolved
