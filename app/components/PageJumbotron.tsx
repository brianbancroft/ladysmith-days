import logo from '~/assets/ladysmith-days-logo.png'

type Props = {
  slogan?: string
  title?: string
  subtitle?: string
  imageClass?: string
}

function PageJumbotron(props: Props) {
  const { slogan, title, subtitle, imageClass } = props

  return (
    <section className="mb-4">
      <div
        id="introduction"
        className={`
              flex
              flex-col bg-gray-500
              bg-cover ${imageClass ?? 'bg-header-homepage'} bg-no-repeat          
            `}
        style={{ backgroundPosition: '0 25%' }}
      >
        <div
          className="
            flex h-full
            flex-col items-center justify-evenly
            bg-blue-700
            bg-opacity-60
            p-4
            align-middle
            md:flex-row
            md:align-baseline
          "
        >
          <img
            className=""
            src={logo}
            alt="ladysmith days logo"
            height={300}
            width={350}
          />
          <div className="hidden md:block">
            <h1 className="text-2xl font-bold text-white md:text-4xl">
              {slogan}
            </h1>
          </div>
        </div>
      </div>
      <div className="bg-blue-700 px-2 py-4 text-white">
        <p className="text-center font-semibold ">
          {/* Almost always BC Day Weekend */}
          August 1-2, 2026 • Transfer Beach & Downtown Ladysmith
        </p>
      </div>
      {title && subtitle ? (
        <div className="bg-cyan-300 px-4 py-8 text-blue-700">
          <div className="">
            <h2 className="text-center font-heading text-xl font-bold md:text-3xl">
              {title}
            </h2>
            <p className="mx-auto mt-2 max-w-prose text-sm md:text-base">
              {subtitle}
            </p>
          </div>
        </div>
      ) : (
        <> </>
      )}
    </section>
  )
}

export default PageJumbotron
