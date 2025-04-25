import { useGetProductByIdQuery } from "@/redux/features/products/productApi";
import { useNavigate, useParams } from "react-router";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

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
    return <p className="text-center text-lg font-medium text-gray-600">Loading...</p>;
  }

  if (!data?.data) {
    return <p className="text-center text-lg text-red-500">Product not found.</p>;
  }

  const product = data.data;

  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div className="max-w-5xl mx-auto bg-white dark:bg-gray-900 shadow-xl rounded-2xl p-8 md:flex md:space-x-10 space-y-6 md:space-y-0">
        <div className="flex justify-center md:justify-start">
          <img
            className="w-72 h-72 object-cover rounded-xl shadow-lg border border-gray-200 dark:border-gray-800"
            src={product.imageUrl}
            alt={product.name}
          />
        </div>

        <div className="flex-1 space-y-5">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">{product.name}</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Brand: <span className="font-semibold text-gray-700 dark:text-gray-200">{product.brand}</span>
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">In Stock: {product.stock}</p>

          <span className="inline-block bg-teal-100 text-teal-700 dark:bg-teal-900 dark:text-teal-200 px-4 py-1 text-sm font-medium rounded-full">
            {product.category}
          </span>

          <p className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
            Price: <span className="text-teal-600 dark:text-teal-400">${product.price}</span>
          </p>

          <Button
            onClick={handleBuyNow}
            className="bg-teal-600 hover:bg-teal-500 px-6 py-2 text-lg mt-4 rounded-xl shadow-sm"
          >
            Buy Now
          </Button>
        </div>
      </div>
    </div>
  );
}
