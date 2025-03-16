import { Card } from "@/components/ui/card";
import { useGetAllProductsQuery } from "@/redux/features/products/productApi";
import { IProduct } from "@/Types/types";



export default function AllBicycle() {
  const {data,isLoading} =useGetAllProductsQuery(undefined);
  console.log({data,isLoading})
   if(isLoading){
        return <p>Loading</p>
    }
    const products =data?.data || [];
  return (
    <div className="container mx-auto px-8 py-10 mt-10 mb-10">
        <h1 className="text-center font-bold text-2xl">All Bicycle</h1>
        <p className="max-w-2xl mx-auto text-center my-10">Introducing our featured bicycle, a perfect blend of innovation, comfort, and performance. Designed for both urban commuters
         and adventure enthusiasts, this bicycle is built to deliver an unmatched riding experience.</p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {
            products.map((product : IProduct )=>(
              <Card className="p-4" key={product._id}>
                <img className="w-full h-40 object-cover" src={product.imageUrl} alt="" />
                <h3 className="text-lg font-bold mt-2">{product.name}</h3>
                <p className="text-sm">{product.description}</p>
                <p className="font-semibold">Price:${product.price}</p>


              </Card>
            ))

            }

        </div>
    </div>
  )
}
