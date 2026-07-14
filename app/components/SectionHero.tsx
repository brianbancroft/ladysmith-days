import { useEffect, useState } from 'react'
import { Link } from '@remix-run/react'
import logo from '~/assets/ladysmith-days-logo.png'

const petals: { top: string; side: 'left' | 'right'; offset: string; size: number; color: string; rotate: string; duration: string; delay: string }[] = [
  { top: '6%', side: 'left', offset: '4%', size: 26, color: '#6CBE45', rotate: '-35deg', duration: '7s', delay: '0s' },
  { top: '18%', side: 'left', offset: '9%', size: 22, color: '#FFD23F', rotate: '18deg', duration: '9s', delay: '1s' },
  { top: '40%', side: 'left', offset: '2%', size: 20, color: '#EF5562', rotate: '60deg', duration: '8s', delay: '2s' },
  { top: '62%', side: 'left', offset: '7%', size: 24, color: '#8E5BB5', rotate: '-15deg', duration: '10s', delay: '.5s' },
  { top: '8%', side: 'right', offset: '5%', size: 26, color: '#8E5BB5', rotate: '30deg', duration: '8s', delay: '.8s' },
  { top: '26%', side: 'right', offset: '10%', size: 22, color: '#56B4E4', rotate: '-50deg', duration: '7.5s', delay: '1.6s' },
  { top: '52%', side: 'right', offset: '3%', size: 24, color: '#FFD23F', rotate: '12deg', duration: '9.5s', delay: '2.4s' },
  { top: '74%', side: 'right', offset: '9%', size: 20, color: '#6CBE45', rotate: '-28deg', duration: '8.5s', delay: '1.2s' },
]

function useCountdown(target: string) {
  const [state, setState] = useState<{ d: string; h: string; m: string; s: string; over: boolean }>({
    d: '–',
    h: '–',
    m: '–',
    s: '–',
    over: false,
  })

  useEffect(() => {
    const end = new Date(target).getTime()

    function tick() {
      const dist = end - Date.now()
      if (dist <= 0) {
        setState((prev) => ({ ...prev, over: true }))
        return
      }
      const d = Math.floor(dist / 86400000)
      const h = Math.floor((dist % 86400000) / 3600000)
      const m = Math.floor((dist % 3600000) / 60000)
      const s = Math.floor((dist % 60000) / 1000)
      setState({ d: String(d), h: String(h), m: String(m), s: String(s), over: false })
    }

    tick()
    const timer = setInterval(tick, 1000)
    return () => clearInterval(timer)
  }, [target])

  return state
}

function SectionHero() {
  const { d, h, m, s, over } = useCountdown('August 1, 2026 07:00:00')

  return (
    <header
      id="top"
      className="relative overflow-hidden text-center px-5 pt-14 pb-[72px]"
      style={{
        background:
          'repeating-conic-gradient(from 0deg at 50% 34%, rgba(255,255,255,.09) 0deg 5deg, rgba(255,255,255,0) 5deg 11deg), linear-gradient(180deg,#F9A55B 0%,#F28C62 60%,#EF7B67 100%)',
      }}
    >
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        {petals.map((petal, i) => (
          <div
            key={i}
            style={{
              ['--r' as string]: petal.rotate,
              position: 'absolute',
              top: petal.top,
              [petal.side]: petal.offset,
              width: petal.size,
              height: petal.size * 2.7,
              borderRadius: '50%',
              background: petal.color,
              animation: `petalFloat ${petal.duration} ease-in-out infinite ${petal.delay}`,
            }}
          />
        ))}
      </div>

      <div className="relative z-[2] flex flex-col items-center gap-[18px] max-w-[760px] mx-auto">
        <div className="text-white font-bold text-[clamp(18px,2.4vw,24px)] tracking-[6px]">
          — 2026 —
        </div>
        <img
          src={logo}
          alt="Ladysmith Days logo"
          className="w-[clamp(200px,32vw,320px)] h-auto drop-shadow-[0_10px_24px_rgba(120,40,0,.28)]"
        />
        <h1 className="m-0 text-white font-extrabold text-[clamp(34px,5.6vw,64px)] leading-[1.02] tracking-wide [text-shadow:0_3px_0_rgba(190,70,40,.3)]">
          Celebrate Summer!
        </h1>
        <p className="m-0 text-[#FFF3D6] font-semibold text-[clamp(17px,2.2vw,23px)]">
          A fun &amp; free weekend · <strong className="text-white">August 1–2</strong> long weekend
        </p>

        {over ? (
          <div className="text-white font-bold text-[clamp(20px,3vw,28px)] tracking-[4px] [text-shadow:0_0_6px_#fff,0_0_24px_#1976d2]">
            Ladysmith Days is here!
          </div>
        ) : (
          <div className="rounded-2xl px-[26px] py-4 shadow-[0_12px_30px_rgba(90,40,10,.25)] bg-[#1E40AF]">
            <div className="grid grid-cols-4 gap-3.5 text-white text-center uppercase" style={{ gridTemplateColumns: 'repeat(4,minmax(52px,1fr))' }}>
              {[
                { value: d, label: 'days' },
                { value: h, label: 'hours' },
                { value: m, label: 'minutes' },
                { value: s, label: 'seconds' },
              ].map(({ value, label }) => (
                <div key={label} className="flex flex-col">
                  <span className="font-extrabold text-[clamp(22px,3vw,32px)] leading-[1.25]">{value}</span>
                  <span className="text-[11px] font-semibold tracking-wider">{label}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="flex gap-3.5 flex-wrap justify-center mt-1.5">
          <Link
            to="/#schedule"
            className="bg-white text-[#EF6A5F] font-extrabold text-lg px-[30px] py-[13px] rounded-full shadow-[0_8px_20px_rgba(120,40,0,.25)] transition-all hover:-translate-y-0.5 hover:text-ld-red hover:shadow-[0_12px_26px_rgba(120,40,0,.32)]"
          >
            See the schedule
          </Link>
          <Link
            to="/#where"
            className="border-[3px] border-white text-white font-bold text-lg px-[26px] py-2.5 rounded-full transition-colors hover:bg-white/15"
          >
            Where do I go?
          </Link>
        </div>
      </div>

      <Link
        to="/#summary"
        aria-label="Scroll down"
        className="absolute left-1/2 bottom-3.5 -translate-x-1/2 text-white text-2xl z-[2]"
        style={{ animation: 'bob 1.8s ease-in-out infinite' }}
      >
        ▾
      </Link>
    </header>
  )
}

export default SectionHero
