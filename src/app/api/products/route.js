import products from "@/data/product";
export  async function GET(request){
const url = new URL(request.url);


    const category=url.searchParams.get("category");
    
    const sort=url.searchParams.get("sort");
    const search=url.searchParams.get("search");
    //clone of original data.
    let filteredProducts=[...products];
   
    //search filter
    if(search && search.trim()!==""){
      const searchLower=search.toLowerCase();
      filteredProducts=filteredProducts.filter((item)=>
        item.title.toLowerCase().includes(searchLower)||
      item.description.toLowerCase().includes(searchLower)||
      item.category.toLowerCase().includes(searchLower)
      )
    }
    //category filter
    if(category && category!=="all"){

        filteredProducts=filteredProducts.filter((item)=>item.category === category);
    }
    //sorting
    
    if(sort==="price-low"){
        filteredProducts.sort((a,b)=>a.price-b.price);
    }
    if(sort==="price-high"){
        filteredProducts.sort((a,b)=>b.price-a.price)
    }
    if(sort==="rating"){
        filteredProducts.sort((a, b) => b.rating.rate - a.rating.rate);
    }
    if (sort === "name-asc") {
    filteredProducts.sort((a, b) =>
      a.title.localeCompare(b.title)
    );
  }

  if (sort === "name-desc") {
    filteredProducts.sort((a, b) =>
      b.title.localeCompare(a.title)
    );
  }
   return Response.json(filteredProducts);

}