/* eslint-disable @typescript-eslint/no-unused-vars */
import { useGetAllOrderQuery } from "@/redux/features/orders/orderApi";
import { IOrder } from "@/Types/types";

export default function CustomerOrders() {
  const { data, isLoading } = useGetAllOrderQuery(undefined);
  console.log(data);

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
  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">All Orders</h2>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
        {data?.data?.map((order: IOrder) => (
          <div
            key={order._id}
            className="border rounded-xl p-4 shadow-sm hover:shadow-md transition bg-white"
          >
            <h3 className="text-lg font-bold mb-2">Customer: {order.user.email}</h3>

            <div className="mb-3">
              <p className="font-semibold">Products:</p>
              {order.products.map((p) => (
                <div key={p._id} className="flex items-center gap-3 mt-2">
                  <img
                    src={p.product.imageUrl}
                    alt={p.product.name}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <span className="text-gray-700">
                    {p.product.name} <strong>(x{p.quantity})</strong>
                  </span>
                </div>
              ))}
            </div>

            <p className="font-semibold text-gray-700">
              Status: <span className="text-blue-600">{order.status}</span>
            </p>
            <p className="font-semibold text-gray-700">
              Total Price: <span className="text-green-600">${order.totalPrice}</span>
            </p>

            <div className="bg-gray-100 p-2 rounded mt-3 text-sm">
              <h4 className="font-semibold">Transaction Details</h4>
              <p>ID: {order?.transaction?.id}</p>
              <p>Method: {order?.transaction?.method}</p>
              <p>Date: {order?.transaction?.date_time}</p>
              <p>Status: {order?.transaction?.bank_status}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
