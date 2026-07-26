import { useEffect } from 'react'
import { type ActionFunctionArgs, redirect } from '@remix-run/node'
import { Form, type MetaFunction, useLocation, useSearchParams } from '@remix-run/react'
import { toast } from 'react-toastify'
import posthog from 'posthog-js'
import { sendEmail } from '~/server/sendEmail.server'

const cityOfLadysmith = '/sponsors-2026/city-of-ladysmith.png'
const eagles = '/sponsors-2026/eagles.png'
const greatCanadianDollarStore = '/sponsors-2026/great-canadian-dollar-store.png'
const kinsmen = '/sponsors-2026/kinsmen-club-of-ladysmith.png'
const ldcu = '/sponsors-2026/ldcu.png'
const pacificIndustrialMarine = '/sponsors-2026/pacific-industrial-marine.png'
const saltairMarine = '/sponsors-2026/saltair-marine.png'

export const meta: MetaFunction = () => {
  return [
    { title: 'Sponsor Ladysmith Days' },
    {
      name: 'description',
      content:
        'Ladysmith Days is free for every family who shows up - because local businesses and service clubs pay for it. Join them for 2026.',
    },
  ]
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = new URLSearchParams(await request.text())
  const name = String(formData.get('name'))
  const email = String(formData.get('email'))
  const org = String(formData.get('org') ?? '')
  const phone = String(formData.get('phone') ?? '')
  const level = String(formData.get('level') ?? '')
  const notes = String(formData.get('message') ?? '')

  const message = [
    org && `Business/organization: ${org}`,
    phone && `Phone: ${phone}`,
    level && `Level of interest: ${level}`,
    notes && `Notes: ${notes}`,
  ]
    .filter(Boolean)
    .join('\n')

  await sendEmail({ name, email, message, page: 'Sponsor' })

  return redirect('/sponsor?sent=true')
}

const mainSponsors = [
  { name: 'Ladysmith & District Credit Union', href: 'https://www.ldcu.ca/Personal/', img: ldcu },
  { name: 'Town of Ladysmith', href: 'https://www.ladysmith.ca/', img: cityOfLadysmith },
  {
    name: 'Saltair Marine Services Ltd.',
    href: 'https://www.ladysmithcofc.com/portfolio/saltair-marine-services-ltd/',
    img: saltairMarine,
  },
  { name: 'Ladysmith Eagles', img: eagles },
  { name: 'Great Canadian Dollar Store', img: greatCanadianDollarStore },
  { name: 'Kinsmen Club of Ladysmith', img: kinsmen },
  { name: 'Pacific Industrial & Marine Inc.', img: pacificIndustrialMarine },
]

const goldSponsors = [
  'FMI',
  "A&W",
  'Bethel Church',
  "McDonald's Ladysmith",
  'Bayview Brewing',
  "Stz'uminus First Nation",
]

const silverSponsors = [
  'Spyder Graphix',
  'CUPE 606',
  'Anne-Lynn Design',
  'Fishing for Fun',
  'Save on Foods',
  'Country Grocer',
]

const bronzeSponsors = ['Robert St. Pizza', 'Ladysmith Pharmasave']

const tiers = [
  {
    name: 'Main',
    color: '#2E4FA3',
    copy: 'Our largest partners, for businesses and clubs that want to carry the weekend.',
  },
  {
    name: 'Gold',
    color: '#FFD23F',
    textColor: '#9A6A00',
    copy: 'A major contribution, often tied to a specific event or day of the weekend.',
  },
  {
    name: 'Silver',
    color: '#B9C4D6',
    textColor: '#5A6DB0',
    copy: 'A solid contribution from a local business or organization.',
  },
  {
    name: 'Bronze',
    color: '#C2814A',
    textColor: '#8A5A2B',
    copy: 'A great starting point for a small shop or a first-time sponsor.',
  },
]

function SponsorPage() {
  const location = useLocation()
  const [searchParams] = useSearchParams()
  const sent = searchParams.get('sent') === 'true'

  useEffect(() => {
    if (sent) {
      toast('Thanks - we got your message! Someone from the Celebration Society will be in touch.')
    }
  }, [sent, location.search])

  return (
    <main className="w-full bg-[#FFF6EC] text-ld-navy">
      {/* Hero */}
      <header
        className="relative overflow-hidden text-center px-5 pt-14 pb-16"
        style={{
          background:
            'repeating-conic-gradient(from 0deg at 50% 30%, rgba(255,255,255,.09) 0deg 5deg, rgba(255,255,255,0) 5deg 11deg), linear-gradient(180deg,#F9A55B 0%,#F28C62 60%,#EF7B67 100%)',
        }}
      >
        <div className="relative z-[2] flex flex-col items-center gap-4 max-w-[740px] mx-auto">
          <div className="text-white font-bold text-[clamp(14px,1.8vw,17px)] tracking-[5px] uppercase">
            Sponsorship
          </div>
          <h1 className="m-0 text-white font-extrabold text-[clamp(34px,5.4vw,60px)] leading-[1.03] [text-shadow:0_3px_0_rgba(190,70,40,.3)]">
            Put your name on the best weekend of the year
          </h1>
          <p className="m-0 text-[#FFF3D6] font-semibold text-[clamp(17px,2.1vw,22px)] leading-relaxed">
            Ladysmith Days is free for every family who shows up — because local
            businesses and service clubs pay for it. Join them for 2026.
          </p>
          <div className="flex gap-3.5 flex-wrap justify-center mt-1.5">
            <a
              href="#become"
              onClick={() => posthog.capture('sponsor_cta_clicked', { cta: 'become_a_sponsor_hero' })}
              className="bg-white text-[#EF6A5F] font-extrabold text-lg px-[30px] py-3 rounded-full shadow-[0_8px_20px_rgba(120,40,0,.25)] transition-all hover:-translate-y-0.5 hover:text-[#EF5562] hover:shadow-[0_12px_26px_rgba(120,40,0,.32)]"
            >
              Become a sponsor
            </a>
            <a
              href="#wall"
              className="border-[3px] border-white text-white font-bold text-lg px-[26px] py-2.5 rounded-full transition-colors hover:bg-white/15"
            >
              See our 2026 sponsors
            </a>
          </div>
        </div>
      </header>

      {/* Why sponsor stats */}
      <section className="bg-gradient-to-r from-sky-400 via-sky-500 to-sky-600 py-10 px-5 text-white">
        <div className="max-w-[1000px] mx-auto grid gap-6 text-center" style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(min(240px,100%),1fr))' }}>
          <div className="flex flex-col gap-1">
            <span className="font-extrabold text-[clamp(30px,4vw,42px)] leading-tight">2 days</span>
            <span className="font-semibold text-base text-white/90 leading-snug">
              of free events across three venues, start to finish
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-extrabold text-[clamp(30px,4vw,42px)] leading-tight">20+</span>
            <span className="font-semibold text-base text-white/90 leading-snug">
              events — derbies, live bands, wrestling, games and more
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-extrabold text-[clamp(30px,4vw,42px)] leading-tight">100%</span>
            <span className="font-semibold text-base text-white/90 leading-snug">
              volunteer-run, so sponsorship goes straight to the events
            </span>
          </div>
        </div>
      </section>

      {/* Sponsor wall */}
      <section id="wall" className="max-w-[1160px] mx-auto pt-14 px-4 pb-5">
        <div className="text-center flex flex-col gap-2.5 items-center mb-8">
          <h2 className="m-0 font-extrabold text-[clamp(30px,4.4vw,50px)] text-ld-navy">
            Thank you, 2026 sponsors
          </h2>
          <div className="w-[110px] h-1.5 bg-ld-gold rounded-full" />
          <p className="m-0 font-medium text-[17px] text-ld-slate max-w-xl">
            Every name below helped keep Ladysmith Days free. Please support the people
            who support your town.
          </p>
        </div>

        <div className="flex items-center gap-3.5 mb-4">
          <span className="font-extrabold text-[clamp(19px,2.4vw,24px)] text-ld-navy whitespace-nowrap">
            Main Sponsors
          </span>
          <span className="flex-1 h-1 bg-ld-navy/25 rounded-full" />
        </div>
        <div className="grid gap-4 mb-12" style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(min(210px,100%),1fr))' }}>
          {mainSponsors.map(({ name, href, img }) =>
            href ? (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className="bg-white border-[3px] border-ld-navy rounded-2xl h-[132px] p-4 flex items-center justify-center shadow-[0_10px_24px_rgba(46,79,163,.12)] transition-all hover:-translate-y-1 hover:shadow-[0_16px_30px_rgba(46,79,163,.2)]"
              >
                <img src={img} alt={name} className="max-w-full max-h-full object-contain" />
              </a>
            ) : (
              <div
                key={name}
                className="bg-white border-[3px] border-ld-navy rounded-2xl h-[132px] p-4 flex items-center justify-center shadow-[0_10px_24px_rgba(46,79,163,.12)]"
              >
                <img src={img} alt={name} className="max-w-full max-h-full object-contain" />
              </div>
            ),
          )}
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
              className="bg-amber-50 border-2 border-ld-gold rounded-2xl px-4 py-5 text-center font-bold text-lg text-[#7A5200] leading-tight"
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

      {/* Become a sponsor */}
      <section id="become" className="bg-[#1E40AF] pt-14 pb-[62px] px-4 mt-12">
        <div className="max-w-[1160px] mx-auto">
          <div className="text-center flex flex-col gap-2.5 items-center mb-8">
            <h2 className="m-0 font-extrabold text-[clamp(28px,4vw,46px)] text-white">
              Become a sponsor
            </h2>
            <div className="w-[110px] h-1.5 bg-ld-gold rounded-full" />
            <p className="m-0 font-medium text-[17px] text-blue-200 max-w-xl">
              We work with whatever you can give. Get in touch and we&apos;ll talk
              through the levels and what recognition looks like this year.
            </p>
          </div>

          <div className="grid gap-[18px] items-stretch" style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(min(240px,100%),1fr))' }}>
            {tiers.map(({ name, color, textColor, copy }) => (
              <article
                key={name}
                className="bg-white rounded-2xl p-5 flex flex-col gap-2.5 shadow-[0_14px_30px_rgba(0,20,80,.3)]"
                style={{ borderTop: `8px solid ${color}` }}
              >
                <h3 className="m-0 font-extrabold text-xl" style={{ color: textColor ?? color }}>
                  {name}
                </h3>
                <p className="m-0 text-sm font-medium text-[#4A5A9C] leading-relaxed flex-1">{copy}</p>
              </article>
            ))}
          </div>

          <p className="mt-[22px] mb-0 text-center text-sm font-medium text-blue-200 max-w-xl mx-auto">
            Not cash? In-kind help counts too — prizes, equipment, printing, food for
            volunteers.
          </p>
          <div className="flex justify-center mt-[30px]">
            <a
              href="#contact"
              onClick={() => posthog.capture('sponsor_cta_clicked', { cta: 'get_in_touch' })}
              className="bg-ld-gold text-[#7A5200] font-extrabold text-[19px] px-[34px] py-[15px] rounded-full shadow-[0_10px_24px_rgba(0,20,80,.35)] transition-all hover:-translate-y-0.5 hover:bg-white hover:text-[#EF5562]"
            >
              Get in touch
            </a>
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section id="contact" className="max-w-[800px] mx-auto pt-14 px-4 pb-[70px]">
        <div className="text-center flex flex-col gap-2.5 items-center mb-7">
          <h2 className="m-0 font-extrabold text-[clamp(26px,3.6vw,40px)] text-ld-navy">
            Talk to us about sponsoring
          </h2>
          <div className="w-[110px] h-1.5 bg-ld-gold rounded-full" />
          <p className="m-0 font-medium text-[17px] text-ld-slate max-w-lg">
            Tell us a little about your business and we&apos;ll get back to you with
            the details.
          </p>
        </div>

        {sent ? (
          <div className="bg-white border-[3px] border-[#6CBE45] rounded-[22px] p-9 text-center flex flex-col gap-2.5 items-center shadow-[0_14px_30px_rgba(46,79,163,.12)]">
            <span className="font-extrabold text-2xl text-[#4E9B32]">
              Thanks — we&apos;ve got it!
            </span>
            <span className="font-medium text-base text-[#4A5A9C] max-w-[430px] leading-relaxed">
              Someone from the Celebration Society will be in touch. For a faster
              reply, message us on Facebook.
            </span>
            <a
              href="https://www.facebook.com/LadysmithDays"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1.5 bg-[#1E40AF] text-white font-bold text-[15px] px-6 py-[11px] rounded-full transition-colors hover:bg-blue-700 hover:text-ld-gold"
            >
              Message us on Facebook ↗
            </a>
          </div>
        ) : (
          <Form
            method="post"
            className="bg-white border-[3px] border-[#BFD3F2] rounded-[22px] px-6 pt-[26px] pb-7 flex flex-col gap-[18px] shadow-[0_14px_30px_rgba(46,79,163,.12)]"
          >
            <div className="grid gap-[18px]" style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(min(220px,100%),1fr))' }}>
              <label className="flex flex-col gap-1.5">
                <span className="font-bold text-sm text-ld-navy">Your name</span>
                <input
                  required
                  type="text"
                  name="name"
                  placeholder="Jane Smith"
                  className="font-medium text-base text-ld-navy bg-[#FFF9F1] border-2 border-[#DCE6F8] rounded-xl px-3.5 py-[11px] outline-none transition-colors focus:border-[#F9A55B] focus:bg-white"
                />
              </label>
              <label className="flex flex-col gap-1.5">
                <span className="font-bold text-sm text-ld-navy">Business or organization</span>
                <input
                  type="text"
                  name="org"
                  placeholder="Ladysmith Hardware"
                  className="font-medium text-base text-ld-navy bg-[#FFF9F1] border-2 border-[#DCE6F8] rounded-xl px-3.5 py-[11px] outline-none transition-colors focus:border-[#F9A55B] focus:bg-white"
                />
              </label>
              <label className="flex flex-col gap-1.5">
                <span className="font-bold text-sm text-ld-navy">Email</span>
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="you@business.ca"
                  className="font-medium text-base text-ld-navy bg-[#FFF9F1] border-2 border-[#DCE6F8] rounded-xl px-3.5 py-[11px] outline-none transition-colors focus:border-[#F9A55B] focus:bg-white"
                />
              </label>
              <label className="flex flex-col gap-1.5">
                <span className="font-bold text-sm text-ld-navy">
                  Phone <span className="font-medium text-[#8A97C4]">(optional)</span>
                </span>
                <input
                  type="tel"
                  name="phone"
                  placeholder="250-555-0134"
                  className="font-medium text-base text-ld-navy bg-[#FFF9F1] border-2 border-[#DCE6F8] rounded-xl px-3.5 py-[11px] outline-none transition-colors focus:border-[#F9A55B] focus:bg-white"
                />
              </label>
            </div>
            <label className="flex flex-col gap-1.5">
              <span className="font-bold text-sm text-ld-navy">Level you&apos;re interested in</span>
              <select
                name="level"
                defaultValue="Not sure yet — tell me more"
                className="font-medium text-base text-ld-navy bg-[#FFF9F1] border-2 border-[#DCE6F8] rounded-xl px-3.5 py-[11px] outline-none transition-colors focus:border-[#F9A55B] focus:bg-white"
              >
                <option>Not sure yet — tell me more</option>
                <option>Main</option>
                <option>Gold</option>
                <option>Silver</option>
                <option>Bronze</option>
                <option>In-kind (goods or services)</option>
              </select>
            </label>
            <label className="flex flex-col gap-1.5">
              <span className="font-bold text-sm text-ld-navy">Anything else we should know?</span>
              <textarea
                name="message"
                rows={4}
                placeholder="What you'd like to support, questions, timing…"
                className="font-medium text-base text-ld-navy bg-[#FFF9F1] border-2 border-[#DCE6F8] rounded-xl px-3.5 py-[11px] outline-none transition-colors resize-y focus:border-[#F9A55B] focus:bg-white"
              />
            </label>
            <button
              type="submit"
              className="bg-[#EF5562] text-white font-extrabold text-lg px-5 py-3.5 rounded-full shadow-[0_10px_22px_rgba(239,85,98,.32)] transition-all hover:-translate-y-0.5 hover:bg-[#D93D4B]"
            >
              Send it over
            </button>
            <div className="flex items-center gap-3">
              <span className="flex-1 h-0.5 bg-[#EEF2FE]" />
              <span className="font-semibold text-xs text-[#8A97C4] uppercase tracking-widest">or</span>
              <span className="flex-1 h-0.5 bg-[#EEF2FE]" />
            </div>
            <a
              href="https://www.facebook.com/LadysmithDays"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center border-2 border-[#1E40AF] text-[#1E40AF] font-bold text-base px-5 py-[11px] rounded-full transition-colors hover:bg-[#1E40AF] hover:text-white"
            >
              Message us on Facebook ↗
            </a>
          </Form>
        )}
      </section>

      {/* Sponsor shortcut */}
      <a
        href="#become"
        className="fixed bottom-[18px] right-[18px] z-[60] flex items-center gap-2 bg-[#EF5562] text-white font-extrabold text-[15px] px-5 py-3 rounded-full shadow-[0_10px_24px_rgba(160,20,40,.4)] transition-all hover:-translate-y-0.5 hover:bg-[#D93D4B]"
      >
        Become a sponsor
      </a>
    </main>
  )
}

export default SponsorPage
