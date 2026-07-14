/** @type {import('tailwindcss').Config} */
function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`
    }
    return `rgb(var(${variableName}))`
  }
}

export default {
  content: ['./app/**/*.{tsx,ts,jsx,js}'],
  media: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      heading: ['"Baloo Bhai 2"'],
    },
    extend: {
      backgroundImage: {
        'hero-citizen-of-the-year': "url('/hero-citizen-of-the-year.jpg')",
        sponsor: "url('/placeholder-sponsor.jpg')",
        vendor: "url('/placeholder-vendor.jpg')",
        volunteer: "url('/placeholder-volunteer.jpg')",
        placeholder: "url('https://via.placeholder.com/600x320')",
        fireworks: "url('/fireworks.jpg')",
        'call-homepage-sponsor':
          "url('/backgrounds/call-homepage-sponsor.png')",
        'call-homepage-vendor': "url('/backgrounds/call-homepage-vendor.png')",
        'call-homepage-volunteer':
          "url('/backgrounds/call-homepage-volunteer.png')",
        'call-vendor-fireworks':
          "url('/backgrounds/call-vendor-fireworks.png')",
        'call-vendor-general': "url('/backgrounds/link-vendor-merch.png')",
        'call-vendor-foodvendor': "url('/backgrounds/link-vendor-food.png')",
        'header-coty': "url('/backgrounds/header-coty.png')",
        'header-homepage': "url('/backgrounds/header-homepage-fireworks.jpg')",
        'header-homepage-mobile':
          "url('/backgrounds/header-homepage-fireworks-mobile.jpg')",
        'header-sponsor': "url('/backgrounds/header-sponsor.jpg')",
        'header-vendor': "url('/backgrounds/header-vendor.png')",
        'header-volunteer': "url('/backgrounds/header-volunteer.png')",
        'sponsor-coty-1': "url('/backgrounds/sponsor-coty-1.png')",
        'sponsor-coty-2': "url('/backgrounds/sponsor-coty-2.png')",
        'sponsor-coty-3': "url('/backgrounds/sponsor-coty-3.png')",
        'sponsor-homepage-1': "url('/backgrounds/sponsor-homepage-1.png')",
        'sponsor-homepage-2': "url('/backgrounds/sponsor-homepage-2.png')",
        'sponsor-homepage-3': "url('/backgrounds/sponsor-homepage-3.png')",
        'sponsor-homepage-4':
          "url('/backgrounds/sponsor-sponsor-countrygrocer.png')",
        'sponsor-homepage-5': "url('/backgrounds/sponsor-sponsor-coop.png')",
        'sponsor-homepage-6':
          "url('/backgrounds/sponsor-sponsor-pharmasave.png')",
        'sponsor-vendor-1': "url('/backgrounds/sponsor-vendor-1.png')",
        'sponsor-vendor-2': "url('/backgrounds/sponsor-vendor-2.png')",
        'sponsor-vendor-3': "url('/backgrounds/sponsor-vendor-3.png')",
        'sponsor-volunteer-1': "url('/backgrounds/sponsor-volunteer-1.png')",
        'sponsor-volunteer-2': "url('/backgrounds/sponsor-volunteer-2.png')",
        'sponsor-volunteer-3': "url('/backgrounds/sponsor-volunteer-3.png')",
        'sponsor-49th': "url('/backgrounds/sponsor-sponsor-49thparralel.png')",
        'sponsor-711': "url('/backgrounds/sponsor-sponsor-711.png')",
        'sponsor-411': "url('/backgrounds/sponsor-sponsor-411.png')",
        'sponsor-annelynndesign':
          "url('/backgrounds/sponsor-sponsor-annelynndesign.png')",
        'sponsor-aw': "url('/backgrounds/sponsor-sponsor-aw.png')",
        'sponsor-bayview': "url('/backgrounds/sponsor-sponsor-bayview.png')",
        'sponsor-bayview-framing':
          "url('/backgrounds/sponsor-sponsor-bayview-framing.png')",
        'sponsor-bethel': "url('/backgrounds/sponsor-sponsor-bethel.png')",
        'sponsor-bosleys': "url('/backgrounds/sponsor-sponsor-bosleys.png')",
        'sponsor-chamber':
          "url('/backgrounds/sponsor-sponsor-chambercommerce.png')",
        'sponsor-chronicle':
          "url('/backgrounds/sponsor-sponsor-chronicle.png')",
        'sponsor-coastaltrucking':
          "url('/backgrounds/sponsor-sponsor-coastaltrucking.png')",
        'sponsor-coop': "url('/backgrounds/sponsor-sponsor-coop.png')",
        'sponsor-countrygrocer':
          "url('/backgrounds/sponsor-sponsor-countrygrocer.png')",
        'sponsor-cupe': "url('/backgrounds/sponsor-sponsor-cupe.png')",

        'sponsor-dens': "url('/backgrounds/sponsor-sponsor-dens.png')",
        'sponsor-dq': "url('/backgrounds/sponsor-sponsor-dairyqueen.png')",
        'sponsor-dollarstore':
          "url('/backgrounds/sponsor-sponsor-dollarstore.png')",
        'sponsor-fmi': "url('/backgrounds/sponsor-sponsor-fmi.jpg')",
        'sponsor-gfl': "url('/backgrounds/sponsor-sponsor-gfl.png')",

        'sponsor-eagles': "url('/backgrounds/sponsor-sponsor-eagles.png')",
        'sponsor-eagles-ladies':
          "url('/backgrounds/sponsor-sponsor-eagles-ladies.png')",
        'sponsor-homehardware':
          "url('/backgrounds/sponsor-sponsor-home-hardware.png')",
        'sponsor-hillside': "url('/backgrounds/sponsor-sponsor-hillside.png')",
        'sponsor-ida': "url('/backgrounds/sponsor-sponsor-ida.png')",
        'sponsor-kinsmen': "url('/backgrounds/sponsor-sponsor-kinsmen.png')",
        'sponsor-little-valley':
          "url('/backgrounds/sponsor-sponsor-littlevalley.png')",
        'sponsor-maritime-society':
          "url('/backgrounds/sponsor-sponsor-maritime-society.png')",
        'sponsor-townladysmith':
          "url('/backgrounds/sponsor-sponsor-ladysmithtown.png')",
        'sponsor-creditunion':
          "url('/backgrounds/sponsor-sponsor-ladysmitthcreditunion.png')",
        'sponsor-legion': "url('/backgrounds/sponsor-sponsor-legion.png')",
        'sponsor-market2all':
          "url('/backgrounds/sponsor-sponsor-market2all.png')",
        'sponsor-mcdonalds':
          "url('/backgrounds/sponsor-sponsor-mcdonalds.png')",
        'sponsor-oceanview':
          "url('/backgrounds/sponsor-sponsor-oceanview.png')",
        'sponsor-oldtownbakery':
          "url('/backgrounds/sponsor-sponsor-oldtownbakery.png')",
        'sponsor-panago': "url('/backgrounds/sponsor-sponsor-panago.png')",
        'sponsor-pharmasave':
          "url('/backgrounds/sponsor-sponsor-pharmasave.png')",
        'sponsor-raider-hansen':
          "url('/backgrounds/sponsor-sponsor-raiderhansen.png')",

        'sponsor-ryler': "url('/backgrounds/sponsor-sponsor-ryler.png')",
        'sponsor-saltair-marine':
          "url('/backgrounds/sponsor-sponsor-saltair-marine.png')",
        'sponsor-save-on-foods':
          "url('/backgrounds/sponsor-sponsor-saveonfoods.png')",
        'sponsor-orcadental':
          "url('/backgrounds/sponsor-sponsor-orcadental.png')",
        'sponsor-sealeags': "url('/backgrounds/sponsor-sponsor-sealegs.png')",
        'sponsor-spyder-graphix':
          "url('/backgrounds/sponsor-sponsor-spydergraphix.png')",
        'sponsor-yum-yum': "url('/backgrounds/sponsor-sponsor-yumyum.png')",
      },
      backgroundColor: {
        'ld-light-blue': withOpacity('--ld-light-blue'),
        'ld-yellow': withOpacity('--ld-yellow'),
        'ld-dark-blue': withOpacity('--ld-dark-blue'),
        'ld-red': withOpacity('--ld-red'),
        'ld-green': withOpacity('--ld-green'),
        'ld-purple': withOpacity('--ld-purple'),
      },
      textColor: {
        'ld-light-blue': withOpacity('--ld-light-blue'),
        'ld-yellow': withOpacity('--ld-yellow'),
        'ld-dark-blue': withOpacity('--ld-dark-blue'),
        'ld-red': withOpacity('--ld-red'),
        'ld-green': withOpacity('--ld-green'),
        'ld-purple': withOpacity('--ld-purple'),
      },
      colors: {
        'ld-gold': '#FFD23F',
        'ld-navy': '#2E4FA3',
        'ld-slate': '#5A6DB0',
      },
    },
  },

  variants: {
    extend: {},
  },
  plugins: [],
}
