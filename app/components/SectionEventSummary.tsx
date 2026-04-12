type Props = {
  eventOver?: boolean
}

function SectionEventSummary(props: Props) {
  const { eventOver } = props

  return (
    <div className="
      bg-gradient-to-r
      from-sky-400
      via-sky-500
      to-sky-600
      py-8
      md:py-12
      lg:py-16
      text-blue-700
      shadow-2xl
      relative
      overflow-hidden
    ">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-4 left-4 w-16 h-16 bg-white rounded-full"></div>
        <div className="absolute top-8 right-8 w-12 h-12 bg-white rounded-full"></div>
        <div className="absolute bottom-6 left-1/4 w-8 h-8 bg-white rounded-full"></div>
        <div className="absolute bottom-8 right-1/3 w-10 h-10 bg-white rounded-full"></div>
      </div>

      {/* Multi-color Beach Balls */}
      <div className="beach-balls-container absolute inset-0 pointer-events-none overflow-hidden">
        {/* Red beach ball - bounces up from bottom left */}
        <div className="beach-ball red-ball" style={{ animationDelay: '2.2s' }}>
          <div className="beach-ball-inner"></div>
        </div>

        {/* Yellow beach ball - bounces down from top right */}
        <div className="beach-ball yellow-ball" style={{ animationDelay: '2.4s' }}>
          <div className="beach-ball-inner"></div>
        </div>

        {/* Blue beach ball - bounces from left side */}
        <div className="beach-ball blue-ball" style={{ animationDelay: '2.6s' }}>
          <div className="beach-ball-inner"></div>
        </div>

        {/* Green beach ball - bounces from right side */}
        <div className="beach-ball green-ball" style={{ animationDelay: '2.8s' }}>
          <div className="beach-ball-inner"></div>
        </div>

        {/* Purple beach ball - straggler appears 5-6 seconds later */}
        <div className="beach-ball purple-ball straggler" style={{ animationDelay: '8s' }}>
          <div className="beach-ball-inner"></div>
        </div>
      </div>

      <div className="relative z-10 px-4 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="overflow-hidden pt-6">
          <h2 className="
            font-heading
            font-bold
            text-3xl
            md:text-4xl
            lg:text-6xl
            mb-4
            md:mb-6
            text-white
            drop-shadow-lg
            bounce-in-text
          ">
            {eventOver ? (
              'Thank you for a great event'
            ) : (
              <span className="inline-block">
                <span className="bounce-word" style={{ animationDelay: '0s' }}>A</span>{' '}
                <span className="bounce-word" style={{ animationDelay: '0.1s' }}>free</span>{' '}
                <span className="bounce-word" style={{ animationDelay: '0.2s' }}>and</span>{' '}
                <span className="bounce-word" style={{ animationDelay: '0.3s' }}>fun</span>{' '}
                <span className="bounce-word" style={{ animationDelay: '0.4s' }}>weekend</span>
              </span>
            )}
          </h2>
          </div>
          <div className="
            w-24
            h-1
            bg-yellow-400
            mx-auto
            mb-6
            md:mb-8
            rounded-full
          "></div>
          <p className="
            text-lg
            md:text-xl
            lg:text-2xl
            mx-auto
            max-w-3xl
            text-white/90
            leading-relaxed
            font-medium
          ">
            Ladysmith Days celebrates our wonderful town by giving everyone
            something to do over the long weekend and showcasing the best that
            Ladysmith has to offer.
          </p>
        </div>
      </div>
    </div>
  )
}

export default SectionEventSummary
