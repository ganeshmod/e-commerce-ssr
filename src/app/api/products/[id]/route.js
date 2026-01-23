import products from "@/data/product";

export async function GET(request, { params }) {
  const resolvedParams = await params;
  const id = resolvedParams.id;
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
