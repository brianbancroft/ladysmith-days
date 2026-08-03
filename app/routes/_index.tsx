import { useEffect } from 'react'
import { toast } from 'react-toastify'
import type { MetaFunction } from '@remix-run/node'
import { useLocation } from '@remix-run/react'
import { HOMEPAGE_MODE } from '~/config/homepageMode'
import { HomepageSponsors } from '~/components/HomepageSponsors'
import SectionComingSoon from '~/components/SectionComingSoon'
import SectionGetInvolved from '~/components/SectionGetInvolved'
import SectionHero from '~/components/SectionHero'
import SectionPostGallery from '~/components/SectionPostGallery'
import SectionPostHero from '~/components/SectionPostHero'
import SectionPostNextYear from '~/components/SectionPostNextYear'
import SectionPostSponsors from '~/components/SectionPostSponsors'
import SectionPostThanks from '~/components/SectionPostThanks'
import SectionRampUpHero from '~/components/SectionRampUpHero'
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

  if (HOMEPAGE_MODE === 'post') {
    return (
      <main className="w-full bg-[#FFF6EC] text-ld-navy">
        <SectionPostHero />
        <SectionPostThanks />
        <SectionPostGallery />
        <SectionPostSponsors />
        <SectionPostNextYear />
      </main>
    )
  }

  if (HOMEPAGE_MODE === 'ramp-up') {
    return (
      <main className="w-full bg-[#FFF6EC] text-ld-navy">
        <SectionRampUpHero />
        <SectionSummary />
        <SectionComingSoon />
        <SectionGetInvolved />
        <HomepageSponsors />
        <SectionSocialContact />
      </main>
    )
  }

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
