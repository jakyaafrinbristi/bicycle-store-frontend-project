
/* eslint-disable @typescript-eslint/no-unused-vars */


import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";


import {  useGetAllOrderQuery } from "@/redux/features/orders/orderApi";
import { IOrder } from "@/Types/types";


export default function CustomerOrders() {
  const { data, isLoading} = useGetAllOrderQuery(undefined);
  console.log(data)
  if (isLoading)
    return (
      <div className="flex justify-center items-center h-40">
        <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-teal-500 border-solid"></div>
      </div>
    );
  return (
    <div className="p-4">
    <h2 className="text-2xl font-semibold mb-4">All Orders</h2>
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Customer</TableHead>
          <TableHead>Products</TableHead>
          <TableHead>Image</TableHead>
          <TableHead>Total Price</TableHead>
          <TableHead>Status</TableHead>
          
        </TableRow>
      </TableHeader>
      <TableBody>
        {data?.data?.map((order: IOrder) => (
          <TableRow key={order._id}>
            <TableCell>{order.user}</TableCell>
            <TableCell>
              {order.products.map((p) => (
                <div key={p._id}>
                  {p.product.name} (x{p.quantity})
                </div>
              ))}
            </TableCell>
            <TableCell>
      {order.products.map((p) => (
        <img
          key={p._id}
          src={p.product.imageUrl}
      
          className="w-16 h-16 object-cover rounded"
        />
      ))}
    </TableCell>
            <TableCell>${order.totalPrice}</TableCell>
          
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </div>
  )
}
