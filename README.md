# Nuzzle - Diaper Shop

A modern e-commerce website for baby diapers built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, responsive design with smooth animations
- **Next.js App Router**: Using the latest App Router architecture
- **TypeScript**: Full type safety throughout the application
- **Tailwind CSS**: Utility-first styling for rapid UI development
- **Server Components**: Optimized performance with React Server Components
- **Dynamic Routes**: Product details and order tracking with dynamic routing

## 📁 Project Structure

```
diaper-shop/
├── app/
│   ├── page.tsx                    # Home page
│   ├── products/
│   │   ├── page.tsx               # All products listing
│   │   └── [id]/page.tsx          # Product details (dynamic)
│   ├── cart/
│   │   └── page.tsx               # Shopping cart
│   ├── checkout/
│   │   └── page.tsx               # Checkout & payment
│   ├── orders/
│   │   └── [id]/page.tsx          # Order tracking (dynamic)
│   ├── layout.tsx                 # Root layout
│   └── globals.css                # Global styles
├── components/
│   ├── Layout/
│   │   ├── Navigation.tsx         # Header navigation
│   │   └── Footer.tsx             # Footer component
│   └── Products/
│       ├── ProductCard.tsx        # Product card component
│       └── FilterSidebar.tsx      # Filters sidebar
├── public/
│   └── assets/                    # Static assets (images, icons)
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── next.config.js
└── README.md
```

## 🎨 Pages

### 1. Home Page (`/`)
- Hero section with call-to-action
- Feature highlights (Eco-Friendly, Hypoallergenic, Overnight Absorbency)
- Featured products carousel
- Responsive design

### 2. Products Page (`/products`)
- Product grid with filtering
- Sidebar filters (Price Range, Category, Size)
- Active filter tags
- Sort functionality
- Pagination

### 3. Product Details (`/products/[id]`)
- Product image gallery with thumbnails
- Size and style selection
- Quantity selector
- Customer reviews section
- Add to cart functionality

### 4. Cart Page (`/cart`)
- Cart items list with quantity controls
- Order summary
- Remove items functionality
- Dynamic price calculation

### 5. Checkout Page (`/checkout`)
- Shipping address form
- Payment gateway placeholder
- Order summary sidebar
- Breadcrumb navigation

### 6. Order Tracking (`/orders/[id]`)
- Order status tracker with progress steps
- Order items display
- User profile sidebar
- Real-time status updates

## 🛠️ Installation & Setup

1. **Install dependencies:**
```bash
npm install
# or
pnpm install
# or
yarn install
```

2. **Run the development server:**
```bash
npm run dev
# or
pnpm dev
# or
yarn dev
```

3. **Open your browser:**
Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🎨 Styling

This project uses:
- **Tailwind CSS** for utility-first styling
- **Custom CSS** in `app/globals.css` for:
  - Font imports (Inter, Playfair Display)
  - Custom scrollbar hiding
  - Checkbox/radio styling
  - Smooth scrolling

## 🔧 Configuration

### Tailwind Config
- Custom font family (Playfair Display)
- Extended theme configuration
- Optimized for production

### Next.js Config
- Image optimization enabled
- External image domains whitelisted:
  - images.unsplash.com
  - hoirqrkdgbmvpwutwuwj.supabase.co

## 🚦 Routes

- `/` - Home page
- `/products` - All products
- `/products/[id]` - Product details (e.g., `/products/1`)
- `/cart` - Shopping cart
- `/checkout` - Checkout page
- `/orders/[id]` - Order tracking (e.g., `/orders/W83921`)

## 🎯 Key Components

### Navigation Component
- Fixed header with backdrop blur
- Responsive menu
- Cart icon with badge
- User account icon

### Footer Component
- Multi-column layout
- Social media links
- Quick navigation links
- Copyright information

### ProductCard Component
- Two variants: default and compact
- Badge support (New, In Stock, Low Stock)
- Hover effects
- Add to cart functionality

### FilterSidebar Component
- Price range slider
- Category checkboxes
- Size filters with weight ranges

## 🎨 Design Features

- **Color Scheme**: Stone/Slate palette with indigo accents
- **Typography**: Inter (body), Playfair Display (headings)
- **Responsive**: Mobile-first design approach
- **Animations**: Smooth transitions and hover effects
- **Accessibility**: Semantic HTML and ARIA labels

## 📝 Notes

- All components use TypeScript for type safety
- Server Components by default, Client Components only where needed
- Images are from Unsplash (placeholder images)
- Payment integration is a placeholder for Stripe/PayPal

## 🔐 Environment Variables

No environment variables are required for the basic setup. Add your own as needed for:
- Payment gateway integration
- Analytics
- API endpoints

## 📄 License

This project is private and proprietary.

## 👥 Support

For issues or questions, please contact the development team.

