import { type MetaFunction } from '@remix-run/node'
import posthog from 'posthog-js'
import CitizenArchive from '~/components/CitizenArchive'
import CitizenLatest from '~/components/CitizenLatest'
import CitizenRecent from '~/components/CitizenRecent'
import PageJumbotron from '~/components/PageJumbotron'
import {
  archivedRecipients,
  latestRecipient,
  recentRecipients,
} from '~/data/citizenOfTheYear'

export const meta: MetaFunction = () => [
  {
    title: 'Ladysmith Community Impact Award - Ladysmith Days',
    description: 'Nominate an individual or organization for the Ladysmith Community Impact Award!',
  },
]

const NOMINATION_FORM_URL = 'https://forms.gle/xX8paCVydZVKmeUv8'

const CitizenOfTheYearPage = () => {
  return (
    <>
      <main className="container mx-auto pt-12">
        <PageJumbotron
          imageClass="bg-header-coty"
          slogan="Ladysmith Community Impact Award"
        />

        <section className="bg-cyan-300 px-6 py-8 text-blue-700">
          <div className="mx-auto max-w-3xl flex flex-col gap-4">
            <p className="text-lg">
              From our historic streets to our beautiful waterfront, what truly makes Ladysmith
              special is the incredible spirit of the people who live here. For many years, our
              community has honored that local dedication through the traditional Citizen of the Year
              award. This year, we are updating this tradition to better capture the full heart and
              diverse efforts of our community.
            </p>
            <p className="text-xl font-bold">
              We are proud to introduce the Ladysmith Community Impact Award.
            </p>
            <p className="text-lg">
              The unique charm and strength of Ladysmith are shaped not only by extraordinary
              individuals but also by the dedicated local organizations, non-profits, and groups that
              work tirelessly behind the scenes. To ensure we can celebrate all forms of community
              service, this newly expanded award recognizes either an individual or an organization
              whose volunteer work, leadership, and dedication have made a lasting, positive
              difference in our town.
            </p>
            <p className="text-lg">
              If you know an individual or a group whose selfless efforts bring the true spirit of
              Ladysmith to life every day, we invite you to submit your nomination below. Thank you
              for helping us recognize those who keep the heart of our community beating strong.
            </p>
            <div>
              <a
                href={NOMINATION_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => posthog.capture('community_award_nomination_clicked')}
              className="inline-block rounded-lg bg-purple-700 px-8 py-3 text-lg font-semibold text-white transition-colors duration-300 hover:bg-purple-800"
              >
                Nominate someone now
              </a>
            </div>
          </div>
        </section>


        <section
          id="citizen-of-the-year-latest"
          className="mb-6 mt-2 flex flex-row justify-end"
        >
          <CitizenLatest
            year={latestRecipient.year}
            name={latestRecipient.name}
            image={latestRecipient.image}
            copy={latestRecipient.copy}
          />
        </section>

        {/* <section className="bg-purple-700 text-white mx-2 mb-6 px-6 py-4 justify-center flex">
            {acceptingSubmissions ? (
              <a
                href="#contact-us"
                className="pointer hover:text-orange-300 duration-300 ease-in-out underline text-2xl font-bold "
              >
                Do you know the next citizen of the year?
              </a>
            ) : (
              <p className="text-lg">
                Thank you for your submissions! We will announce the winner on
                August 6!
              </p>
            )}
          </section> */}

        <section id="citizen-of-the-year-recent" className="mx-2 my-2 lg:px-12">
          <div className="mx-0 grid grid-cols-1 gap-4 md:mx-6 md:grid-cols-2">
            {recentRecipients.map(recipient => (
              <CitizenRecent
                key={`recipient-${recipient.name.split(' ').join('-')}`}
                year={recipient.year}
                name={recipient.name}
                cancelled={recipient.cancelled ?? false}
                image={recipient.image}
              />
            ))}
          </div>
        </section>
        <section
          id="citizen-of-the-year-archive"
          className="my-8 flex justify-center"
        >
          <div
            className="
            grid w-full
            grid-cols-1
            gap-x-2 gap-y-2
            md:grid-cols-2
            xl:w-5/6
          "
          >
            {archivedRecipients.map(recipient => (
              <CitizenArchive
                key={`recipient-${recipient.name.split(' ').join('-')}`}
                year={recipient.year}
                name={recipient.name}
              />
            ))}
          </div>
        </section>
        <section className="my-8 flex justify-center">
          <a
            href={NOMINATION_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-purple-700 px-8 py-3 text-lg font-semibold text-white transition-colors duration-300 hover:bg-purple-800"
          >
            Nominate someone now
          </a>
        </section>
      </main>
    </>
  )
}

export default CitizenOfTheYearPage
