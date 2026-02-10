import { type ActionFunctionArgs, redirect } from '@remix-run/node'
import { Form, type MetaFunction } from '@remix-run/react'
import PageJumbotron from '~/components/PageJumbotron'
import { sendEmail } from '~/server/sendEmail.server'

export const meta: MetaFunction = () => {
  return [
    { title: 'Volunteer with Ladysmith Days' },
    {
      name: 'description',
      content: 'Ladysmith Days is a great way to get to know Ladysmith!',
    },
  ]
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = new URLSearchParams(await request.text())
  const name = String(formData.get('name'))
  const email = String(formData.get('email'))
  const message = String(formData.get('message'))

  await sendEmail({ name, email, message, page: 'Volunteer Page' })

  return redirect('/?sent=true')
}

const VolunteerSponsors = () => (
  <section id="sponsors" className="my-3">
    <div className="pl-2 text-xs italic">Brought to you by:</div>
    <div className="grid gap-2 md:h-52 md:grid-cols-3">
      <a
        href="https://606.cupe.ca/"
        target="_blank"
        rel="noopener noreferrer"
        className="sponsor-element sponsor-link p-2"
      >
        <div className="my-1 flex h-full w-full justify-center bg-sponsor-volunteer-1 bg-contain bg-center bg-no-repeat px-12 py-6"></div>
      </a>

      <a
        href="https://pharmasave.com/ladysmith/"
        target="_blank"
        rel="noopener noreferrer"
        className="sponsor-element sponsor-link  p-2 px-4"
      >
        <div className="my-1 flex  h-full w-full justify-center bg-sponsor-volunteer-2 bg-contain bg-center bg-no-repeat px-12 py-6"></div>
      </a>
      <a
        href="https://www.saveonfoods.com/ladysmith/"
        target="_blank"
        rel="noopener noreferrer"
        className=" sponsor-element sponsor-link p-4"
      >
        <div className="my-1 flex  h-full w-full justify-center bg-sponsor-volunteer-3 bg-contain bg-center bg-no-repeat px-12 py-6"></div>
      </a>
    </div>
  </section>
)

function Volunteer() {
  return (
    <main className="container mx-auto py-12 relative overflow-hidden">
      {/* Floating sparkles background */}
      <div className="sparkle-container">
        <div className="sparkle" style={{top: '10%', left: '20%', animationDelay: '0s'}}>✨</div>
        <div className="sparkle" style={{top: '20%', right: '15%', animationDelay: '1s'}}>⭐</div>
        <div className="sparkle" style={{bottom: '30%', left: '25%', animationDelay: '2s'}}>🌟</div>
        <div className="sparkle" style={{bottom: '20%', right: '20%', animationDelay: '3s'}}>✦</div>
        <div className="sparkle" style={{top: '60%', left: '10%', animationDelay: '4s'}}>💫</div>
        <div className="sparkle" style={{top: '40%', right: '30%', animationDelay: '5s'}}>✨</div>
      </div>

      {/* Animated beach balls */}
      <div className="beach-balls-container">
        <div className="beach-ball red-ball"></div>
        <div className="beach-ball yellow-ball"></div>
        <div className="beach-ball blue-ball"></div>
        <div className="beach-ball green-ball"></div>
        <div className="beach-ball purple-ball straggler"></div>
      </div>

      <div id="modalDisplay" className="hidden">
        <section
          className="
            fixed
            z-50
            flex h-full
            w-full flex-col
            justify-center
            bg-gray-700
            bg-opacity-60
            p-4
            align-middle
          "
        ></section>
      </div>
      <PageJumbotron
        imageClass="bg-header-volunteer"
        title="Come Celebrate With Us"
        slogan="We are Volunteer-Driven"
      />

      <div className="container mx-auto mt-8 md:mt-0">
        {/* <SelectorVolunteerPositions /> */}
      </div>
      <section
        id="contact-us"
        className="relative my-6 mt-4 rounded-xl border-4 border-transparent p-2 shadow-2xl drop-shadow-2xl md:mt-6 md:p-7"
        style={{
          background: 'linear-gradient(135deg, rgba(101, 190, 229, 0.1), rgba(255, 207, 90, 0.1), rgba(124, 87, 181, 0.1))',
        }}
      >
        {/* Rainbow border effect */}
        <div
          className="absolute inset-0 rounded-xl p-[2px]"
          style={{
            background: 'linear-gradient(45deg, #ef5562, #ffcf5a, #86d169, #65bee5, #7c57b5, #ef5562)',
            backgroundSize: '200% 200%',
            animation: 'gradient 15s ease infinite',
          }}
        >
          <div className="h-full w-full rounded-xl bg-white">
            <div className="max-w-prose px-1 py-3 md:p-3">
              <h1
                className="bounce-in-text font-sans my-2 ml-2 text-3xl font-bold md:text-4xl"
                style={{
                  background: 'linear-gradient(45deg, #7c57b5, #ef5562, #ffcf5a)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Join the Fun! 🎉
              </h1>
              <p className="fade-in-delay ml-2 py-2 text-lg" style={{color: '#1e406b'}}>
                Ladysmith Days is all about{' '}
                <span
                  className="font-semibold"
                  style={{
                    background: 'linear-gradient(45deg, #86d169, #65bee5)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  celebrating our amazing community together!
                </span>{' '}
                We're looking for enthusiastic volunteers of all commitment levels to help
                make this weekend spectacular for families across Ladysmith.
              </p>
              <p className="fade-in-delay-1 ml-2 py-2 text-lg">
                Whether you're a{' '}
                <span
                  className="font-semibold"
                  style={{
                    background: 'linear-gradient(45deg, #7c57b5, #ef5562)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  dedicated organizer
                </span>
                , someone who can help at the event for{' '}
                <span
                  className="font-semibold"
                  style={{
                    background: 'linear-gradient(45deg, #ffcf5a, #86d169)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  just a couple hours
                </span>
                , or anywhere in between -{' '}
                <span className="bounce-word font-bold" style={{color: '#ef5562'}}>
                  we want YOU!
                </span>{' '}
                Every bit of help makes our celebration even more magical. From setup crew to on-site helpers, your
                energy and enthusiasm are what make Ladysmith Days special.
              </p>
              <p className="fade-in-delay-2 ml-2 py-2 text-lg">
                Want to be part of the{' '}
                <span
                  className="font-semibold"
                  style={{
                    background: 'linear-gradient(45deg, #65bee5, #7c57b5)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  planning team?
                </span>{' '}
                Join the Ladysmith Celebrations Society - our board that's already gearing up for the 2025 event! Or just show up when
                you can -{' '}
                <span className="font-semibold" style={{color: '#86d169'}}>
                  we're flexible and grateful for any time you can give.
                </span>
              </p>

              <iframe
                title="Volunteer Form"
                className="fade-in-delay-3 mt-6 h-[50vh] w-full rounded-lg border-2 bg-slate-50 shadow-lg"
                style={{borderColor: '#65bee5'}}
                src="https://docs.google.com/forms/d/e/1FAIpQLSeb-9EzwupNAoENKyKHwW2uPB7ryOysBQSlWDyOc8Z55b-4vg/viewform?embedded=true"
                frameBorder="0"
              />
            </div>
          </div>
        </div>
      </section>
      <VolunteerSponsors />
    </main>
  )
}

export default Volunteer
