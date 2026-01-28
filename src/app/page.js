import dynamic from "next/dynamic"
import products from "@/data/product"
const Filter=dynamic(()=>import("@/components/Filter"))
const Header =dynamic(()=>import("@/components/Header"))
const ProductCard = dynamic(
  () => import("@/components/ProductCard")
 
);
const Footer =dynamic(()=>import("@/components/Footer"))

export default  async  function Home({searchParams}) {
  //get the query string form the search params and call the api based on the available data ...
  const paramss = await searchParams;
  console.log(paramss)  
  
  const search = paramss.search || "";
  
  const category = paramss.category || "";
  const sort = paramss.sort || "";

  //  Build query string for API call
  const params = new URLSearchParams();
  if (search) params.set('search', search);
  if (category) params.set('category', category);
  if (sort) params.set('sort', sort);
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  const apiUrl = `${baseUrl}/api/products?${params.toString()}`;
  
  let filteredProducts = [...products];
  
  try {
    const response = await fetch(apiUrl, {
      cache: 'no-store',
    }

  );
    
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    
    filteredProducts = await response.json();
  } catch (error) {
    console.error('Error fetching products:', error);
// for fallback
    const products = (await import("@/data/product")).default;
    filteredProducts = products;
  }

  return (
    <>
      <Header />
      <Filter />
      {filteredProducts.length > 0 ? (
        <ProductCard products={filteredProducts} />
      ) : (
        <div className="max-w-7xl mx-auto p-3 py-5">
          <p className="text-center text-gray-600 text-lg">
            No products found matching your criteria.
          </p>
        </div>
      )}
      <Footer/>
    </>
  );
}