const sponsors = [
  {
    img: '/sponsors-2026/ldcu.png',
    href: 'https://www.ldcu.ca/Personal/',
    label: 'Ladysmith & District Credit Union',
  },
  { img: '/sponsors-2026/city-of-ladysmith.png', href: 'https://www.ladysmith.ca/', label: 'Town of Ladysmith' },
  {
    img: '/sponsors-2026/saltair-marine.png',
    href: 'https://www.ladysmithcofc.com/portfolio/saltair-marine-services-ltd/',
    label: 'Saltair Marine Services Ltd.',
  },
  { img: '/sponsors-2026/eagles.png', href: '/sponsor#wall', label: 'Ladysmith Eagles' },
  {
    img: '/sponsors-2026/great-canadian-dollar-store.png',
    href: '/sponsor#wall',
    label: 'Great Canadian Dollar Store',
  },
  { img: '/sponsors-2026/kinsmen-club-of-ladysmith.png', href: '/sponsor#wall', label: 'Kinsmen Club of Ladysmith' },
  {
    img: '/sponsors-2026/pacific-industrial-marine.png',
    href: '/sponsor#wall',
    label: 'Pacific Industrial & Marine Inc.',
  },
]

export function HomepageSponsors() {
  return (
    <section id="sponsors" className="max-w-[1160px] mx-auto pt-[46px] px-4 pb-[26px]">
      <div className="text-center mb-[22px]">
        <h2 className="m-0 font-extrabold text-[clamp(22px,3vw,30px)] text-ld-navy italic">
          Thanks to our sponsors!
        </h2>
      </div>
      <div className="grid gap-3.5" style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(min(160px,100%),1fr))' }}>
        {sponsors.map(({ img, href, label }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
            aria-label={label}
            className="bg-white border-2 border-[#BFD3F2] rounded-2xl h-24 p-3.5 flex items-center justify-center transition-all hover:border-[#F9A55B] hover:shadow-[0_8px_18px_rgba(46,79,163,.14)]"
          >
            <img src={img} alt={label} className="h-full w-full object-contain" />
          </a>
        ))}
      </div>
    </section>
  )
}
