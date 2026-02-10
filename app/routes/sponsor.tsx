import { type ActionFunctionArgs, redirect } from '@remix-run/node'
import { type MetaFunction } from '@remix-run/react'
import FormContactGeneral from '~/components/FormContactGeneral'
import PageJumbotron from '~/components/PageJumbotron'
import SectionSponsorList from '~/components/SectionSponsorList'
import { sendEmail } from '~/server/sendEmail.server'

export const meta: MetaFunction = () => {
  return [
    { title: 'Sponsor Ladysmith Days' },
    {
      name: 'description',
      content: 'Help make Ladysmith Days a weekend to celebrate!',
    },
  ]
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = new URLSearchParams(await request.text())
  const name = String(formData.get('name'))
  const email = String(formData.get('email'))
  const message = String(formData.get('message'))

  await sendEmail({ name, email, message, page: 'Sponsor' })

  return redirect('/?sent=true')
}

function SponsorPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-blue-50/20 to-gray-50">
      <PageJumbotron
        imageClass="bg-header-sponsor"
        title="Help sponsor Ladysmith Days - A free weekend for families for decades"
        subtitle="For over 40 years, Ladysmith Days has brought families together for a completely free weekend of celebration, activities, and community spirit. Every donation directly supports the events, entertainment, and experiences that make this tradition possible."
        slogan="Support family fun for everyone"
      />

      <section className="w-full text-white md:grid md:grid-cols-2 md:gap-x-8">
        <div className="container mx-auto bg-gradient-to-br from-blue-600 via-blue-700 to-teal-600 px-12 py-12 text-white lg:px-24 shadow-2xl rounded-r-3xl">
          <div className="relative">
            <div className="absolute -top-2 -left-2 w-8 h-8 bg-yellow-400 rounded-full opacity-20"></div>
            <h2 className="py-4 text-2xl font-bold md:text-3xl lg:text-4xl leading-tight">
              Your support makes family memories possible
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-relaxed">
            <p className="text-blue-50">
              Every donation directly supports the activities and experiences that
              families enjoy during Ladysmith Days. From the spectacular fireworks
              display and children's entertainment, to the parade, craft activities,
              and community events - your contribution helps fund it all.
            </p>

            <p className="text-blue-50">
              Beyond financial support, sponsors can also contribute by loaning
              equipment, providing signage, leading activities, or encouraging
              employee volunteerism. Every form of support helps keep this beloved
              tradition alive for another generation of families.
            </p>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <p className="font-semibold text-xl text-white">
                All contributions, big or small, make a difference in creating
                unforgettable family moments.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-br from-orange-400 via-red-500 to-pink-500 bg-cover bg-center relative overflow-hidden rounded-l-3xl shadow-2xl">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative h-full flex items-center justify-center p-8">
            <div className="text-center text-white">
              <div className="text-6xl mb-4">🎆</div>
              <h3 className="text-2xl font-bold mb-2">Celebrate Together</h3>
              <p className="text-lg opacity-90">Creating magical moments for families</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full mb-6 shadow-lg">
              <span className="text-2xl text-white">🤝</span>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 leading-tight">
                Our Amazing Community Partners
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Ladysmith Days could not happen without the incredible support of our community partners for {new Date().getFullYear()}.
                Together, we're creating unforgettable experiences for families.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
            <SectionSponsorList />
          </div>
        </div>
      </section>

      <section
        id="contact-us"
        className="py-16 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-200/20 via-purple-200/20 to-pink-200/20"></div>
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mb-6 shadow-xl">
              <span className="text-3xl text-white">💬</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Let's Make Magic Together
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-8"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 md:p-12 backdrop-blur-sm bg-white/90">
              <FormContactGeneral
                description="Ready to help create magical family memories? Let's talk about how your organization can support Ladysmith Days and make a lasting impact on our community. Every contribution helps ensure families continue to enjoy this beloved tradition for generations to come."
                route="/sponsor"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default SponsorPage
