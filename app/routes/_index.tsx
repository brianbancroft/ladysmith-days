import { useCallback, useEffect, useState } from 'react'
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'
import { toast } from 'react-toastify'
import type { MetaFunction } from '@remix-run/node'
import { Link, useLocation } from '@remix-run/react'
import logo from '~/assets/ladysmith-days-logo.png'
import ScrollDownIndicator from '~/components/ScrollDownIndicator'
import SectionEventSummary from '~/components/SectionEventSummary'
import SectionOurPlan from '~/components/SectionOurPlan'
import SectionSocialContact from '~/components/SectionSocialContact'
import TimerClock from '~/components/TimerClock'
import { HomepageSponsors } from '~/components/HomepageSponsors'
import { SectionSchedule } from '~/components/SectionSchedule'

export const meta: MetaFunction = () => {
  return [
    { title: 'Ladysmith Days - August 2,3 2025' },
    {
      property: 'og:title',
      content: 'Ladysmith Days - August 2,3 2025',
    },
    {
      name: 'description',
      content:
        'Ladysmith Days is a two-day event in Ladysmith, BC featuring free family fun, live music, food, and more',
    },
  ]
}

export default function Index() {
  const location = useLocation()
  const [captchaToken, setCaptchaToken] = useState<string | null>(null)
  const { executeRecaptcha } = useGoogleReCaptcha()

  const handleReCaptchaVerify = useCallback(async () => {
    if (!executeRecaptcha) {
      return
    }

    const token = await executeRecaptcha('yourAction')
    setCaptchaToken(token)
  }, [executeRecaptcha])

  // useEffect that will execute out token setting callback function
  useEffect(() => {
    handleReCaptchaVerify()
  }, [handleReCaptchaVerify])

  useEffect(() => {
    const params = new URLSearchParams(location.search)
    if (params.get('sent') === 'true') {
      toast('Thank you! Your email was sent. We will get back to you soon.')
    }
  }, [location.search])

  return (
    <main className="w-full">
      <section className="bg-blue-700 pb-6" id="hero">
        <div
          id="introduction"
          className="
              hero-background
              flex
              h-screen flex-col
              justify-center
              bg-gray-500 bg-header-homepage-mobile bg-cover
              bg-center bg-no-repeat
              bg-origin-padding md:bg-header-homepage
            "
          style={{ backgroundPosition: '0 25%' }}
        >
          <div
            className="
            relative z-10
            flex h-full
            flex-col
            items-center
            justify-center
            bg-blue-700 bg-opacity-50
            px-4 py-8
            text-center
            text-white
            md:px-8 md:py-16
            md:text-left
          "
          >
            <img
              src={logo}
              className="
                fade-in
                delay-1000
                w-48 h-auto
                mb-6
                md:w-64 md:mb-8
                lg:w-80
                drop-shadow-2xl
              "
              alt="ladysmith days logo"
            />
            <h2 className="
              fade-in
              font-heading
              font-black
              text-4xl
              md:text-6xl
              lg:text-7xl
              mb-4
              md:mb-6
              text-center
              md:text-left
              bg-white/90
              md:bg-transparent
              rounded-r-xl
              md:rounded-none
              p-3
              md:p-0
              text-blue-600
              md:text-white
              drop-shadow-lg
              md:drop-shadow-none
              max-w-xs
              md:max-w-none
              mx-auto
              md:mx-0
            ">
              Celebrate Ladysmith
            </h2>

            <div className="mb-8 md:mb-12 lg:mb-16">
              <TimerClock />
            </div>
            <h3 className="
              fade-in-delay
              font-heading
              font-light
              italic
              text-lg
              md:text-2xl
              lg:text-3xl
              mb-8
              md:mb-12
              text-center
              md:text-left
              text-yellow-300
              drop-shadow-md
              opacity-0
            ">
              August 1-2, 2026
            </h3>
          </div>
          <div className="invisible relative bottom-5 md:visible">
            <ScrollDownIndicator />
          </div>

          {/* Floating decorative elements */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="floating-element floating-1">✨</div>
            <div className="floating-element floating-2">🎉</div>
            <div className="floating-element floating-3">🌟</div>
            <div className="floating-element floating-4">🎈</div>
            <div className="floating-element floating-5">⭐</div>
          </div>

          {/* Sparkle particles */}
          <div className="sparkle-container absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className={`sparkle sparkle-${i + 1}`}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${3 + Math.random() * 4}s`
                }}
              >
                ✦
              </div>
            ))}
          </div>
        </div>

        <div className="fade-in-delay-1 -mt-8 md:-mt-12">
          <SectionEventSummary />
        </div>
        <nav className="
          fade-in-delay-2
          flex
          flex-col
          md:flex-row
          justify-center
          items-center
          gap-4
          md:gap-8
          pb-8
          pt-12
          md:pt-16
          px-4
          md:px-0
        ">
          <Link
            to="/volunteer"
            className="
              interactive-btn
              btn
              btn-primary
              font-heading
              font-bold
              text-xl
              md:text-2xl
              lg:text-3xl
              text-ld-yellow
              px-8
              py-4
              md:px-10
              md:py-5
              rounded-xl
              transform
              transition-all
              duration-300
              hover:scale-105
              hover:shadow-2xl
              hover:shadow-yellow-400/50
              min-w-[160px]
              md:min-w-[200px]
              text-center
            "
          >
            <span className="relative z-10">Volunteer</span>
          </Link>
          <Link
            to="/sponsor"
            className="
              interactive-btn
              btn
              btn-primary
              font-heading
              font-bold
              text-xl
              md:text-2xl
              lg:text-3xl
              text-ld-yellow
              px-8
              py-4
              md:px-10
              md:py-5
              rounded-xl
              transform
              transition-all
              duration-300
              hover:scale-105
              hover:shadow-2xl
              hover:shadow-yellow-400/50
              min-w-[160px]
              md:min-w-[200px]
              text-center
            "
          >
            <span className="relative z-10">Sponsor</span>
          </Link>
        </nav>
        <div className="fade-in-delay-3">
          <HomepageSponsors />
        </div>
      </section>

      <div className="w-full bg-blue-700 py-12 md:py-16 lg:py-20">
        {/* Three variants:x
              1. The plan (early times)
              2. The schedule. (as soon as the schedule is available)
              3. The gratitude (TBD)
             */}

        {/* <SectionSchedule /> */}
        {/* <HomepageSponsors2 /> */}

        <div className="fade-in-delay-4 mb-16 md:mb-20">
          <SectionOurPlan />
        </div>

        <div className="fade-in-delay-5">
          <SectionSocialContact />
        </div>
      </div>
    </main>
  )
}
