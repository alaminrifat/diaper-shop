import Link from 'next/link'

export default function CheckoutPage() {
  return (
    <div className="flex flex-col min-h-screen text-slate-900 bg-slate-50">
      {/* Navigation */}
      <nav className="sticky top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between relative">
          <Link href="/" className="uppercase text-xl font-bold text-slate-900 tracking-wide">
            Nuzzle
          </Link>

          <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-10">
            <Link href="/products" className="hover:text-slate-900 transition-colors text-sm font-medium text-slate-500">
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
                2
              </span>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content: Checkout */}
      <main className="flex-grow w-full max-w-7xl mr-auto ml-auto pt-16 pr-6 pb-16 pl-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Column: Forms */}
          <div className="lg:col-span-7 space-y-12">
            {/* Breadcrumb */}
            <nav className="flex items-center text-sm font-medium">
              <Link href="/products/1" className="hover:text-slate-900 transition-colors text-slate-500">
                Product Details
              </Link>
              <span className="mx-2 text-slate-300">/</span>
              <Link href="/cart" className="hover:text-slate-900 transition-colors text-slate-500">
                Cart
              </Link>
              <span className="mx-2 text-slate-300">/</span>
              <span className="text-slate-900">Checkout</span>
            </nav>

            {/* Shipping Address Section */}
            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-6 tracking-tight">Shipping Address</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-1">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3.5 text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all shadow-sm"
                  />
                </div>
                <div className="col-span-1">
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3.5 text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all shadow-sm"
                  />
                </div>
                <div className="col-span-2">
                  <input
                    type="text"
                    placeholder="Address"
                    className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3.5 text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all shadow-sm"
                  />
                </div>
                <div className="col-span-1">
                  <input
                    type="text"
                    placeholder="City"
                    className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3.5 text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all shadow-sm"
                  />
                </div>
                <div className="col-span-1">
                  <input
                    type="text"
                    placeholder="Zip Code"
                    className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3.5 text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all shadow-sm"
                  />
                </div>
              </div>
            </div>

            {/* Payment Method Section */}
            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-6 tracking-tight">Payment Method</h2>

              <div className="w-full border-2 border-dashed border-slate-200 rounded-xl p-10 flex flex-col items-center justify-center text-center bg-slate-50/50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-slate-400 mb-3"
                >
                  <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                  <line x1="2" x2="22" y1="10" y2="10"></line>
                </svg>
                <p className="text-slate-600 font-medium text-sm">Secure Payment Gateway</p>
                <p className="text-slate-400 text-xs mt-1">Stripe / PayPal integration placeholder</p>
              </div>
            </div>

            {/* CTA Button */}
            <Link
              href="/orders/W83921"
              className="hover:bg-[#4338ca] shadow-indigo-500/20 hover:shadow-indigo-500/30 transition-all transform hover:-translate-y-0.5 duration-200 text-base font-semibold text-white bg-[#4F46E5] w-full rounded-xl pt-4 pb-4 shadow-lg block text-center"
            >
              Pay $30.78 & Place Order
            </Link>
          </div>

          {/* Right Column: Cart Summary */}
          <div className="lg:col-span-5">
            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm sticky top-28">
              <h3 className="text-base font-medium text-slate-900 mb-6">In Your Cart</h3>

              <div className="space-y-6">
                {/* Item 1 */}
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 rounded-lg bg-slate-100 overflow-hidden flex-shrink-0 relative">
                    <img
                      src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=200&q=80"
                      className="w-full h-full object-cover mix-blend-multiply opacity-90"
                      alt="Gentle Fit"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-medium text-slate-900 truncate">Gentle Fit</h4>
                    <p className="text-xs text-slate-500 mt-0.5">Qty: 1</p>
                  </div>
                  <div className="text-sm font-semibold text-slate-900">$12.99</div>
                </div>

                {/* Item 2 */}
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 rounded-lg bg-slate-100 overflow-hidden flex-shrink-0 relative">
                    <img
                      src="https://images.unsplash.com/photo-1620121692029-d088224ddc74?w=200&q=80"
                      className="w-full h-full object-cover mix-blend-multiply opacity-90"
                      alt="Night Safe"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-medium text-slate-900 truncate">Night Safe</h4>
                    <p className="text-xs text-slate-500 mt-0.5">Qty: 1</p>
                  </div>
                  <div className="text-sm font-semibold text-slate-900">$14.99</div>
                </div>
              </div>

              <div className="border-t border-slate-100 mt-8 pt-6">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-slate-900">Total due</span>
                  <span className="font-bold text-lg text-slate-900 tracking-tight">$30.78</span>
                </div>
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

