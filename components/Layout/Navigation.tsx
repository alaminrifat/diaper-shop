"use client"

import Link from 'next/link'
import { useState } from 'react'

export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-stone-50/80 border-b border-stone-200/50">
      <div className="flex h-16 max-w-7xl mx-auto px-6 items-center justify-between relative">
        {/* Logo (Left) */}
        <Link href="/" className="z-10 text-xl font-semibold text-stone-900 tracking-tighter">
          NUZZLE
        </Link>

        {/* Navigation (Centered) */}
        <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-8 text-sm font-medium text-stone-500">
          <Link href="/products" className="hover:text-stone-900 transition-colors">
            Shop
          </Link>
          <Link href="#" className="hover:text-stone-900 transition-colors">
            Subscription
          </Link>
          <Link href="#" className="hover:text-stone-900 transition-colors">
            Our Story
          </Link>
        </div>

        {/* Actions (Right) */}
        <div className="flex items-center gap-4 z-10">
          <button className="p-2 hover:bg-stone-200/50 rounded-full transition-colors text-stone-600">
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
              className="w-5 h-5"
            >
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </button>
          <Link href="/cart" className="relative p-2 hover:bg-stone-200/50 rounded-full transition-colors text-stone-600">
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
              className="w-5 h-5"
            >
              <path d="M16 10a4 4 0 0 1-8 0"></path>
              <path d="M3.103 6.034h17.794"></path>
              <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path>
            </svg>
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-rose-400 rounded-full"></span>
          </Link>
        </div>
      </div>
    </nav>
  )
}

