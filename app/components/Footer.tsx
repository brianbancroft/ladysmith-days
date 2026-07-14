import { Link } from '@remix-run/react'

function Footer() {
  return (
    <footer id="footer" className="bg-gray-800 text-gray-50 px-5 py-6">
      <div className="container mx-auto flex flex-col gap-3.5">
        <div className="flex flex-wrap items-center gap-5">
          <span className="font-semibold">Ladysmith Celebrations Society</span>
          <Link
            to="/citizen-of-the-year"
            className="border-b-2 border-gray-500 font-medium hover:border-ld-gold hover:text-ld-gold"
          >
            Community Impact Award
          </Link>
          <Link
            to="/privacy"
            className="border-b-2 border-gray-500 font-medium hover:border-ld-gold hover:text-ld-gold"
          >
            Privacy Policy
          </Link>
        </div>
        <div className="text-center text-xs text-gray-400">
          © {new Date().getFullYear()} Ladysmith Celebration Society
        </div>
      </div>
    </footer>
  )
}

export default Footer
