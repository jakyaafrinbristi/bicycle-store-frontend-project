import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useGetAllProductQuery } from "@/redux/features/products/productApi";
import { IProduct } from "@/Types/types";
import { Link } from "react-router";

const FeaturedBicycles = () => {
  const { data, isLoading } = useGetAllProductQuery(undefined);
  
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <div className="relative">
          <div className="h-16 w-16 rounded-full border-4 border-dashed border-teal-500 animate-spin"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-6 w-6 bg-teal-500 rounded-full shadow-md"></div>
          </div>
        </div>
      </div>
    );
  }

  const products = data?.data || [];

  return (
    <div className="container mx-auto px-4 sm:px-8 py-10 mt-10 mb-10">
      <h1 className="text-center font-bold text-2xl mb-4">Featured Bicycles</h1>
      <p className="max-w-2xl mx-auto text-center text-gray-600 mb-10">
        Introducing our featured bicycles, a perfect blend of innovation, comfort, and performance. 
        Designed for both urban commuters and adventure enthusiasts.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.slice(0, 6).map((product: IProduct) => (
          <Card className="p-4 h-full flex flex-col" key={product._id}>
            <div className="relative w-full h-48 overflow-hidden rounded-md mb-4">
              <img 
                className="w-full h-full object-cover"
                src={product.imageUrl} 
                alt={product.name}
              />
            </div>
            
            <div className="flex-grow">
              <h3 className="text-lg font-bold">{product.name}</h3>
              <p className="text-gray-500 text-sm mt-1">Brand: {product.brand}</p>
              
              <div className="my-2">
                <span className="bg-teal-600 text-white text-xs px-3 py-1 rounded-full">
                  {product.category}
                </span>
              </div>
              
              <p className="text-sm text-gray-600 line-clamp-2 mb-4">
                {product.description}
              </p>
            </div>
            
            <div className="flex justify-between items-center mt-auto">
              <p className="font-semibold text-lg text-teal-700">
                ${product.price.toLocaleString()}
              </p>
              <Link to={`/bicycle/${product._id}`}>
                <Button className="bg-teal-600 hover:bg-teal-500">
                  View Details
                </Button>
              </Link>
            </div>
          </Card>
        ))}
      </div>

      <div className="text-center mt-10">
        <Link to="/all-bicycle">
          <Button className="bg-teal-600 hover:bg-teal-500 px-8 py-4">
            View All Bicycles
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default FeaturedBicycles;