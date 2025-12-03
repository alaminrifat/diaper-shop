import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-stone-100 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10 mb-16">
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="text-xl font-semibold tracking-tighter text-stone-900 block mb-6">
              NUZZLE
            </Link>
            <p className="text-sm text-stone-500 mb-6 max-w-xs">
              Designing the future of baby care with sustainable materials and unmatched softness.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-stone-50 flex items-center justify-center text-stone-600 hover:bg-stone-100 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-stone-50 flex items-center justify-center text-stone-600 hover:bg-stone-100 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-stone-50 flex items-center justify-center text-stone-600 hover:bg-stone-100 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-sm text-stone-900 mb-4">Shop</h4>
            <ul className="space-y-3 text-sm text-stone-500">
              <li>
                <Link href="#" className="hover:text-stone-900 transition-colors">
                  Diapers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-stone-900 transition-colors">
                  Wipes
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-stone-900 transition-colors">
                  Bundles
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-stone-900 transition-colors">
                  Gift Cards
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm text-stone-900 mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-stone-500">
              <li>
                <Link href="#" className="hover:text-stone-900 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-stone-900 transition-colors">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-stone-900 transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-stone-900 transition-colors">
                  Press
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm text-stone-900 mb-4">Support</h4>
            <ul className="space-y-3 text-sm text-stone-500">
              <li>
                <Link href="#" className="hover:text-stone-900 transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-stone-900 transition-colors">
                  Sizing Guide
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-stone-900 transition-colors">
                  Returns
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-stone-900 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-stone-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-400">
          <p>© 2024 Nuzzle Care Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-stone-600">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-stone-600">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

