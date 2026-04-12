const sponsors = [
  { bg: 'bg-sponsor-homepage-1', href: 'https://www.ladysmith.ca/', label: 'City of Ladysmith' },
  { bg: 'bg-sponsor-homepage-2', href: 'https://www.ldcu.ca/Personal/', label: 'Ladysmith Credit Union' },
  { bg: 'bg-sponsor-bayview', href: '#', label: 'Bayview Brewing' },
  { bg: 'bg-sponsor-homepage-5', href: 'https://www.midislandco-op.crs/sites/midisland/', label: 'Mid Island Co-op' },
  { bg: 'bg-sponsor-eagles', href: '#', label: 'Ladysmith Eagles' },
  { bg: 'bg-sponsor-homepage-3', href: 'https://www.ladysmithcofc.com/portfolio/saltair-marine-services-ltd/', label: 'Saltair Marine Services' },
]

export function HomepageSponsors() {
  return (
    <div id="sponsors" className="mx-auto my-3 w-full px-4 md:w-5/6">
      <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
        {sponsors.map(({ bg, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="sponsor-element sponsor-link block h-28 w-full rounded-lg bg-gray-200 p-4 transition-all duration-300 hover:bg-gray-100 hover:shadow-md"
          >
            <div
              className={`h-full w-full bg-contain bg-center bg-no-repeat ${bg}`}
              aria-label={label}
            />
          </a>
        ))}
      </div>
    </div>
  )
}
