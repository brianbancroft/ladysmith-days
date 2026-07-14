function SectionSummary() {
  return (
    <section
      id="summary"
      className="relative overflow-hidden bg-gradient-to-r from-sky-400 via-sky-500 to-sky-600 py-11 px-5 text-center text-white"
    >
      <div aria-hidden="true" className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-3.5 left-4 w-16 h-16 bg-white rounded-full" />
        <div className="absolute top-7 right-8 w-11 h-11 bg-white rounded-full" />
        <div className="absolute bottom-5 left-1/4 w-8 h-8 bg-white rounded-full" />
        <div className="absolute bottom-7 right-1/3 w-9 h-9 bg-white rounded-full" />
      </div>
      <div className="relative max-w-3xl mx-auto flex flex-col gap-3.5 items-center">
        <h2 className="m-0 font-extrabold text-[clamp(26px,4vw,44px)] [text-shadow:0_2px_8px_rgba(2,80,130,.35)]">
          A free and fun weekend
        </h2>
        <div className="w-24 h-[5px] bg-ld-gold rounded-full" />
        <p className="m-0 text-[clamp(16px,2vw,20px)] font-medium text-white/90 leading-relaxed max-w-xl">
          Ladysmith Days celebrates our wonderful town by giving everyone something to
          do over the long weekend and showcasing the best that Ladysmith has to offer.
        </p>
      </div>
    </section>
  )
}

export default SectionSummary
