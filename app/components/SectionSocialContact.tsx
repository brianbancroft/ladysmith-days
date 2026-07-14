const SectionSocialContact = () => {
  return (
    <section id="keep-in-touch" className="py-[30px] pb-[60px]">
      <a
        href="https://www.facebook.com/LadysmithDays"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-[22px] flex-wrap bg-blue-900 text-white py-[26px] px-7 max-w-[980px] rounded-r-full mr-6 transition-colors hover:bg-blue-700"
      >
        <span className="flex items-center justify-center w-16 h-16 border-[3px] border-white rounded-[10px] font-extrabold text-4xl text-white shrink-0 ml-1 md:ml-[clamp(4px,4vw,44px)]">
          f
        </span>
        <span className="flex flex-col gap-1 max-w-[560px] min-w-[240px] flex-1">
          <span className="font-bold text-[clamp(20px,2.6vw,28px)] text-white">
            Keep up to date ↗
          </span>
          <span className="text-[14.5px] text-[#C7D6F5] leading-relaxed font-medium">
            This website carries the finalized schedule, but we release news about
            this year&apos;s event over Facebook — talk to us on Messenger and see
            updates there.
          </span>
        </span>
      </a>
    </section>
  )
}

export default SectionSocialContact
