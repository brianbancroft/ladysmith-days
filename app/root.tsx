import './tailwind.css'
import 'react-toastify/dist/ReactToastify.css'
import { useEffect } from 'react'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'
import { ToastContainer } from 'react-toastify'
import {
  type ActionFunctionArgs,
  json,
  type LinksFunction,
  type LoaderFunction,
  redirect,
} from '@remix-run/node'
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useLocation,
} from '@remix-run/react'
import posthog from 'posthog-js'
import Footer from '~/components/Footer'
import Nav from '~/components/Nav'
import DefaultErrorBoundary from '~/components/ui/error-boundary'
import iconsHref from '~/components/ui/icons/sprite.svg?url'
import { getRecaptchaScore } from '~/utils/getRecaptchaScore'
import { sendEmail } from './server/sendEmail.server'

export const links: LinksFunction = () => [
  { rel: 'prefetch', href: iconsHref, as: 'image' },
]

export const loader: LoaderFunction = async () => {
  const environment = process.env.RECAPTCHA_SITE_KEY

  return json({
    ENV: {
      RECAPTCHA_SITE_KEY: environment,
    },
  })
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = new URLSearchParams(await request.text())
  const name = String(formData.get('name'))
  const email = String(formData.get('email'))
  const message = String(formData.get('message'))

  const token = formData.get('_captcha') as string
  const key = process.env.RECAPTCHA_SECRET_KEY as string

  const recaptchaResult = await getRecaptchaScore(token, key)

  if (!recaptchaResult) {
    // your contact form submission code here

    await sendEmail({ name, email, message, page: 'Homepage' })

    return redirect('/?sent=true')
  }

  return json({ message: 'You are a robot!' })
}

export function Layout({ children }: { children: React.ReactNode }) {
  const { ENV } = useLoaderData<typeof loader>()

  if (!ENV) {
    throw new Error('Environment variables are missing')
  }

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <meta
          property="og:image"
          content="https://ladysmithdays.com/images/ladysmith-days-oglarge.png"
        /> */}
        <Meta />
        <Links />
      </head>
      <body suppressHydrationWarning>
        <Nav />
        <ToastContainer />
        <GoogleReCaptchaProvider
          reCaptchaKey={ENV.RECAPTCHA_SITE_KEY}
          scriptProps={{
            async: false,
            defer: true,
            appendTo: 'head',
            nonce: undefined,
          }}
        >
          {children}
        </GoogleReCaptchaProvider>
        <Footer />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function App() {
  const location = useLocation()

  useEffect(() => {
    posthog.capture('$pageview', { $current_url: window.location.href })
  }, [location.pathname])

  return <Outlet />
}

export function ErrorBoundary() {
  return <DefaultErrorBoundary />
}

export function HydrateFallback() {
  return <h1>Loading...</h1>
}
