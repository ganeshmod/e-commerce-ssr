import products from "@/data/product";

export async function GET(request, { params }) {
  // In Next.js 13+, params might be a Promise - await it
  const resolvedParams = await params;
  const id = resolvedParams.id;
  
  
  
  console.log('API Route - Product ID:', id); 
  
  const product = products.find((item) => item.id === parseInt(id));
  console.log(product)
  
  if (!product) {
    return Response.json(
      { error: "Product not found" },
      { status: 404 }
    );
  }
  
  return Response.json(product);
}
