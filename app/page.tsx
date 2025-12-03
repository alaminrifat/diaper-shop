import Link from 'next/link'
import Navigation from '@/components/Layout/Navigation'
import Footer from '@/components/Layout/Footer'
import ProductCard from '@/components/Products/ProductCard'

export default function HomePage() {
  const featuredProducts = [
    {
      id: '1',
      name: 'Newborn Gentle',
      level: 'Level 1',
      price: 24.0,
      image: 'https://images.unsplash.com/photo-1544268211-ba72491bf350?w=800&q=80',
      badges: [
        { text: 'New Arrival', color: 'new' as const },
        { text: 'In Stock', color: 'stock' as const }
      ]
    },
    {
      id: '4',
      name: 'Active Crawler',
      level: 'Level 4',
      price: 28.0,
      image: 'https://images.unsplash.com/photo-1496458857386-d2388f1c03e8?w=800&q=80',
      badges: [{ text: 'In Stock', color: 'stock' as const }]
    },
    {
      id: '5',
      name: 'Toddler Pants',
      level: 'Level 5',
      price: 32.0,
      image: 'https://images.unsplash.com/photo-1615495631054-d32f7f6a7b31?w=800&q=80',
      badges: [{ text: 'In Stock', color: 'stock' as const }]
    },
    {
      id: '6',
      name: 'Toddler Pants',
      level: 'Level 5',
      price: 32.0,
      image: 'https://images.unsplash.com/photo-1504151806752-5b3af8e39e4e?w=800&q=80',
      badges: [{ text: 'Low Stock', color: 'low' as const }]
    }
  ]

  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <header className="relative w-full h-[85vh] min-h-[600px] flex flex-col items-center justify-center overflow-hidden bg-stone-900">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=2070&auto=format&fit=crop"
            alt="Baby sleeping comfortably"
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-stone-900/30 backdrop-blur-[1px]"></div>
          <div className="overflow-hidden flex bg-gradient-to-b from-stone-900/60 via-transparent to-stone-900/40 absolute top-0 right-0 bottom-0 left-0 items-center justify-center"></div>
        </div>

        {/* Main Content Container */}
        <div className="z-10 flex flex-col text-center w-full max-w-5xl mr-auto ml-auto pt-20 pr-6 pl-6 relative items-center justify-center">
          {/* Offer Message Badge */}
          <div className="mb-10 animate-fade-in">
            <div className="inline-flex gap-3 text-stone-900 bg-white border-white border rounded-full pt-2 pr-5 pb-2 pl-5 shadow-lg backdrop-blur-md gap-x-3 gap-y-3 items-center">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
              </span>
              <span className="uppercase text-xs font-medium tracking-widest">
                Holiday Collection • Free Shipping Over $50
              </span>
            </div>
          </div>

          {/* Hero Title */}
          <h1 className="sm:text-7xl lg:text-8xl leading-[0.95] text-5xl text-white tracking-tight font-playfair pb-16 drop-shadow-xl">
            Softness for every{' '}
            <span className="font-light italic text-stone-200">little wiggle.</span>
          </h1>

          {/* Hero Description */}
          <p className="hidden sm:block sm:text-xl leading-relaxed text-lg font-light text-stone-100 opacity-90 max-w-2xl mb-12 drop-shadow-md">
            Engineered for sensitive skin with 100% plant-based materials. The driest, softest hug
            your baby will ever feel, day or night.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link
              href="/products"
              className="uppercase hover:bg-stone-100 transition-all hover:shadow-2xl hover:-translate-y-0.5 min-w-[180px] text-sm font-semibold text-stone-900 tracking-widest bg-white rounded-sm pt-4 pr-10 pb-4 pl-10 shadow-xl text-center"
            >
              Shop Diapers
            </Link>
          </div>
        </div>
      </header>

      {/* Why Choose Us */}
      <section className="border-y bg-white border-stone-100 pt-20 pb-12">
        <div className="max-w-7xl mr-auto mb-1 ml-auto pr-6 pl-6">
          <div className="mb-16">
            <h2 className="text-3xl font-semibold text-stone-900 tracking-tight font-playfair">
              Why parents choose Nuzzle
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 gap-x-8 gap-y-8">
            {/* Feature 1 */}
            <div className="hover:border-stone-200 transition-colors bg-stone-50 border-stone-100 border rounded-3xl pt-8 pr-8 pb-8 pl-8">
              <div className="flex text-emerald-600 bg-emerald-100 w-12 h-12 border-emerald-200 border rounded-2xl mb-6 shadow-sm items-center justify-center">
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
                >
                  <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
                  <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-stone-900 mb-2">Eco-Friendly Materials</h3>
              <p className="text-sm text-stone-500 leading-relaxed">
                Made with sustainably sourced bamboo and free from harmful chemicals, chlorine, and
                fragrances.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-8 rounded-3xl bg-stone-50 border border-stone-100 hover:border-stone-200 transition-colors">
              <div className="w-12 h-12 bg-sky-100 rounded-2xl border border-sky-200 flex items-center justify-center text-sky-600 mb-6 shadow-sm">
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
                  className="w-6 h-6"
                >
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-stone-900 mb-2">Hypoallergenic Safe</h3>
              <p className="text-sm text-stone-500 leading-relaxed">
                Dermatologically tested and approved for sensitive newborn skin. Zero rash guarantee.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-8 rounded-3xl bg-stone-50 border border-stone-100 hover:border-stone-200 transition-colors">
              <div className="w-12 h-12 bg-violet-100 rounded-2xl border border-violet-200 flex items-center justify-center text-violet-600 mb-6 shadow-sm">
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
                  className="w-6 h-6"
                >
                  <path d="M12 6v6l4 2"></path>
                  <circle cx="12" cy="12" r="10"></circle>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-stone-900 mb-2">Overnight Absorbency</h3>
              <p className="text-sm text-stone-500 leading-relaxed">
                Patented core technology locks away moisture for up to 12 hours of uninterrupted
                sleep.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Listing */}
      <section className="pt-12 pr-6 pb-24 pl-6 bg-stone-50">
        <div className="max-w-7xl mr-auto ml-auto">
          <div className="flex mb-12 items-center justify-between">
            <h2 className="text-3xl font-semibold text-stone-900 tracking-tight font-playfair">
              Essential Comfort
            </h2>
            <Link
              href="/products"
              className="group flex items-center gap-2 hover:text-stone-900 transition-colors text-sm font-medium text-stone-500"
            >
              See All Products
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
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 gap-x-6 gap-y-10">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} variant="compact" />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

