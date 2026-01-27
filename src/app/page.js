import dynamic from "next/dynamic"
import products from "@/data/product"
const Filter=dynamic(()=>import("@/components/Filter"))
const Header =dynamic(()=>import("@/components/Header"))
const ProductCard = dynamic(
  () => import("@/components/ProductCard")
 
);
const Footer =dynamic(()=>import("@/components/Footer"))

export default async function Home({ searchParams }) {
  // Step 4.1: Extract search params
  console.log( typeof searchParams);
  const paramss = await searchParams;
    
  
  const search = paramss.search || "";
  
  const category = paramss.category || "";
  const sort = paramss.sort || "";

  // Step 4.2: Build query string for API call
  const params = new URLSearchParams();
  if (search) params.set('search', search);
  if (category) params.set('category', category);
  if (sort) params.set('sort', sort);

  // Step 4.3: Call your fake backend API (server-side)
  // In Next.js, you can use absolute URL for server-side fetch
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  const apiUrl = `${baseUrl}/api/products?${params.toString()}`;
  
  let filteredProducts = [...products];
  
  try {
    const response = await fetch(apiUrl, {
      // Important: no-store ensures fresh data on each request
      cache: 'no-store',
      // For server-side fetch in Next.js 13+, you might need headers
      headers: {
        'Content-Type': 'application/json',
      },
    }

  );
    
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    
    filteredProducts = await response.json();
  } catch (error) {
    console.error('Error fetching products:', error);
    // Fallback: import products directly if API fails
    const products = (await import("@/data/product")).default;
    filteredProducts = products;
  }

  return (
    <>
      <Header />
      {/* Step 4.4: Add Filter component */}
      <Filter />
      
      
      {/* Step 4.5: Display products or empty state */}
      {filteredProducts.length > 0 ? (
        <ProductCard products={filteredProducts} />
      ) : (
        <div className="max-w-7xl mx-auto p-3 py-5">
          <p className="text-center text-gray-600 text-lg">
            No products found matching your criteria.
          </p>
        </div>
      )}
      
      {/* Footer */}
      <Footer/>
    </>
  );
}