import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Nuzzle - Premium Care for Little Ones',
  description: 'Designing the future of baby care with sustainable materials and unmatched softness.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased selection:bg-stone-200 selection:text-stone-900 text-stone-900">
        {children}
      </body>
    </html>
  )
}

