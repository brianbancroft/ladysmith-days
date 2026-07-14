import mapTransferBeach from '~/assets/mapTransferBeach.png'
import mapDowntown from '~/assets/mapDowntownLadysmith.png'

const locations = [
  {
    key: 'transfer-beach',
    title: 'Transfer Beach',
    color: '#EF5562',
    map: mapTransferBeach,
    bgSize: '200%',
    bgPosition: '46% 66%',
    description:
      "Home base for the weekend — the amphitheatre stage and the park greens are side by side. Pancakes, market, games and wrestling Saturday; Kids Fun Zone, Bands on the Beach and fireworks Sunday.",
    href: 'https://maps.app.goo.gl/paWKAUm6MGFgEuLm9',
  },
  {
    key: 'oyster-bay',
    title: 'Oyster Bay Marina',
    color: '#8E5BB5',
    map: mapTransferBeach,
    bgSize: '260%',
    bgPosition: '12% 4%',
    description:
      'Down on the docks. The Bullhead Derby kicks the weekend off Saturday at 7 AM sharp — bring the kids and a bucket.',
    href: 'https://www.google.com/maps/search/?api=1&query=48.996127,-123.814068',
  },
  {
    key: 'downtown',
    title: 'Downtown 1st Ave',
    color: '#158784',
    map: mapDowntown,
    bgSize: '180%',
    bgPosition: '38% 40%',
    description:
      "Sunday's Soap Box Derby and skateboard demo run on 1st Ave between Roberts & Buller. Meet at the corner of 1st & Gatacre.",
    href: 'https://www.google.com/maps/search/?api=1&query=48.993262,-123.817340',
  },
]

function SectionWhereToGo() {
  return (
    <section id="where" className="bg-blue-800 py-14 px-4 mt-10">
      <div className="max-w-[1160px] mx-auto">
        <div className="text-center flex flex-col gap-2.5 items-center mb-8">
          <h2 className="m-0 font-extrabold text-[clamp(28px,4vw,46px)] text-white">
            Where do I go?
          </h2>
          <div className="w-[110px] h-1.5 bg-ld-gold rounded-full" />
          <p className="m-0 font-medium text-[17px] text-blue-200">
            Three spots, all in town. Tap a card to open directions.
          </p>
        </div>
        <div className="grid gap-5 items-stretch" style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(min(260px,100%),1fr))' }}>
          {locations.map((loc) => (
            <article
              key={loc.key}
              className="bg-white rounded-[20px] overflow-hidden flex flex-col shadow-[0_14px_30px_rgba(0,20,80,.3)]"
            >
              <div
                className="h-[130px] bg-cover"
                style={{
                  backgroundImage: `url(${loc.map})`,
                  backgroundSize: loc.bgSize,
                  backgroundPosition: loc.bgPosition,
                  borderBottom: `4px solid ${loc.color}`,
                }}
              />
              <div className="p-[18px] flex flex-col gap-2 flex-1">
                <h3 className="m-0 font-extrabold text-xl" style={{ color: loc.color }}>
                  {loc.title}
                </h3>
                <p className="m-0 text-[14.5px] font-medium text-[#4A5A9C] leading-relaxed flex-1">
                  {loc.description}
                </p>
                <a
                  href={loc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-center font-bold text-sm py-2.5 px-3 rounded-xl transition-colors"
                  style={{ background: loc.color }}
                >
                  Open in Google Maps ↗
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SectionWhereToGo
