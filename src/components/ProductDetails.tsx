import { useGetProductByIdQuery } from "@/redux/features/products/productApi";

import { useParams } from "react-router"
import { Button } from "@/components/ui/button";
// import { toast } from "sonner";


export default function ProductDetails() {
    const {id} = useParams();
    const {data, isLoading}=useGetProductByIdQuery(id);
    // console.log(product)
    if(isLoading){
      // toast.loading("Loading Product Dtreails")
      return <p className="text-center text-lg">Loading....</p>
    }
 
    if(!data?.data){
      // toast.error("Product not found")
      return <p className="text-center text-lg text-red-500">Product not found.</p>
    }
//  toast.dismiss();
    const product = data.data;
  return (
    <div className="container mx-auto px-6 py-12">
<div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6  space-y-6">
  <div className="flex justify-center mb-6">
    <img className="w-80 h-80 object-cover rounded-lg  shadow-md" src={product.imageUrl} alt="" />

  </div>
  <div className="text-center">
    <h1 className="text-3xl font-bold text-gray-800 mb-2">{product.name}</h1>
    <h2 className="text-xl text-gray-600 mb-1">Brand: <span className="font-semibold">{product.brand}</span> </h2>
    <span className="inline-block bg-teal-100 text-teal-700 px-4 py-1 text-sm font-medium rounded-full mb-4 mt-2">{product.category}</span>
 <p className="text-2xl font-semibold text-gray-900">Price: <span className="text-teal-600">{product.price}</span></p>
 <Button className="bg-teal-600 hover:bg-teal-500 px-6 py-2 text-lg mt-5">Buy Now</Button>
  </div>

</div>
</div>
 
  )
}
