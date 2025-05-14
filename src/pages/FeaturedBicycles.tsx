import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useGetAllProductQuery } from "@/redux/features/products/productApi";
import { IProduct } from "@/Types/types";
import { Link } from "react-router";
import { FiStar, FiArrowRight } from "react-icons/fi";

const FeaturedBicycles = () => {
  const { data, isLoading } = useGetAllProductQuery(undefined);
  
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <div className="relative">
          <div className="h-20 w-20 rounded-full border-4 border-dashed border-teal-500/30 animate-spin"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-8 w-8 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full shadow-md animate-pulse"></div>
          </div>
        </div>
      </div>
    );
  }

  const products = data?.data || [];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 ">
      <div className="text-center mb-10">
        <div className="inline-flex items-center justify-center w-14 h-14 bg-teal-100 dark:bg-teal-900/50 rounded-full mb-5">
          <FiStar className="text-2xl text-teal-600 dark:text-teal-400" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-3">
          Our Featured Bicycles
        </h1>
        <div className="w-24 h-1.5 bg-gradient-to-r from-teal-400 to-teal-600 rounded-full mx-auto mb-6"></div>
        <p className="text-lg text-gray-600 dark:text-teal-200 max-w-3xl mx-auto">
          Introducing our premium collection - a perfect blend of innovation, comfort, and performance. 
          Designed for both urban commuters and adventure enthusiasts.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.slice(0, 4).map((product: IProduct) => (
          <Card 
            key={product._id}
            className="group relative overflow-hidden h-full flex flex-col border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div className="relative w-full h-60 overflow-hidden">
              <img 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                src={product.imageUrl} 
                alt={product.name}
              />
              <div className="absolute top-3 right-3 bg-teal-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                {product.category}
              </div>
            </div>
            
            <div className="p-5 flex-grow flex flex-col">
              <div className="mb-3">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">{product.name}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">By {product.brand}</p>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2 mb-5">
                {product.description}
              </p>
              
              <div className="mt-auto flex justify-between items-center">
                <p className="font-bold text-lg text-teal-600 dark:text-teal-400">
                  ${product.price.toLocaleString()}
                </p>
                <Link to={`/bicycle/${product._id}`}>
                  <Button 
                    size="sm" 
                    className="bg-teal-600 hover:bg-teal-700 dark:bg-teal-700 dark:hover:bg-teal-800 flex items-center gap-1"
                  >
                    View <FiArrowRight className="text-sm" />
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="text-center mt-16">
        <Link to="/all-bicycle">
          <Button className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white px-8 py-5 text-base font-medium rounded-lg shadow-md hover:shadow-teal-300/30 dark:shadow-teal-700/30 transition-all duration-300">
            Explore Full Collection
          </Button>
        </Link>
      </div>
    </section>
  );
}

export default FeaturedBicycles;