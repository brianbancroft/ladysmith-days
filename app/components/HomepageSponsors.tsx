const sponsors = [
  { bg: 'bg-sponsor-homepage-1', href: 'https://www.ladysmith.ca/', label: 'Town of Ladysmith' },
  { bg: 'bg-sponsor-homepage-2', href: 'https://www.ldcu.ca/Personal/', label: 'Ladysmith & District Credit Union' },
  { bg: 'bg-sponsor-bayview', href: '#sponsors', label: 'Bayview Brewing' },
  { bg: 'bg-sponsor-homepage-5', href: 'https://www.midislandco-op.crs/sites/midisland/', label: 'Mid Island Co-op' },
  { bg: 'bg-sponsor-eagles', href: '#sponsors', label: 'Ladysmith Eagles' },
  { bg: 'bg-sponsor-homepage-3', href: 'https://www.ladysmithcofc.com/portfolio/saltair-marine-services-ltd/', label: 'Saltair Marine Services' },
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
        {sponsors.map(({ bg, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="bg-white border-2 border-[#BFD3F2] rounded-2xl h-24 p-3.5 flex items-center justify-center transition-all hover:border-[#F9A55B] hover:shadow-[0_8px_18px_rgba(46,79,163,.14)]"
          >
            <div className={`h-full w-full bg-contain bg-center bg-no-repeat ${bg}`} />
          </a>
        ))}
      </div>
    </section>
  )
}
