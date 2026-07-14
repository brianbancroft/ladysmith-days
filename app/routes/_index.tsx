import { useEffect } from 'react'
import { toast } from 'react-toastify'
import type { MetaFunction } from '@remix-run/node'
import { useLocation } from '@remix-run/react'
import { HomepageSponsors } from '~/components/HomepageSponsors'
import SectionGetInvolved from '~/components/SectionGetInvolved'
import SectionHero from '~/components/SectionHero'
import { SectionSchedule } from '~/components/SectionSchedule'
import SectionSocialContact from '~/components/SectionSocialContact'
import SectionSummary from '~/components/SectionSummary'
import SectionWhereToGo from '~/components/SectionWhereToGo'
import WayfindingButton from '~/components/WayfindingButton'

export const meta: MetaFunction = () => {
  return [
    { title: 'Ladysmith Days - August 1,2 2026' },
    {
      property: 'og:title',
      content: 'Ladysmith Days - August 1,2 2026',
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

  useEffect(() => {
    const params = new URLSearchParams(location.search)
    if (params.get('sent') === 'true') {
      toast('Thank you! Your email was sent. We will get back to you soon.')
    }
  }, [location.search])

  return (
    <main className="w-full bg-[#FFF6EC] text-ld-navy">
      <SectionHero />
      <SectionSummary />
      <SectionSchedule />
      <SectionWhereToGo />
      <SectionGetInvolved />
      <HomepageSponsors />
      <SectionSocialContact />
      <WayfindingButton />
    </main>
  )
}
