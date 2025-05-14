import { useGetProductByIdQuery } from "@/redux/features/products/productApi";
import { useNavigate, useParams } from "react-router";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Star, ChevronLeft, ShieldCheck, Truck } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isLoading } = useGetProductByIdQuery(id);

  const handleBuyNow = () => {
    navigate("/checkout", {
      state: { product },
    });
    toast.success("Proceeding to checkout!");
  };

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8">
          <Skeleton className="w-full md:w-1/2 h-96 rounded-xl" />
          <div className="w-full md:w-1/2 space-y-4">
            <Skeleton className="h-8 w-3/4" />
            <Skeleton className="h-6 w-1/2" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-10 w-32 mt-6" />
          </div>
        </div>
      </div>
    );
  }

  if (!data?.data) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <p className="text-lg text-red-500">Product not found.</p>
        <Button 
          onClick={() => navigate(-1)} 
          variant="ghost" 
          className="mt-4"
        >
          <ChevronLeft className="mr-2 h-4 w-4" /> Back to shop
        </Button>
      </div>
    );
  }

  const product = data.data;

  return (
    <div className="container mx-auto px-4 py-12">
      <Button 
        onClick={() => navigate(-1)} 
        variant="ghost" 
        className="mb-6"
      >
        <ChevronLeft className="mr-2 h-4 w-4" /> Back
      </Button>

      <div className="max-w-5xl mx-auto bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800">
        <div className="flex flex-col md:flex-row gap-8 p-6">
          <div className="w-full md:w-1/2">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl aspect-square flex items-center justify-center p-4 border border-gray-200 dark:border-gray-700">
              <img
                className="w-full h-full object-contain rounded-lg"
                src={product.imageUrl}
                alt={product.name}
              />
            </div>
            <div className="flex gap-2 mt-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-gray-100 dark:bg-gray-700 rounded-md w-16 h-16 cursor-pointer border-2 border-transparent hover:border-teal-500" />
              ))}
            </div>
          </div>

          <div className="w-full md:w-1/2 space-y-6">
            <div>
              <span className="inline-block bg-teal-50 dark:bg-teal-900/50 text-teal-600 dark:text-teal-400 px-3 py-1 text-xs font-medium rounded-full mb-3">
                {product.category}
              </span>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{product.name}</h1>
              <div className="flex items-center mt-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-5 w-5 ${i < 4 ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300 dark:text-gray-600'}`} 
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">(24 reviews)</span>
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-3xl font-semibold text-gray-900 dark:text-white">
                ${product.price}
                {product.originalPrice && (
                  <span className="text-lg text-gray-500 dark:text-gray-400 line-through ml-2">
                    ${product.originalPrice}
                  </span>
                )}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {product.stock > 0 ? (
                  <span className="text-green-600 dark:text-green-400">{product.stock} in stock</span>
                ) : (
                  <span className="text-red-500">Out of stock</span>
                )}
              </p>
            </div>

            <p className="text-gray-700 dark:text-gray-300">
              Brand: <span className="font-medium">{product.brand}</span>
            </p>

            <p className="text-gray-600 dark:text-gray-400">
              {product.description || "No description available for this product."}
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                <Truck className="h-4 w-4 mr-1" />
                Free shipping
              </div>
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                <ShieldCheck className="h-4 w-4 mr-1" />
                1-year warranty
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <Button 
                onClick={handleBuyNow}
                className="flex-1 bg-teal-600 hover:bg-teal-700 text-white py-6 text-lg rounded-lg shadow-none"
              >
                Buy Now
              </Button>
              
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 dark:border-gray-800 p-6">
          <h3 className="font-medium text-lg mb-4">Product Details</h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-gray-500 dark:text-gray-400">Brand</p>
              <p className="text-gray-700 dark:text-gray-300">{product.brand}</p>
            </div>
            <div>
              <p className="text-gray-500 dark:text-gray-400">Category</p>
              <p className="text-gray-700 dark:text-gray-300">{product.category}</p>
            </div>
            <div>
              <p className="text-gray-500 dark:text-gray-400">SKU</p>
              <p className="text-gray-700 dark:text-gray-300">{product.sku || 'N/A'}</p>
            </div>
            <div>
              <p className="text-gray-500 dark:text-gray-400">Weight</p>
              <p className="text-gray-700 dark:text-gray-300">{product.weight || 'N/A'}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}