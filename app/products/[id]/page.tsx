"use client"

import Link from 'next/link'
import { useState } from 'react'
import Navigation from '@/components/Layout/Navigation'
import Footer from '@/components/Layout/Footer'

export default function ProductDetailsPage() {
  const [quantity, setQuantity] = useState(1)
  const [selectedSize, setSelectedSize] = useState('L2')
  const [selectedStyle, setSelectedStyle] = useState('tape')

  return (
    <>
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
            <Link href="/cart">
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
                className="relative text-slate-500 hover:text-slate-900 transition-colors"
              >
                <path d="M16 10a4 4 0 0 1-8 0"></path>
                <path d="M3.103 6.034h17.794"></path>
                <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path>
              </svg>
            </Link>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mr-auto ml-auto pt-8 pr-6 pb-8 pl-6 bg-slate-50">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-xs font-medium text-slate-400 mb-8">
          <Link href="/" className="hover:text-slate-900 transition-colors">
            Home
          </Link>
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
            className="w-3 h-3"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg>
          <Link href="/products" className="hover:text-slate-900 transition-colors">
            Shop
          </Link>
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
            className="w-3 h-3"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg>
          <span className="text-slate-900">Wicombus Gentle Fit - Size 2</span>
        </nav>

        {/* Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 gap-x-12 gap-y-12">
          {/* Left: Gallery */}
          <div className="space-y-6">
            {/* Main Image */}
            <div className="aspect-square w-full bg-slate-100 rounded-2xl overflow-hidden border border-slate-100 shadow-sm relative group">
              <img
                src="https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=1200&q=90"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                alt="Wicombus Gentle Fit"
              />
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-3 gap-4">
              <button className="aspect-square rounded-xl overflow-hidden border-2 border-indigo-600 ring-2 ring-indigo-100 relative">
                <img
                  src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"
                  className="w-full h-full object-cover"
                  alt="Detail 1"
                />
              </button>
              <button className="aspect-square rounded-xl overflow-hidden border border-slate-200 hover:border-slate-300 transition-colors">
                <img
                  src="https://images.unsplash.com/photo-1519689680058-324335c77eba?w=400&q=80"
                  className="w-full h-full object-cover"
                  alt="Detail 2"
                />
              </button>
              <button className="aspect-square rounded-xl overflow-hidden border border-slate-200 hover:border-slate-300 transition-colors">
                <img
                  src="https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=400&q=80"
                  className="w-full h-full object-cover"
                  alt="Detail 3"
                />
              </button>
            </div>
          </div>

          {/* Right: Details */}
          <div className="flex flex-col pt-2">
            <div className="flex items-center justify-between mb-4">
              <span className="inline-flex items-center px-2.5 py-1 rounded bg-emerald-100 text-emerald-700 text-[10px] font-bold uppercase tracking-wider">
                In Stock
              </span>
              <div className="flex items-center gap-1.5 text-sm">
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
                  className="w-4 h-4 text-amber-400 fill-amber-400"
                >
                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                </svg>
                <span className="font-semibold text-slate-900">4.9</span>
                <a href="#reviews" className="text-indigo-600 hover:text-indigo-700 underline decoration-indigo-200 underline-offset-2">
                  See 150 reviews
                </a>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-playfair text-slate-900 mb-4 tracking-tight">
              Wicombus Gentle Fit
            </h1>

            <div className="text-3xl font-playfair text-slate-900 mb-6">$12.99</div>

            <div className="prose prose-slate text-slate-500 mb-8 leading-relaxed">
              <p className="mb-4">
                Our Gentle Fit diapers are designed for active babies who need flexibility and maximum
                leak protection. Made with 100% plant-based inner liners.
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm marker:text-slate-300">
                <li>12-hour leak protection</li>
                <li>Wetness indicator line</li>
                <li>Hypoallergenic & fragrance-free</li>
              </ul>
            </div>

            {/* Style Type */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-semibold text-slate-900">Select Style</span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <label className="cursor-pointer group">
                  <input
                    type="radio"
                    name="style"
                    className="peer sr-only"
                    checked={selectedStyle === 'tape'}
                    onChange={() => setSelectedStyle('tape')}
                  />
                  <div className="h-16 rounded-lg border border-slate-200 bg-white flex flex-col items-center justify-center gap-0.5 hover:border-slate-300 transition-all peer-checked:border-indigo-500 peer-checked:bg-indigo-50">
                    <span className="text-sm font-semibold text-slate-900 group-hover:text-slate-900">
                      Tape
                    </span>
                    <span className="text-[10px] text-slate-400">Adjustable fit</span>
                  </div>
                </label>

                <label className="cursor-pointer group">
                  <input
                    type="radio"
                    name="style"
                    className="peer sr-only"
                    checked={selectedStyle === 'pants'}
                    onChange={() => setSelectedStyle('pants')}
                  />
                  <div className="h-16 rounded-lg border border-slate-200 bg-white flex flex-col items-center justify-center gap-0.5 hover:border-slate-300 transition-all peer-checked:border-indigo-500 peer-checked:bg-indigo-50">
                    <span className="text-sm font-semibold text-slate-900">Pants</span>
                    <span className="text-[10px] text-slate-400">Easy pull-up</span>
                  </div>
                </label>
              </div>
            </div>

            {/* Sizes */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-semibold text-slate-900">Select Size</span>
                <button className="text-xs text-indigo-600 hover:text-indigo-700 underline decoration-indigo-200 underline-offset-2">
                  Size Guide
                </button>
              </div>

              <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
                {[
                  { level: 'L1', range: '2-5kg' },
                  { level: 'L2', range: '3-6kg' },
                  { level: 'L3', range: '4-9kg' },
                  { level: 'L4', range: '7-12kg' },
                  { level: 'L5', range: '11-16kg' },
                  { level: 'L6', range: '15+kg' }
                ].map((size) => (
                  <label key={size.level} className="cursor-pointer group">
                    <input
                      type="radio"
                      name="size"
                      className="peer sr-only"
                      checked={selectedSize === size.level}
                      onChange={() => setSelectedSize(size.level)}
                    />
                    <div className="h-16 rounded-lg border border-slate-200 bg-white flex flex-col items-center justify-center gap-0.5 hover:border-slate-300 transition-all peer-checked:border-indigo-500 peer-checked:bg-indigo-50">
                      <span className="text-sm font-semibold text-slate-900">{size.level}</span>
                      <span className="text-[10px] text-slate-400">{size.range}</span>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4">
              <div className="flex items-center border border-slate-200 rounded-lg bg-white h-12">
                <button
                  className="px-4 h-full text-slate-500 hover:text-slate-900 transition-colors"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  -
                </button>
                <span className="w-8 text-center text-sm font-semibold text-slate-900">{quantity}</span>
                <button
                  className="px-4 h-full text-slate-500 hover:text-slate-900 transition-colors"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
              </div>
              <Link
                href="/cart"
                className="flex-1 hover:bg-black transition-colors shadow-slate-200 text-sm font-semibold text-white bg-slate-900 h-12 rounded-lg shadow-lg flex items-center justify-center"
              >
                Add to Cart
              </Link>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="border-slate-200 border-t mt-24 pt-12" id="reviews">
          <h2 className="text-3xl font-playfair text-slate-900 mb-12">Customer Reviews</h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Ratings Stats */}
            <div className="lg:col-span-4 space-y-8">
              <div>
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-6xl font-playfair text-slate-900">4.9</span>
                  <div className="flex text-amber-400">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-4 h-4 fill-amber-400"
                      >
                        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-sm text-slate-500">Based on 150 reviews</p>
              </div>

              <div className="space-y-4">
                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-medium">
                    <span className="text-slate-700">Rash Free</span>
                    <span className="text-emerald-600">98%</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500 rounded-full w-[98%]"></div>
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-medium">
                    <span className="text-slate-700">Leak Protection</span>
                    <span className="text-emerald-600">95%</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500 rounded-full w-[95%]"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Reviews List */}
            <div className="lg:col-span-8 space-y-10">
              {/* Review 1 */}
              <div className="border-b border-slate-100 pb-8 last:border-0 last:pb-0">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-slate-900">Best diapers ever!</h3>
                  <span className="text-xs text-slate-400">2 days ago</span>
                </div>
                <div className="flex text-amber-400 mb-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-3.5 h-3.5 fill-amber-400"
                    >
                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-slate-600 leading-relaxed mb-3">
                  We switched from a major brand because our son kept getting rashes. Within 2 days of using
                  Wicombus, his skin cleared up completely. The softness is unmatched.
                </p>
                <p className="text-xs text-slate-400 font-medium">Review by Sarah M.</p>
              </div>

              {/* Review 2 */}
              <div className="border-b border-slate-100 pb-8 last:border-0 last:pb-0">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-slate-900">Survived the night</h3>
                  <span className="text-xs text-slate-400">1 week ago</span>
                </div>
                <div className="flex text-amber-400 mb-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-3.5 h-3.5 fill-amber-400"
                    >
                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-slate-600 leading-relaxed mb-3">
                  No leaks for 10 hours straight. Highly recommend specifically for night time use. The fit is
                  snug but not tight.
                </p>
                <p className="text-xs text-slate-400 font-medium">Review by Mike T.</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}

