import Link from 'next/link'
import Navigation from '@/components/Layout/Navigation'
import Footer from '@/components/Layout/Footer'
import ProductCard from '@/components/Products/ProductCard'
import FilterSidebar from '@/components/Products/FilterSidebar'

export default function ProductsPage() {
  const products = [
    {
      id: '1',
      name: 'Size 1, Gentle Fit',
      level: 'Level 1',
      price: 12.99,
      image: 'https://images.unsplash.com/photo-1544268211-ba72491bf350?w=800&q=80',
      badges: [
        { text: 'New Arrival', color: 'new' as const },
        { text: 'In Stock', color: 'stock' as const }
      ]
    },
    {
      id: '2',
      name: 'Size 2, Night Use',
      level: 'Level 2',
      price: 14.99,
      image: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?w=800&q=80',
      badges: [{ text: 'In Stock', color: 'stock' as const }]
    },
    {
      id: '3',
      name: 'Size 3, Active Fit',
      level: 'Level 3',
      price: 15.99,
      image: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg',
      badges: [{ text: 'In Stock', color: 'stock' as const }]
    },
    {
      id: '4',
      name: 'Size 4, Toddler',
      level: 'Level 4',
      price: 18.99,
      image: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg',
      badges: [{ text: 'Low Stock', color: 'low' as const }]
    },
    {
      id: '5',
      name: 'Size 5, Junior',
      level: 'Level 5',
      price: 22.99,
      image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=800&q=80',
      badges: [{ text: 'In Stock', color: 'stock' as const }]
    },
    {
      id: '6',
      name: 'Size 6, Walker',
      level: 'Level 6',
      price: 24.99,
      image: 'https://images.unsplash.com/photo-1604467794349-0b74285de7e7?w=800&q=80',
      badges: [{ text: 'Low Stock', color: 'low' as const }]
    }
  ]

  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <header className="overflow-hidden bg-gray-100 w-full border-stone-100 border-b pt-28 pb-20 relative">
        <div className="z-20 max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs font-medium text-stone-500 mb-6">
            <Link href="/" className="hover:text-stone-900 transition-colors">
              Home
            </Link>
            <span className="text-stone-300">/</span>
            <span className="text-stone-900">Shop Diapers</span>
          </nav>

          {/* Hero Content */}
          <div className="max-w-xl">
            <h1 className="text-5xl md:text-6xl font-playfair text-stone-900 tracking-tight mb-6">
              All Products
            </h1>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mr-auto ml-auto pt-12 pr-6 pb-12 pl-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 gap-x-12 gap-y-12">
          {/* Sidebar Filters */}
          <FilterSidebar />

          {/* Product Grid Section */}
          <div className="col-span-1 lg:col-span-3">
            {/* Active Filters & Sort */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-stone-200 text-xs font-medium text-stone-600 shadow-sm">
                  Level 2
                  <button className="hover:text-stone-900">
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
                      <path d="M18 6 6 18"></path>
                      <path d="m6 6 12 12"></path>
                    </svg>
                  </button>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-stone-200 text-xs font-medium text-stone-600 shadow-sm">
                  Standard Fit
                  <button className="hover:text-stone-900">
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
                      <path d="M18 6 6 18"></path>
                      <path d="m6 6 12 12"></path>
                    </svg>
                  </button>
                </span>
                <a href="#" className="text-xs font-medium text-indigo-600 hover:text-indigo-700 ml-2">
                  Clear all
                </a>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-sm text-stone-500">Sort by:</span>
                <div className="relative group cursor-pointer">
                  <span className="text-sm font-semibold text-stone-900 flex items-center gap-1">
                    Best Sellers
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
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </span>
                </div>
              </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 gap-x-6 gap-y-6">
              {products.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>

            {/* Pagination Footer */}
            <div className="flex items-center justify-center mt-12 w-full">
              <button className="text-sm font-medium text-stone-400 hover:text-stone-600 mr-6 transition-colors">
                Previous
              </button>
              <div className="flex items-center gap-2">
                <button className="w-9 h-9 flex items-center justify-center rounded-md bg-[#1a1a1a] text-white text-sm font-medium shadow-sm transition-all">
                  1
                </button>
                <button className="w-9 h-9 flex items-center justify-center rounded-md text-stone-500 hover:bg-stone-50 hover:text-stone-900 text-sm font-medium transition-all">
                  2
                </button>
                <button className="w-9 h-9 flex items-center justify-center rounded-md text-stone-500 hover:bg-stone-50 hover:text-stone-900 text-sm font-medium transition-all">
                  3
                </button>
              </div>
              <button className="text-sm font-medium text-stone-900 hover:text-stone-600 ml-6 transition-colors">
                Next
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}

