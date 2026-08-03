import { Link } from '@remix-run/react'

const cards = [
  {
    title: 'Volunteer for 2027',
    titleColor: '#4E9B32',
    accent: '#86D169',
    body: 'The festival is 100% volunteer-run. A few hours over the weekend goes a long way.',
    to: '/volunteer',
    cta: 'Sign up →',
  },
  {
    title: 'Sponsor 2027',
    titleColor: '#9A6A00',
    accent: '#FFD23F',
    body: 'Cash or in-kind, every level helps keep the weekend free for families.',
    to: '/sponsor',
    cta: 'Talk to us →',
  },
  {
    title: 'Follow along',
    titleColor: '#D93D4B',
    accent: '#EF5562',
    body: "Photos from this year and next year's schedule land on Facebook first.",
    to: 'https://www.facebook.com/LadysmithDays',
    cta: 'Facebook ↗',
    external: true,
  },
]

function SectionPostNextYear() {
  return (
    <section id="next-year" className="bg-[#1E40AF] pt-14 px-4 pb-[62px] mt-12">
      <div className="max-w-[1160px] mx-auto">
        <div className="text-center flex flex-col gap-2.5 items-center mb-9">
          <span className="font-bold text-[clamp(13px,1.6vw,16px)] tracking-[5px] uppercase text-ld-gold">
            August long weekend, 2027
          </span>
          <div className="flex items-center justify-center gap-[clamp(10px,1.8vw,20px)] flex-wrap leading-[.72]">
            <span className="font-extrabold text-[clamp(96px,20vw,240px)] text-ld-gold tracking-[-.04em] leading-[.72] [text-shadow:0_6px_0_rgba(0,20,80,.35)]">
              60
            </span>
            <span className="flex flex-col items-start text-left leading-[1.05]">
              <span className="font-extrabold text-[clamp(26px,4.4vw,54px)] text-ld-gold">years of</span>
              <span className="font-extrabold text-[clamp(26px,4.4vw,54px)] text-white">Ladysmith Days</span>
            </span>
          </div>
          <h2 className="m-0 font-bold text-[clamp(20px,2.6vw,30px)] text-white text-pretty">
            Next year is the 60th anniversary — and we're going to make a weekend of it
          </h2>
          <div className="w-[110px] h-1.5 bg-ld-gold rounded-full mt-1" />
          <p className="m-0 font-medium text-[17px] text-blue-200 max-w-xl text-pretty">
            Planning starts long before the weekend does. If you want in — as a volunteer or a sponsor — now
            is a good time to tell us.
          </p>
        </div>
        <div className="grid gap-[18px]" style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(min(260px,100%),1fr))' }}>
          {cards.map(({ title, titleColor, accent, body, to, cta, external }) => (
            <article
              key={title}
              className="bg-white rounded-2xl p-[22px] flex flex-col gap-2.5 shadow-[0_14px_30px_rgba(0,20,80,.3)]"
              style={{ borderTop: `8px solid ${accent}` }}
            >
              <h3 className="m-0 font-extrabold text-xl" style={{ color: titleColor }}>
                {title}
              </h3>
              <p className="m-0 text-[0.95rem] font-medium text-[#4A5A9C] leading-relaxed flex-1">{body}</p>
              {external ? (
                <a
                  href={to}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="self-start bg-[#1E40AF] text-white font-bold text-[0.95rem] px-[22px] py-2.5 rounded-full transition-colors hover:bg-blue-700 hover:text-ld-gold"
                >
                  {cta}
                </a>
              ) : (
                <Link
                  to={to}
                  className="self-start bg-[#1E40AF] text-white font-bold text-[0.95rem] px-[22px] py-2.5 rounded-full transition-colors hover:bg-blue-700 hover:text-ld-gold"
                >
                  {cta}
                </Link>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SectionPostNextYear
