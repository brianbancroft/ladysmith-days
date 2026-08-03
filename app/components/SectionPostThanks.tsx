function SectionPostThanks() {
  return (
    <section id="thanks" className="max-w-[900px] mx-auto pt-14 px-4 pb-2">
      <div className="flex flex-col gap-2.5 items-center text-center mb-7">
        <h2 className="m-0 font-extrabold text-[clamp(30px,4.4vw,50px)] text-ld-navy text-pretty">
          Another great weekend, hosted by a great town
        </h2>
        <div className="w-[110px] h-1.5 bg-ld-gold rounded-full" />
      </div>
      <div className="flex flex-col gap-[18px] text-[clamp(17px,2vw,20px)] font-medium leading-relaxed text-[#3C4E8F] text-pretty">
        <p className="m-0">
          We had hours of concerts, games and activities across the weekend — bands playing into the
          evening, kids running between events, and a whole lot of people out on the street who hadn't seen
          each other in a while.
        </p>
        <p className="m-0">
          Thank you to Ladysmith for hosting us again. Thank you to the volunteers who set up early and
          stayed late, to the crews who kept the venues running, and to every family who showed up.
        </p>
        <p className="m-0 font-bold text-ld-navy">We'll be back for the August long weekend in 2027.</p>
      </div>
    </section>
  )
}

export default SectionPostThanks
