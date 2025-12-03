"use client"

import Link from 'next/link'
import Image from 'next/image'

interface ProductCardProps {
  id: string
  name: string
  level: string
  price: number
  image: string
  badges?: Array<{
    text: string
    color: 'new' | 'stock' | 'low'
  }>
  variant?: 'default' | 'compact'
}

export default function ProductCard({
  id,
  name,
  level,
  price,
  image,
  badges = [],
  variant = 'default'
}: ProductCardProps) {
  const badgeColors = {
    new: 'bg-[#1a1a1a]',
    stock: 'bg-emerald-500',
    low: 'bg-stone-500'
  }

  if (variant === 'compact') {
    return (
      <div className="group flex flex-col gap-4">
        <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg bg-[#F5F5F5]">
          {badges.length > 0 && (
            <div className="absolute left-3 top-3 z-10 flex flex-col gap-1.5">
              {badges.map((badge, idx) => (
                <span
                  key={idx}
                  className={`inline-flex items-center rounded-sm ${badgeColors[badge.color]} px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white shadow-sm`}
                >
                  {badge.text}
                </span>
              ))}
            </div>
          )}
          <div className="flex h-full w-full items-center justify-center p-6">
            <Link href={`/products/${id}`}>
              <img
                src={image}
                className="transition-transform duration-500 group-hover:scale-105 mix-blend-multiply w-full h-full object-cover drop-shadow-md cursor-pointer"
                alt={name}
              />
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <span className="text-xs font-medium text-stone-500 uppercase tracking-widest">
            {level}
          </span>
          <div className="flex flex-col gap-3">
            <div className="flex items-end justify-between">
              <h3 className="font-medium text-stone-900">{name}</h3>
              <span className="text-xl font-semibold tracking-tight text-stone-900">
                ${price.toFixed(2)}
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <Link
                href={`/products/${id}`}
                className="flex uppercase transition-all hover:bg-stone-50 hover:border-stone-300 focus:ring-2 focus:ring-stone-900 focus:ring-offset-2 text-xs font-medium text-stone-900 tracking-wide bg-transparent w-full border-stone-200 border rounded-md pt-2.5 pr-2 pb-2.5 pl-2 items-center justify-center"
              >
                Details
              </Link>
              <button className="flex gap-2 uppercase transition-all hover:bg-stone-800 focus:ring-2 focus:ring-stone-900 focus:ring-offset-2 hover:shadow-lg text-xs font-medium text-white tracking-wide bg-stone-900 w-full rounded-md pt-2.5 pr-2 pb-2.5 pl-2 gap-x-2 gap-y-2 items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
                  <path d="M3 6h18"></path>
                  <path d="M16 10a4 4 0 0 1-8 0"></path>
                </svg>
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="group flex flex-col hover:shadow-[0_8px_25px_-5px_rgba(0,0,0,0.1),0_10px_10px_-5px_rgba(0,0,0,0.04)] transition-all duration-300 bg-white border-stone-100/60 border rounded-xl pt-3 pr-3 pb-3 pl-3 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
      <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-stone-50 mb-4">
        {badges.length > 0 && (
          <div className="absolute left-3 top-3 z-10 flex flex-col items-start gap-1">
            {badges.map((badge, idx) => (
              <span
                key={idx}
                className={`inline-flex items-center rounded-sm ${badgeColors[badge.color]} px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-sm`}
              >
                {badge.text}
              </span>
            ))}
          </div>
        )}
        <Link href={`/products/${id}`}>
          <img
            src={image}
            className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover cursor-pointer"
            alt={name}
          />
        </Link>
      </div>

      <div className="flex flex-col px-1 pb-1">
        <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-1.5">
          {level}
        </span>
        <div className="flex items-end justify-between mb-5">
          <h3 className="font-semibold text-stone-900 text-base leading-tight">{name}</h3>
          <span className="font-bold text-stone-900 text-lg">${price.toFixed(2)}</span>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <Link
            href={`/products/${id}`}
            className="flex items-center justify-center py-2.5 rounded border border-stone-200 bg-white text-[11px] font-bold text-stone-900 uppercase tracking-wider hover:border-stone-900 hover:bg-stone-50 transition-colors"
          >
            Details
          </Link>
          <button className="flex gap-2 text-[11px] uppercase hover:bg-black transition-colors font-bold text-white tracking-wider bg-[#1a1a1a] rounded pt-2.5 pb-2.5 shadow-sm gap-x-2 gap-y-2 items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-3.5 h-3.5"
            >
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
              <path d="M3 6h18"></path>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
            Add
          </button>
        </div>
      </div>
    </div>
  )
}

