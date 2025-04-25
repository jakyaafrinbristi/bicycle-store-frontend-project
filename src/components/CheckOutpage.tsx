import { useLocation, useNavigate } from "react-router";
import { Button } from "@/components/ui/button";
import { useCreateOrderMutation } from "@/redux/features/orders/orderApi";
import { toast } from "sonner";
import { IProduct } from "@/Types/types";
import { useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-white dark:from-gray-900 dark:to-gray-800 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-4xl bg-white dark:bg-gray-900 rounded-3xl shadow-xl p-10 space-y-10">
        <h1 className="text-4xl font-bold text-center text-teal-500 dark:text-white">Checkout</h1>

        <div className="space-y-4 border-b border-gray-200 dark:border-gray-700 pb-6">
  <div className="flex flex-col sm:flex-row sm:items-start sm:gap-10 gap-6">
    <img
      src={product.imageUrl}
      alt={product.name}
      className="w-40 h-40 object-cover rounded-xl border dark:border-gray-700 shadow"
    />
    <div className="space-y-2 text-gray-700 dark:text-gray-300">
      <h3 className="text-xl font-semibold">{product.name}</h3>
      <p>Brand: <span className="font-medium">{product.brand}</span></p>
      <p>Price: <span className="font-bold text-green-600">${product.price}</span></p>
      <p>Stock: {product.stock}</p>
      <div className="flex items-center space-x-2 pt-1">
        <label htmlFor="quantity" className="font-medium">Qty:</label>
        <input
          id="quantity"
          type="number"
          min={1}
          max={product.stock}
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          className="w-20 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-1 outline-none focus:ring-2 focus:ring-teal-500"
        />
      </div>
      <p className="text-lg font-bold text-teal-700 dark:text-teal-400 pt-2">
        Total: ${(product.price * quantity).toFixed(2)}
      </p>
    </div>
  </div>
</div>


       

       
        <div className="flex justify-between">
          <Button
            variant="outline"
            onClick={() => navigate(-1)}
            className="border-gray-400 hover:border-teal-600 text-teal-700 dark:text-gray-200"
          >
            Back
          </Button>
          <Button
            onClick={handlePlaceOrder}
            disabled={isLoading}
            className="bg-teal-600 hover:bg-teal-500 text-white px-8 py-2 rounded-xl text-lg shadow flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <AiOutlineLoading3Quarters className="animate-spin text-xl" />
                Placing Order...
              </>
            ) : (
              "Place Order"
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}
