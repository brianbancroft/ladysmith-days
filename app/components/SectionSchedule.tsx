import Starburst from './Starburst'

export function SectionSchedule() {
  return (
    <article className="overflow-x-hidden">
      <div className="relative z-10 hidden h-0 w-0 xl:block">
        <Starburst className="relative -left-[150px] top-12 z-0 w-[340px] -rotate-12 opacity-80" />
      </div>
      <div className="z-20 mx-auto max-w-2xl rounded-lg bg-white p-8 shadow-lg xl:max-w-5xl">
        <div className="mb-6 -rotate-1 transform bg-ld-green p-6 shadow-lg">
          <h1 className="my-3 font-heading text-4xl font-bold text-ld-yellow">
            2026 SCHEDULE
          </h1>
        </div>

        <h2 className="mb-1 font-heading text-2xl font-semibold text-red-500">
          SATURDAY
        </h2>

        <h3 className="mb-2 text-xl font-semibold text-red-500">
          OYSTER BAY MARINA
        </h3>
        <ul className="mb-4 list-inside list-disc marker:text-red-500">
          <li className="text-ld-dark-blue lg:text-xl">
            BULLHEAD DERBY | 7 - 9 AM
          </li>
        </ul>

        <div className="relative z-10 h-0 w-0">
          <Starburst className="relative -top-32 left-[450px] z-0 w-[320px] -rotate-12 opacity-80 md:w-[400px] lg:left-[450px] xl:left-[850px] xl:w-[500px]" />
        </div>

        <h3 className="mb-2 text-xl font-semibold text-red-500">
          TRANSFER BEACH
        </h3>
        <ul className="mb-4 list-inside list-disc marker:text-red-500 lg:text-xl">
          <li className="text-ld-dark-blue">ROTARY PANCAKE BREAKFAST | 8 AM</li>
          <li className="text-ld-dark-blue">FOOD & MERCHANDISE VENDORS</li>
          <li className="font-semibold italic text-ld-dark-blue">
            LADYSMITH DAYS EXPO | 10 AM - 2 PM
          </li>
          <li className="text-ld-dark-blue">OLD TIME GAMES | 12 PM</li>
          <li className="text-ld-dark-blue">
            KIDS CRAFTS TABLE | 10 AM - 3 PM
          </li>
          <li className="text-ld-dark-blue">NAIL DRIVING CONTEST | 1 PM</li>
          <li className="text-ld-dark-blue">ZUCCHINI RACES | 2 PM</li>
          <li className="text-ld-dark-blue">GREASY POLE COMPETITION | 3 PM</li>

          <li className="text-ld-dark-blue">BEER GARDEN | 12 PM - 10 PM</li>
          <li className="font-semibold italic text-ld-dark-blue">
            PROFESSIONAL WRESTLING | 5:15 PM
          </li>
        </ul>

        <div className="relative z-10 h-0 w-0">
          <Starburst className="relative -left-[300px] -top-12 z-0 w-72 -rotate-12 opacity-80 xl:-left-[500px] xl:-top-12 xl:w-96" />
        </div>

        <hr className="my-8 h-4 rounded-full border-0 bg-ld-yellow" />

        <h2 className="mb-1 mt-4 font-heading text-2xl font-semibold text-purple-500">
          SUNDAY
        </h2>

        <h3 className="mb-2 text-xl font-semibold text-purple-500">
          DOWNTOWN 1ST AVE
        </h3>
        <ul className="mb-4 list-inside list-disc marker:text-purple-500 lg:text-xl">
          <li className="font-semibold italic text-ld-dark-blue">
            SOAP BOX DERBY | 10 AM
          </li>
          <li className="text-ld-dark-blue">SKATEBOARD DEMO | 10 AM</li>
        </ul>

        <h3 className="mb-2 text-xl font-semibold text-purple-500">
          TRANSFER BEACH
        </h3>
        <ul className="mb-4 list-inside list-disc marker:text-purple-500 lg:text-xl">
          <li className="text-ld-dark-blue">FOOD VENDORS</li>
          <li className="text-ld-dark-blue">BEER GARDEN | 12 PM - 10 PM</li>
          <li className="font-semibold italic text-ld-dark-blue">
            LDCU KIDS FUN ZONE | 11 AM
          </li>
          <li className="text-ld-dark-blue">CLIMBING WALL | 11 AM</li>
        </ul>
      </div>

      <section className="relative bottom-3 mx-auto mb-12 lg:mb-24">
        <div className="mx-auto md:w-3/4">
          <div className="-rotate-2 bg-ld-light-blue p-1">
            <div className="rotate-1 bg-blue-700 p-2">
              <div className="transform bg-ld-yellow p-6 shadow-lg">
                <h3 className="mb-4 text-2xl font-bold text-ld-dark-blue">
                  <span className="font-heading text-3xl">
                    BANDS ON THE BEACH{' '}
                  </span>
                  | SUNDAY
                </h3>
                
                <p className="mb-2 text-lg font-light text-ld-purple">
                  FEATURING
                </p>
                <ul className="mb-4 space-y-1 text-lg font-semibold text-ld-purple">
                  <li>
                    LEE WORDEN <span className="text-ld-dark-blue text-base">11:00</span> • PEACE, LOVE AND JOY <span className="text-ld-dark-blue text-base">11:45</span> • LATITUD 0° TROPICAL DUO <span className="text-ld-dark-blue text-base">12:30</span>
                  </li>
                  <li>
                    SOL BLUE VIBES <span className="text-ld-dark-blue text-base">1:15</span> • SARAH LEO <span className="text-ld-dark-blue text-base">2:00</span> • DIAMOND DAWGS <span className="text-ld-dark-blue text-base">2:45</span>
                  </li>
                  <li>JOHNNY RIGHTEOUS <span className="text-ld-dark-blue text-base">3:45</span> • ANDY MCCORMACK <span className="text-ld-dark-blue text-base">4:30</span> • COVER GIRL <span className="text-ld-dark-blue text-base">5:15</span> • BRYCE ALLAN <span className="text-ld-dark-blue text-base">6:30</span></li>
                </ul>
                <p className="my-3 text-lg font-light text-blue-600">
                  CITIZEN OF THE YEAR PRESENTATION | 7:45 PM
                </p>
                <p className="mb-3 text-2xl font-bold text-ld-purple">
                  <span className="text-lg font-light">AND</span> SUNSET STRIP | 8:00 PM
                </p>
                <p className="my-1 text-2xl font-bold text-blue-600">
                  FIREWORKS STARTING AT 10 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  )
}
