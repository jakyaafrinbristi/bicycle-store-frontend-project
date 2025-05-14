import { useLocation, useNavigate } from "react-router";
import { Button } from "@/components/ui/button";
import { useCreateOrderMutation } from "@/redux/features/orders/orderApi";
import { toast } from "sonner";
import { IProduct } from "@/Types/types";
import { useState } from "react";
import { AiOutlineLoading3Quarters, AiOutlineArrowLeft } from "react-icons/ai";
import { FiMinus, FiPlus } from "react-icons/fi";

export default function Checkout() {
  const location = useLocation();
  const navigate = useNavigate();
  const [createOrder, { isLoading }] = useCreateOrderMutation();

  const product = location.state?.product as IProduct;
  const [quantity, setQuantity] = useState(1);

  const handlePlaceOrder = async () => {
    if (quantity < 1 || quantity > product.stock) {
      toast.error(`Quantity must be between 1 and ${product.stock}`);
      return;
    }

    try {
      const orderData = {
        products: [{ product: product._id, quantity }],
        totalPrice: product.price * quantity,
      };

      const response = await createOrder(orderData).unwrap();
      toast.success("Order placed successfully!");
      if (response?.success && response?.data) {
        window.location.href = response.data;
      }
    } catch (error) {
      toast.error("Failed to place order");
      console.error("Order creation error:", error);
    }
  };

  const incrementQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-2xl bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-teal-600 dark:bg-teal-700 p-6 text-white">
          <h1 className="text-2xl font-bold">Checkout Summary</h1>
          <p className="text-teal-100">Review your order before payment</p>
        </div>

        {/* Product Info */}
        <div className="p-6 space-y-6">
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="flex-shrink-0">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm"
              />
            </div>
            <div className="flex-1 space-y-3">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white">{product.name}</h2>
              <p className="text-gray-600 dark:text-gray-300">{product.brand}</p>
              
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-teal-600 dark:text-teal-400">
                  ${product.price.toFixed(2)}
                </span>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Available: {product.stock}
                  </span>
                </div>
              </div>

              {/* Quantity Selector */}
              <div className="pt-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Quantity
                </label>
                <div className="flex items-center">
                  <button
                    onClick={decrementQuantity}
                    disabled={quantity <= 1}
                    className="p-2 rounded-l-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-300 disabled:opacity-50"
                  >
                    <FiMinus />
                  </button>
                  <input
                    type="number"
                    min={1}
                    max={product.stock}
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, Math.min(product.stock, Number(e.target.value))))}
                    className="w-16 text-center border-t border-b border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 py-2 px-3 outline-none focus:ring-2 focus:ring-teal-500"
                  />
                  <button
                    onClick={incrementQuantity}
                    disabled={quantity >= product.stock}
                    className="p-2 rounded-r-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-300 disabled:opacity-50"
                  >
                    <FiPlus />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="border-t border-gray-200 dark:border-gray-700 pt-4 space-y-3">
            <div className="flex justify-between text-lg">
              <span className="text-gray-600 dark:text-gray-300">Subtotal</span>
              <span className="font-medium">${(product.price * quantity).toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-lg">
              <span className="text-gray-600 dark:text-gray-300">Shipping</span>
              <span className="font-medium text-green-600">Free</span>
            </div>
            <div className="flex justify-between text-xl font-bold pt-2">
              <span className="text-gray-800 dark:text-white">Total</span>
              <span className="text-teal-600 dark:text-teal-400">
                ${(product.price * quantity).toFixed(2)}
              </span>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="bg-gray-50 dark:bg-gray-800 px-6 py-4 flex justify-between border-t border-gray-200 dark:border-gray-700">
          <Button
            variant="ghost"
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <AiOutlineArrowLeft />
            Back
          </Button>
          <Button
            onClick={handlePlaceOrder}
            disabled={isLoading}
            className="bg-teal-600 hover:bg-teal-500 text-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <AiOutlineLoading3Quarters className="animate-spin" />
                Processing...
              </>
            ) : (
              "Confirm Order"
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}