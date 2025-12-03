"use client"

import Link from 'next/link'
import { useState } from 'react'

export default function CartPage() {
  const [quantity1, setQuantity1] = useState(1)
  const [quantity2, setQuantity2] = useState(1)

  const subtotal = 12.99 * quantity1 + 14.99 * quantity2
  const tax = subtotal * 0.1
  const total = subtotal + tax

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
                2
              </span>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content: Cart */}
      <main className="flex-grow w-full max-w-7xl mr-auto ml-auto pt-12 pr-6 pb-12 pl-6">
        {/* Header with Back Arrow */}
        <div className="flex items-center justify-center md:justify-start gap-3 mb-10">
          <Link
            href="/products/1"
            className="-ml-2 hover:text-slate-900 hover:bg-slate-100 transition-all duration-200 group text-slate-400 rounded-full pt-2 pr-2 pb-2 pl-2"
            aria-label="Go back"
          >
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
              className="group-hover:-translate-x-0.5 transition-transform w-[24px] h-[24px]"
            >
              <path d="m12 19-7-7 7-7"></path>
              <path d="M19 12H5"></path>
            </svg>
          </Link>
          <h1 className="text-4xl font-playfair text-slate-900 tracking-tight">Your Cart (2)</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Cart Items List */}
          <div className="lg:col-span-8 space-y-6">
            {/* Item 1 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col sm:flex-row gap-6 group hover:border-slate-200 transition-all">
              <div className="w-full sm:w-32 aspect-square sm:h-32 rounded-xl overflow-hidden bg-slate-100 flex-shrink-0 relative">
                <img
                  src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80"
                  className="w-full h-full object-cover mix-blend-multiply opacity-90"
                  alt="Gentle Fit Diapers"
                />
                <div className="absolute inset-0 bg-indigo-900/20 mix-blend-overlay"></div>
              </div>

              <div className="flex-1 flex flex-col justify-between">
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <h3 className="font-medium text-slate-900 text-lg">Gentle Fit Diapers</h3>
                    <p className="text-slate-500 text-sm mt-1">Size 2 (3-6kg) • 32 Count</p>
                  </div>
                  <p className="font-semibold text-slate-900">${(12.99 * quantity1).toFixed(2)}</p>
                </div>

                <div className="flex justify-between items-end mt-6 sm:mt-0">
                  <div className="flex items-center border border-slate-200 rounded-lg h-10 bg-white">
                    <button
                      className="px-3 h-full text-slate-400 hover:text-slate-900 transition-colors flex items-center justify-center w-10 hover:bg-slate-50 rounded-l-lg"
                      onClick={() => setQuantity1(Math.max(1, quantity1 - 1))}
                    >
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
                        <path d="M5 12h14"></path>
                      </svg>
                    </button>
                    <span className="text-sm font-medium w-8 text-center text-slate-900">{quantity1}</span>
                    <button
                      className="px-3 h-full text-slate-400 hover:text-slate-900 transition-colors flex items-center justify-center w-10 hover:bg-slate-50 rounded-r-lg"
                      onClick={() => setQuantity1(quantity1 + 1)}
                    >
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
                        <path d="M5 12h14"></path>
                        <path d="M12 5v14"></path>
                      </svg>
                    </button>
                  </div>

                  <button className="text-rose-500 text-sm font-medium hover:text-rose-700 transition-colors">
                    Remove
                  </button>
                </div>
              </div>
            </div>

            {/* Item 2 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col sm:flex-row gap-6 group hover:border-slate-200 transition-all">
              <div className="w-full sm:w-32 aspect-square sm:h-32 rounded-xl overflow-hidden bg-slate-100 flex-shrink-0 relative">
                <img
                  src="https://images.unsplash.com/photo-1620121692029-d088224ddc74?w=800&q=80"
                  className="w-full h-full object-cover mix-blend-multiply opacity-90"
                  alt="Night Protection"
                />
                <div className="absolute inset-0 bg-indigo-900/20 mix-blend-overlay"></div>
              </div>

              <div className="flex-1 flex flex-col justify-between">
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <h3 className="font-medium text-slate-900 text-lg">Night Protection</h3>
                    <p className="text-slate-500 text-sm mt-1">Size 2 (3-6kg) • 28 Count</p>
                  </div>
                  <p className="font-semibold text-slate-900">${(14.99 * quantity2).toFixed(2)}</p>
                </div>

                <div className="flex justify-between items-end mt-6 sm:mt-0">
                  <div className="flex items-center border border-slate-200 rounded-lg h-10 bg-white">
                    <button
                      className="px-3 h-full text-slate-400 hover:text-slate-900 transition-colors flex items-center justify-center w-10 hover:bg-slate-50 rounded-l-lg"
                      onClick={() => setQuantity2(Math.max(1, quantity2 - 1))}
                    >
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
                        <path d="M5 12h14"></path>
                      </svg>
                    </button>
                    <span className="text-sm font-medium w-8 text-center text-slate-900">{quantity2}</span>
                    <button
                      className="px-3 h-full text-slate-400 hover:text-slate-900 transition-colors flex items-center justify-center w-10 hover:bg-slate-50 rounded-r-lg"
                      onClick={() => setQuantity2(quantity2 + 1)}
                    >
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
                        <path d="M5 12h14"></path>
                        <path d="M12 5v14"></path>
                      </svg>
                    </button>
                  </div>

                  <button className="text-rose-500 text-sm font-medium hover:text-rose-700 transition-colors">
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-4">
            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm sticky top-28">
              <h2 className="text-lg font-medium text-slate-900 mb-6">Order Summary</h2>

              <div className="space-y-4 text-sm mb-8">
                <div className="flex justify-between items-center">
                  <span className="text-slate-500">Subtotal</span>
                  <span className="font-medium text-slate-900">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500">Shipping</span>
                  <span className="font-medium text-slate-900">Free</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500">Tax</span>
                  <span className="font-medium text-slate-900">${tax.toFixed(2)}</span>
                </div>
              </div>

              <div className="border-t border-slate-100 pt-6 mb-8">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-lg text-slate-900">Total</span>
                  <span className="font-bold text-xl text-slate-900 tracking-tight">${total.toFixed(2)}</span>
                </div>
              </div>

              <Link
                href="/checkout"
                className="hover:bg-slate-800 transition-all shadow-slate-200 hover:shadow-xl hover:shadow-slate-200/50 transform hover:-translate-y-0.5 duration-200 text-sm font-semibold text-white bg-slate-900 w-full rounded-xl pt-4 pb-4 shadow-lg block text-center"
              >
                Proceed to Checkout
              </Link>
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

