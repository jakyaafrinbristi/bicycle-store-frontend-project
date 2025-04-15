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
    // try {
    //   const orderData = {
    //     products: [{ product: product._id, quantity }],
    //     totalPrice: product.price * quantity,
    //   };

    //   await createOrder(orderData).unwrap();
    //   toast.success("Order placed successfully!");
    //   navigate("/customer/customerOrders");
    // } catch (error) {
    //   toast.error("Failed to place order");
    //   console.error("Order creation error:", error);
    // }
    try {
      const orderData = {
        products: [{ product: product._id, quantity }],
        totalPrice: product.price * quantity,
      };

      const response = await createOrder(orderData).unwrap();
      toast.success("Order placed successfully!");
      if(response?.success && response?.data){
     
        window.location.href = response.data; 
  
      

    
    
    }} catch (error) {
      toast.error("Failed to place order");
      console.error("Order creation error:", error);
    }
  };
 

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-2xl p-8 space-y-8">
        <h1 className="text-3xl font-bold text-gray-800 text-center">Checkout</h1>

        <div className="space-y-4 border-b pb-6">
          <h2 className="text-2xl font-semibold text-gray-700">Order Summary</h2>
          <div className="flex items-center space-x-6">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-24 h-24 object-cover rounded-xl shadow-lg"
            />
            <div className="space-y-2">
              <h3 className="text-lg font-medium text-gray-800">{product.name}</h3>
              <p className="text-gray-600">Brand: {product.brand}</p>
              <p className="text-gray-600">Price: <span className="font-semibold">${product.price}</span></p>
              <p className="text-gray-600">Available Stock: {product.stock}</p>
              <div className="flex items-center space-x-2 mt-1">
                <label htmlFor="quantity" className="text-gray-700">Quantity:</label>
                <input
                  id="quantity"
                  type="number"
                  min={1}
                  max={product.stock}
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className="w-20 border border-gray-300 rounded-lg px-3 py-1 focus:ring-2 focus:ring-teal-500 outline-none"
                />
              </div>
              <p className="text-lg font-bold text-green-700 mt-2">
                Total: ${(product.price * quantity).toFixed(2)}
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-2 border-b pb-6">
          <h2 className="text-2xl font-semibold text-gray-700">Payment Information</h2>
          <p className="text-gray-600">Payment method will be added in future updates.</p>
        </div>

        <div className="flex justify-between">
          <Button
            variant="outline"
            onClick={() => navigate(-1)}
            className="border-gray-400 hover:border-gray-600 text-gray-700"
          >
            Back
          </Button>
          <Button
  onClick={handlePlaceOrder}
  disabled={isLoading}
  className="bg-teal-600 hover:bg-teal-500 text-white px-8 py-2 rounded-lg text-lg shadow-lg flex items-center justify-center space-x-2"
>
  {isLoading ? (
    <>
      <AiOutlineLoading3Quarters className="animate-spin text-xl" />
     
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
