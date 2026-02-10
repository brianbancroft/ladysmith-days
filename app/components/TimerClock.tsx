import { useEffect, useState } from 'react'

// a visual timer countdown clock that counts down to 4:30pm august 4 2024
function TimerClock() {
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [loading, setLoading] = useState(true)

  //   calculate initial time, and create a function that will update the time remaining every second
  useEffect(() => {
    const countdownDate = new Date('August 1, 2026 7:00:00').getTime()

    setInterval(() => {
      const now = new Date().getTime()
      const distance = countdownDate - now

      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      )
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)

      setTimeRemaining({ days, hours, minutes, seconds })
      setLoading(false)
    })
  }, [])

  const timeAvailable =
    timeRemaining.days +
    timeRemaining.hours +
    timeRemaining.minutes +
    timeRemaining.seconds

  function InternalContent() {
    if (loading) {
      return <></>
    }

    return timeAvailable <= 0 ? (
      <h1 className="
        neon-text
        text-xl
        md:text-2xl
        lg:text-3xl
        font-thin
        tracking-widest
        text-white
        animate-pulse
        text-center
      ">
        Ladysmith Days is Here!
      </h1>
    ) : (
      <div className="
        grid
        grid-cols-4
        grid-rows-2
        justify-items-center
        gap-x-2
        md:gap-x-4
        lg:gap-x-6
        font-bold
        uppercase
        text-white
      ">
        <div className="timer-number text-xl md:text-2xl lg:text-3xl">{timeRemaining.days}</div>
        <div className="row-start-2 text-xs md:text-sm lg:text-base">days</div>
        <div className="timer-number text-xl md:text-2xl lg:text-3xl">{timeRemaining.hours}</div>
        <div className="row-start-2 text-xs md:text-sm lg:text-base">hours</div>
        <div className="timer-number text-xl md:text-2xl lg:text-3xl">{timeRemaining.minutes}</div>
        <div className="row-start-2 text-xs md:text-sm lg:text-base">minutes</div>
        <div className="timer-number text-xl md:text-2xl lg:text-3xl">{timeRemaining.seconds}</div>
        <div className="row-start-2 text-xs md:text-sm lg:text-base">seconds</div>
      </div>
    )
  }

  return (
    <aside className="
      timer-clock-container
      h-24
      md:h-28
      lg:h-32
      w-full
      max-w-sm
      md:max-w-md
      lg:max-w-lg
      rounded-xl
      bg-purple-600/60
      p-4
      md:p-5
      lg:p-6
      shadow-2xl
      mx-auto
      md:mx-0
    ">
      <InternalContent />
    </aside>
  )
}

export default TimerClock
