import { type ActionFunctionArgs, redirect } from '@remix-run/node'
import type { MetaFunction } from '@remix-run/react'
import FormContactGeneral from '~/components/FormContactGeneral'
import LinkVendorDownload from '~/components/LinkVendorDownload'
import PageJumbotron from '~/components/PageJumbotron'
import { sendEmail } from '~/server/sendEmail.server'

const merchandiseVendorsAvailable = true
const foodVendorsAvailable = false

export const meta: MetaFunction = () => {
  return [
    { title: 'Sell with Ladysmith Days' },
    {
      name: 'description',
      content:
        'Everything you need to know to handle a booth at Ladysmith Days',
    },
  ]
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = new URLSearchParams(await request.text())
  const name = String(formData.get('name'))
  const email = String(formData.get('email'))
  const message = String(formData.get('message'))

  await sendEmail({ name, email, message, page: 'Vendor' })

  return redirect('/?sent=true')
}

export default function Vendor() {
  return (
    <div className=" bg-pattern-hamburger">
      <main className="container mx-auto w-full">
        <PageJumbotron
          imageClass="bg-header-vendor"
          slogan="Showcase Your Goods"
          // title="How to become a vendor"
          // subtitle="If you are a merchant, artist or artisan from Ladysmith or the area, we want this to be the place where you get your name out to the town. To apply, look for your preferred form below."
        />

        <section id="sponsors" className="mx-12 my-4 hidden md:block">
          <div className="pl-2 text-xs italic">Brought to you by:</div>
          <div className="md:h-42 grid gap-2 md:grid-cols-3">
            <a
              href="https://www.dollarstores.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-300 p-2 transition-all duration-500 hover:bg-gray-200"
            >
              <div className="my-1 flex h-full w-full justify-center bg-sponsor-vendor-1 bg-contain bg-center bg-no-repeat px-12 py-6"></div>
            </a>

            <a
              href="https://www.panago.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-300 p-2  px-4 transition-all duration-500 hover:bg-gray-200"
            >
              <div className="my-1 flex  h-full w-full justify-center bg-sponsor-vendor-2 bg-contain bg-center bg-no-repeat px-12 py-6"></div>
            </a>
            <a
              href="https://www.homehardware.ca/en/store/51441"
              target="_blank"
              rel="noopener noreferrer"
              className=" bg-gray-300 p-4 transition-all duration-500 hover:bg-gray-200"
            >
              <div className="my-1 flex  h-full w-full justify-center bg-sponsor-vendor-3 bg-contain bg-center bg-no-repeat px-12 py-6"></div>
            </a>
          </div>
        </section>

        <section
          className="
          grid grid-cols-1
          gap-2
          md:grid-cols-2
          lg:grid-cols-[1fr_400px]
          xl:grid-cols-[1fr_600px]
        "
        >
          <div
            className="
            flex
            flex-col
            items-start
            justify-center
            bg-purple-600
            px-8
            py-4
            text-orange-200
          "
          >
            <div className="mx-auto max-w-prose">
              <h2 className="my-2 text-2xl md:text-3xl">
                Register as a Vendor Here
              </h2>
              <p>
                To register, the first step is to download one of the form
                packages, send it to the email listed in the package, or mail it
                to the physical address. If you are running into trouble
                communicating, support is just a email away.
              </p>
            </div>
          </div>
          <div>
            <LinkVendorDownload
              bgImage="bg-call-vendor-foodvendor"
              pdfDocument="/vendor/ladysmith-days-food-vendor.pdf"
              label="Food Trucks and Stands"
              soldOut={!foodVendorsAvailable}
            />
            <LinkVendorDownload
              bgImage="bg-call-vendor-general"
              pdfDocument="/vendor/ladysmith-days-merchandise-vendor.pdf"
              label="General Vendors and Booths"
              soldOut={!merchandiseVendorsAvailable}
            />
          </div>
        </section>

        <section
          id="contact-us"
          className="mt-4 flex items-center justify-center bg-cyan-300 p-7 text-blue-700 shadow-2xl drop-shadow-2xl"
        >
          <FormContactGeneral
            title="Have questions? Talk to us!"
            description="Some processes can be intimidating, and there might be a chance you're missing
                something, or there might be a chance we could explain something a bit better. If you have
                questions, talk to us. We'd love to help"
            route="/vendor"
          />
        </section>
      </main>
    </div>
  )
}
