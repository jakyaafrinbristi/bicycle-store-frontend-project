import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useGetAllProductsPaginationQuery} from "@/redux/features/products/productApi";
import { IProduct } from "@/Types/types";
import { useState } from "react";
import { Link } from "react-router";



export default function AllBicycle() {
  const [searchTerm,setSearchTerm] = useState('');
  const [category,setCategory] =useState("");
  const [page,setPage]=useState(1);
  const {data,isLoading}=useGetAllProductsPaginationQuery({searchTerm,category,page,limit:6})
  // const {data,isLoading} =useGetAllProductsQuery(undefined);
  console.log({data,isLoading})
   if(isLoading){
        return <p>Loading....</p>
    }
    const products =data?.data || [];
    const {totalPage} = data?.meta || {totalPage : 1};
  return (
    <div className="container mx-auto px-8 py-10 mt-10 mb-10">
        <h1 className="text-center font-bold text-2xl mb-8">All Bicycle</h1>

        <div className="flex gap-4 mb-6">
          <input
           type="text"
           placeholder="Search by name..."
           className="border p-2 w-1/3"
           value={searchTerm}
           onChange={(e)=>setSearchTerm(e.target.value)}
           />
           <select className="border p-2 w-1/3" value={category} onChange={(e) => setCategory(e.target.value)}>
           <option value="">All Categories</option>
           <option value="Mountain">Mountain</option>
           <option value="Road">Road</option>
           <option value="Hybrid">Hybrid</option>
           <option value="Electric">Electric</option>

           </select>
        </div>
   
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {
            products.map((product : IProduct )=>(
              <Card className="p-4" key={product._id}>
                <img className="w-full h-48 object-cover rounded-md" src={product.imageUrl} alt="" />
            <div>
            <h3 className="text-lg font-bold ">{product.name}</h3>
            <p className="text-gray-500 text-sm">Brand{product.brand}</p>
            </div>
             <div className="flex flex-wrap gap-2">
             <button className="bg-teal-600 hover:bg-teal-500  text-xs px-3 py-1 rounded-full">{product.category}</button>
             </div>
                <p className="text-sm text-gray-600">{product.description}</p>
                <div className=" flex justify-between items-center">
                  <p className="font-semibold text-lg text-teal-700">Price:${product.price}</p>
                   <Link to={`/bicycle/${product._id}`}>
                   <Button className="bg-teal-600 hover:bg-teal-500 text-xs px-4 py-2">View Details</Button>
                   </Link>

              
            
                  </div>
   


              </Card>
            ))

            }

        </div>
        <div className="flex justify-center items-center mt-6 space-x-2">
  <Button
    disabled={page === 1}
    onClick={() => setPage(page - 1)}
    className="bg-teal-600 hover:bg-teal-500 text-white px-3 py-1 rounded-md disabled:bg-gray-300 disabled:cursor-not-allowed text-sm"
  >
    Previous
  </Button>
  <div className="flex items-center space-x-2">
    <button className="bg-teal-600 text-white px-3 py-1 rounded-md text-sm">
      {page}
    </button>
    <span className="text-sm text-gray-700">of</span>
    <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded-md text-sm">
      {totalPage}
    </button>
  </div>
  <Button
    disabled={page === totalPage}
    onClick={() => setPage(page + 1)}
    className="bg-teal-600 hover:bg-teal-500 text-white px-3 py-1 rounded-md disabled:bg-gray-300 disabled:cursor-not-allowed text-sm"
  >
    Next
  </Button>
</div>

    </div>
  )
}
