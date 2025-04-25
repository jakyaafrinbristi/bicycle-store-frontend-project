import { useGetAllOrderQuery } from "@/redux/features/orders/orderApi";
import { IOrder } from "@/Types/types";

export default function CustomerOrders() {
  const { data, isLoading } = useGetAllOrderQuery(undefined);

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
    <div className="p-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-teal-600 dark:text-teal-400">All Orders</h2>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {data?.data?.map((order: IOrder) => (
          <div
            key={order._id}
            className="bg-white dark:bg-gray-900 border border-teal-200 dark:border-teal-700 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all"
          >
            <h3 className="text-lg font-bold mb-4 text-teal-700 dark:text-teal-300">
              Customer: <span className="font-medium">{order.user.email}</span>
            </h3>

            <div className="mb-4">
              <p className="font-semibold text-teal-600 dark:text-teal-400 mb-2">Products:</p>
              {order.products.map((p) => (
                <div key={p._id} className="flex items-center gap-4 mt-2">
                  <img
                    src={p.product.imageUrl}
                    alt={p.product.name}
                    className="w-24 h-24 object-cover rounded-xl border-2 border-teal-300 dark:border-teal-600"
                  />
                  <span className="text-gray-700 dark:text-gray-300">
                    {p.product.name} <strong>(x{p.quantity})</strong>
                  </span>
                </div>
              ))}
            </div>

            <div className="space-y-1 text-gray-700 dark:text-gray-300">
              <p>
                <strong>Status:</strong>{" "}
                <span className="text-teal-700 dark:text-teal-400 font-medium">{order.status}</span>
              </p>
              <p>
                <strong>Total Price:</strong>{" "}
                <span className="text-green-600 dark:text-green-400 font-bold">${order.totalPrice}</span>
              </p>
            </div>

            <div className="mt-4 border-t pt-4 border-teal-200 dark:border-teal-700 text-sm bg-teal-50 dark:bg-gray-800 rounded-xl p-4">
              <h4 className="font-semibold text-teal-700 dark:text-teal-300 mb-2">Transaction Details</h4>
              <p className="text-gray-600 dark:text-gray-400">ID: {order?.transaction?.id}</p>
              <p className="text-gray-600 dark:text-gray-400">Method: {order?.transaction?.method}</p>
              <p className="text-gray-600 dark:text-gray-400">Date: {order?.transaction?.date_time}</p>
              <p className="text-gray-600 dark:text-gray-400">Status: {order?.transaction?.bank_status}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
