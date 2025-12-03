"use client"

export default function FilterSidebar() {
  return (
    <aside className="hidden lg:block space-y-10">
      {/* Price Range */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold text-stone-900">Price Range</h3>
          <span className="text-sm font-medium text-stone-500">$12 - $24</span>
        </div>
        <div className="relative h-1.5 w-full rounded-full bg-stone-200">
          <div className="absolute left-[0%] right-[30%] top-0 bottom-0 rounded-full bg-indigo-500"></div>
          <div className="absolute left-[0%] top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white border-[1.5px] border-indigo-500 rounded-full shadow-sm cursor-pointer hover:scale-110 transition-transform"></div>
          <div className="absolute right-[30%] top-1/2 translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white border-[1.5px] border-indigo-500 rounded-full shadow-sm cursor-pointer hover:scale-110 transition-transform"></div>
        </div>
        <div className="flex justify-between text-xs text-stone-400 mt-2">
          <span>$0</span>
          <span>$50+</span>
        </div>
      </div>

      {/* Category */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-stone-900">Category</h3>
        <div className="space-y-3">
          <label className="flex items-center gap-3 cursor-pointer group">
            <div className="relative">
              <input type="checkbox" className="peer sr-only" defaultChecked />
              <div className="w-5 h-5 border border-stone-300 rounded bg-white peer-checked:bg-indigo-500 peer-checked:border-indigo-500 transition-all flex items-center justify-center">
                <svg
                  className="w-3.5 h-3.5 text-white hidden peer-checked:block pointer-events-none"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="3"
                >
                  <path d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
            </div>
            <span className="text-sm text-stone-600 group-hover:text-stone-900">Tape Diapers</span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer group">
            <div className="relative">
              <input type="checkbox" className="peer sr-only" />
              <div className="w-5 h-5 border border-stone-300 rounded bg-white peer-checked:bg-indigo-500 peer-checked:border-indigo-500 transition-all flex items-center justify-center">
                <svg
                  className="w-3.5 h-3.5 text-white hidden peer-checked:block pointer-events-none"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="3"
                >
                  <path d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
            </div>
            <span className="text-sm text-stone-600 group-hover:text-stone-900">Panty Diapers</span>
          </label>
        </div>
      </div>

      {/* Size */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-stone-900">Size</h3>
        <div className="space-y-3">
          {[
            { level: 1, range: '2-5 kg' },
            { level: 2, range: '3-6 kg', checked: true },
            { level: 3, range: '4-9 kg' },
            { level: 4, range: '7-12 kg' },
            { level: 5, range: '11-16 kg' },
            { level: 6, range: '15+ kg' }
          ].map((size) => (
            <label key={size.level} className="flex items-center gap-3 cursor-pointer group">
              <div className="relative">
                <input type="checkbox" className="peer sr-only" defaultChecked={size.checked} />
                <div className="w-5 h-5 border border-stone-300 rounded bg-white peer-checked:bg-indigo-500 peer-checked:border-indigo-500 transition-all flex items-center justify-center">
                  <svg
                    className="w-3.5 h-3.5 text-white hidden peer-checked:block pointer-events-none"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="3"
                  >
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
              </div>
              <span className="text-sm text-stone-600 group-hover:text-stone-900">
                Level {size.level}{' '}
                <span className="text-stone-400 text-xs ml-1">{size.range}</span>
              </span>
            </label>
          ))}
        </div>
      </div>
    </aside>
  )
}

