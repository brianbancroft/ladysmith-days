import { Link } from '@remix-run/react'

function WayfindingButton() {
  return (
    <Link
      to="/#where"
      className="fixed bottom-[18px] right-[18px] z-[60] flex items-center gap-2 bg-ld-red text-white font-extrabold text-sm py-3 px-5 rounded-full shadow-[0_10px_24px_rgba(160,20,40,.4)] transition-all hover:bg-[#D93D4B] hover:-translate-y-0.5"
    >
      <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4" aria-hidden="true">
        <path d="M10 1.5c-3.31 0-6 2.69-6 6 0 4.5 6 11 6 11s6-6.5 6-11c0-3.31-2.69-6-6-6zm0 8.25a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5z" />
      </svg>
      Where do I go?
    </Link>
  )
}

export default WayfindingButton
