const mainSponsors = [
  { img: '/sponsors-2026/ldcu.png', href: 'https://www.ldcu.ca/Personal/', label: 'Ladysmith & District Credit Union' },
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
  { img: '/sponsors-2026/pacific-industrial-marine.png', href: '/sponsor#wall', label: 'Pacific Industrial & Marine Inc.' },
]

const goldSponsors = ['FMI', 'A&W', 'Bethel Church', "McDonald's Ladysmith", 'Bayview Brewing', "Stz'uminus First Nation"]

const silverSponsors = ['Spyder Graphix', 'CUPE 606', 'Anne-Lynn Design', 'Fishing for Fun', 'Save on Foods', 'Country Grocer']

const bronzeSponsors = ['Robert St. Pizza', 'Ladysmith Pharmasave']

function SectionPostSponsors() {
  return (
    <section id="sponsors" className="max-w-[1160px] mx-auto pt-14 px-4 pb-5">
      <div className="text-center flex flex-col gap-2.5 items-center mb-8">
        <h2 className="m-0 font-extrabold text-[clamp(30px,4.4vw,50px)] text-ld-navy">
          Thank you, 2026 sponsors
        </h2>
        <div className="w-[110px] h-1.5 bg-ld-gold rounded-full" />
        <p className="m-0 font-medium text-[17px] text-ld-slate max-w-xl text-pretty">
          This weekend does not happen without them. Every name below helped keep Ladysmith Days free.
          Please support the people who support your town.
        </p>
      </div>

      <div className="flex items-center gap-3.5 mb-4">
        <span className="font-extrabold text-[clamp(19px,2.4vw,24px)] text-ld-navy whitespace-nowrap">
          Main Sponsors
        </span>
        <span className="flex-1 h-1 bg-ld-navy/25 rounded-full" />
      </div>
      <div className="grid gap-4 mb-12" style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(min(210px,100%),1fr))' }}>
        {mainSponsors.map(({ img, href, label }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
            aria-label={label}
            className="bg-white border-[3px] border-ld-navy rounded-2xl h-[132px] p-4 flex items-center justify-center overflow-hidden shadow-[0_10px_24px_rgba(46,79,163,.12)] transition-all hover:-translate-y-1 hover:shadow-[0_16px_30px_rgba(46,79,163,.2)]"
          >
            <img src={img} alt={label} className="max-w-full max-h-full object-contain" />
          </a>
        ))}
      </div>

      <div className="flex items-center gap-3.5 mb-4">
        <span className="font-extrabold text-[clamp(18px,2.2vw,22px)] text-[#9A6A00] whitespace-nowrap">
          Gold Sponsors
        </span>
        <span className="flex-1 h-1 bg-ld-gold rounded-full" />
      </div>
      <div className="grid gap-3.5 mb-10" style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(min(200px,100%),1fr))' }}>
        {goldSponsors.map((name) => (
          <div
            key={name}
            className="bg-[#FFFBEB] border-2 border-ld-gold rounded-2xl px-4 py-5 text-center font-bold text-lg text-[#7A5200] leading-tight"
          >
            {name}
          </div>
        ))}
      </div>

      <div className="flex items-center gap-3.5 mb-4">
        <span className="font-extrabold text-[clamp(17px,2vw,20px)] text-ld-slate whitespace-nowrap">
          Silver Sponsors
        </span>
        <span className="flex-1 h-[3px] bg-[#B9C4D6] rounded-full" />
      </div>
      <div className="flex flex-wrap gap-3 mb-9">
        {silverSponsors.map((name) => (
          <span
            key={name}
            className="bg-white border-2 border-[#C9D3E3] rounded-full px-5 py-2.5 font-semibold text-base text-[#4A5A9C]"
          >
            {name}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-3.5 mb-4">
        <span className="font-extrabold text-[clamp(17px,2vw,20px)] text-[#8A5A2B] whitespace-nowrap">
          Bronze Sponsors
        </span>
        <span className="flex-1 h-[3px] bg-[#E0C6A8] rounded-full" />
      </div>
      <div className="flex flex-wrap gap-3">
        {bronzeSponsors.map((name) => (
          <span
            key={name}
            className="bg-white border-2 border-[#E0C6A8] rounded-full px-5 py-2.5 font-semibold text-base text-[#8A5A2B]"
          >
            {name}
          </span>
        ))}
      </div>
    </section>
  )
}

export default SectionPostSponsors
