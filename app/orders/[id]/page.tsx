import Link from 'next/link'

export default function OrderTrackingPage() {
  return (
    <div className="flex flex-col min-h-screen text-slate-900 bg-slate-50">
      {/* Navigation */}
      <nav className="sticky top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between relative">
          <Link href="/" className="uppercase text-xl font-bold text-slate-900 tracking-wide">
            Nuzzle
          </Link>

          <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-10">
            <Link href="/products" className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">
              Shop
            </Link>
            <Link href="#" className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">
              Subscription
            </Link>
            <Link href="#" className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">
              Our Story
            </Link>
          </div>

          <div className="flex items-center gap-6">
            <button className="text-slate-500 hover:text-slate-900 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </button>
            <div className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-slate-900"
              >
                <path d="M16 10a4 4 0 0 1-8 0"></path>
                <path d="M3.103 6.034h17.794"></path>
                <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path>
              </svg>
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-slate-900 text-[10px] text-white font-medium">
                0
              </span>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow max-w-7xl mx-auto px-6 py-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Sidebar */}
          <div className="lg:col-span-3 space-y-8">
            {/* User Profile Summary */}
            <div className="flex items-center gap-4 px-2">
              <div className="h-12 w-12 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-sm font-semibold tracking-tight">
                JD
              </div>
              <div>
                <div className="font-semibold text-slate-900 text-sm">Jane Doe</div>
                <div className="text-slate-500 text-xs">jane@example.com</div>
              </div>
            </div>

            {/* Sidebar Nav */}
            <div className="flex flex-col space-y-2">
              <a href="#" className="flex items-center justify-between px-4 py-3 bg-white border border-slate-200 shadow-sm rounded-lg group">
                <span className="font-medium text-slate-900 text-sm">My Orders</span>
              </a>
              <a href="#" className="flex items-center px-4 py-3 text-slate-500 hover:text-slate-900 transition-colors">
                <span className="font-medium text-sm">Profile Settings</span>
              </a>
              <a href="#" className="flex items-center px-4 py-3 text-slate-500 hover:text-slate-900 transition-colors">
                <span className="font-medium text-sm">Subscriptions</span>
              </a>
              <a href="#" className="flex items-center px-4 py-3 text-slate-500 hover:text-slate-900 transition-colors">
                <span className="font-medium text-sm">Log Out</span>
              </a>
            </div>
          </div>

          {/* Right Column: Order Details */}
          <div className="lg:col-span-9 space-y-10">
            {/* Page Header */}
            <div>
              <h1 className="text-3xl font-playfair text-slate-900 tracking-tight">
                Order <span className="text-slate-300">#</span>W83921
              </h1>
            </div>

            {/* Tracker Card */}
            <div className="bg-white border border-slate-100 rounded-2xl p-8 shadow-sm">
              <div className="relative px-4 py-4">
                {/* Progress Bar Background */}
                <div className="absolute top-[15px] left-0 w-full h-[3px] bg-slate-100 rounded-full -z-0"></div>
                {/* Active Progress Bar (70% width for Shipped state) */}
                <div className="absolute top-[15px] left-0 w-[66%] h-[3px] bg-indigo-500/10 rounded-full -z-0"></div>

                {/* Steps Container */}
                <div className="flex justify-between relative z-10 w-full">
                  {/* Step 1: Confirmed */}
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center ring-4 ring-white mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                    </div>
                    <div className="text-center">
                      <p className="text-sm font-semibold text-slate-900">Confirmed</p>
                      <p className="text-xs text-slate-400 mt-1">Oct 24, 9:00 AM</p>
                    </div>
                  </div>

                  {/* Step 2: Packed */}
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center ring-4 ring-white mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                    </div>
                    <div className="text-center">
                      <p className="text-sm font-semibold text-slate-900">Packed</p>
                      <p className="text-xs text-slate-400 mt-1">Oct 24, 2:00 PM</p>
                    </div>
                  </div>

                  {/* Step 3: Shipped (Active) */}
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-[#6366F1] text-white flex items-center justify-center ring-4 ring-white shadow-lg shadow-indigo-500/30 mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path>
                        <path d="M15 18H9"></path>
                        <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
                        <circle cx="17" cy="18" r="2"></circle>
                        <circle cx="7" cy="18" r="2"></circle>
                      </svg>
                    </div>
                    <div className="text-center">
                      <p className="text-sm font-semibold text-slate-900">Shipped</p>
                      <p className="text-xs text-[#6366F1] font-medium mt-1">In Transit</p>
                    </div>
                  </div>

                  {/* Step 4: Delivered */}
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-slate-200 border-2 border-slate-200 flex items-center justify-center ring-4 ring-white mb-4"></div>
                    <div className="text-center">
                      <p className="text-sm font-medium text-slate-400">Delivered</p>
                      <p className="text-xs text-slate-400 mt-1">Est. Oct 27</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Items List */}
            <div>
              <h3 className="text-base font-semibold text-slate-900 mb-5">Items in this order</h3>

              <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row items-center gap-6">
                {/* Product Image */}
                <div className="h-20 w-20 rounded-lg bg-slate-100 overflow-hidden flex-shrink-0 relative border border-slate-100">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80&fit=crop"
                    className="w-full h-full object-cover grayscale"
                    alt="Gentle Fit"
                  />
                </div>

                {/* Details */}
                <div className="flex-1 w-full sm:w-auto text-center sm:text-left">
                  <h4 className="text-sm font-semibold text-slate-900">Gentle Fit - Size 2</h4>
                  <p className="text-sm text-slate-500 mt-1">Qty: 3</p>
                </div>

                {/* Price */}
                <div className="text-base font-semibold text-slate-900">$38.97</div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-100 pt-20 pb-12 mt-auto">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-24">
            <div className="lg:col-span-2 pr-8">
              <Link href="/" className="text-lg font-semibold tracking-wide text-slate-900 uppercase block mb-5">
                Nuzzle
              </Link>
              <p className="text-sm text-slate-500 leading-relaxed max-w-xs mb-8">
                Designing the future of baby care with sustainable materials and unmatched softness.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-slate-50 hover:bg-slate-100 flex items-center justify-center text-slate-900 transition-colors">
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
                <a href="#" className="w-10 h-10 rounded-full bg-slate-50 hover:bg-slate-100 flex items-center justify-center text-slate-900 transition-colors">
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
                <a href="#" className="w-10 h-10 rounded-full bg-slate-50 hover:bg-slate-100 flex items-center justify-center text-slate-900 transition-colors">
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
              <h4 className="font-medium text-sm text-slate-900 mb-6">Shop</h4>
              <ul className="space-y-4 text-sm text-slate-500">
                <li>
                  <Link href="#" className="hover:text-slate-900 transition-colors">
                    Diapers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-slate-900 transition-colors">
                    Wipes
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-slate-900 transition-colors">
                    Bundles
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-slate-900 transition-colors">
                    Gift Cards
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium text-sm text-slate-900 mb-6">Company</h4>
              <ul className="space-y-4 text-sm text-slate-500">
                <li>
                  <Link href="#" className="hover:text-slate-900 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-slate-900 transition-colors">
                    Sustainability
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-slate-900 transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-slate-900 transition-colors">
                    Press
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium text-sm text-slate-900 mb-6">Support</h4>
              <ul className="space-y-4 text-sm text-slate-500">
                <li>
                  <Link href="#" className="hover:text-slate-900 transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-slate-900 transition-colors">
                    Sizing Guide
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-slate-900 transition-colors">
                    Returns
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-slate-900 transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-slate-400">
            <p>© 2024 Nuzzle Care Inc. All rights reserved.</p>
            <div className="flex gap-8">
              <Link href="#" className="hover:text-slate-600 transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-slate-600 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

