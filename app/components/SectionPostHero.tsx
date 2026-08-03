import { Link } from '@remix-run/react'

function SectionPostHero() {
  return (
    <header
      id="top"
      className="relative overflow-hidden text-center px-5 pt-14 pb-16"
      style={{
        background:
          'repeating-conic-gradient(from 0deg at 50% 30%, rgba(255,255,255,.09) 0deg 5deg, rgba(255,255,255,0) 5deg 11deg), linear-gradient(180deg,#F9A55B 0%,#F28C62 60%,#EF7B67 100%)',
      }}
    >
      <div className="relative z-[2] flex flex-col items-center gap-4 max-w-[820px] mx-auto">
        <div className="text-white font-bold text-[clamp(14px,1.8vw,17px)] tracking-[5px] uppercase">
          August 1 &amp; 2, 2026 — that's a wrap
        </div>
        <h1 className="m-0 text-white font-extrabold text-[clamp(36px,5.6vw,64px)] leading-[1.03] [text-shadow:0_3px_0_rgba(190,70,40,.3)] text-pretty">
          Thank you, Ladysmith
        </h1>
        <p className="m-0 text-[#FFF3D6] font-semibold text-[clamp(17px,2.1vw,23px)] leading-relaxed text-pretty">
          Over the weekend, you filled the beach and downtown. Ladysmith Days 2026 is over,
          and it was a good one.
        </p>
        <div className="flex gap-3.5 flex-wrap justify-center mt-1.5">
          <Link
            to="/#next-year"
            className="bg-white text-[#EF6A5F] font-extrabold text-lg px-[30px] py-3 rounded-full shadow-[0_8px_20px_rgba(120,40,0,.25)] transition-all hover:-translate-y-0.5 hover:text-ld-red hover:shadow-[0_12px_26px_rgba(120,40,0,.32)]"
          >
            Save the date — 2027 is our 60th
          </Link>
          <Link
            to="/#sponsors"
            className="border-[3px] border-white text-white font-bold text-lg px-[26px] py-2.5 rounded-full transition-colors hover:bg-white/15"
          >
            See who made it happen
          </Link>
        </div>
      </div>
    </header>
  )
}

export default SectionPostHero
