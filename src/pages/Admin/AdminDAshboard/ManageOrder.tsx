/* eslint-disable @typescript-eslint/no-unused-vars */

import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { useDeleteOrderMutation, useGetAllOrderQuery, useUpdateOrderMutation } from "@/redux/features/orders/orderApi";
import { IOrder } from "@/Types/types";

export default function ManageOrder() {
  const { data, isLoading} = useGetAllOrderQuery(undefined);
  const [deleteOrder] = useDeleteOrderMutation();
  const [updateOrder] = useUpdateOrderMutation();
  console.log(data)
  
  const handleDelete = async (id: string) => {
    try {
      await deleteOrder(id).unwrap();
     
      toast.success("Order deleted successfully!");
    } catch (err) {
      toast.error("Failed to delete order.");
    }
  };
 const handleStatusChange = async(id:string ,status:IOrder["status"])=>{
  try{
    await updateOrder({id,updatedData:{status}}).unwrap();
    toast.success("Order status updated!");
  }
  catch{

    toast.error("Failed to update status.");
  }
 };
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
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Customer</TableHead>
            <TableHead>Products</TableHead>
            <TableHead>Image</TableHead>
            <TableHead>Total Price</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.data?.map((order: IOrder) => (
         
            <TableRow key={order._id}>
              <TableCell>{order.user?.email}</TableCell>
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
              <TableCell>
                <Select value={order.status} onValueChange={(val) => handleStatusChange(order._id, val as IOrder["status"])}>
                  <SelectTrigger className="w-[120px]">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    {["Pending", "Paid", "Shipped", "Completed", "Cancelled"].map((status) => (
                      <SelectItem key={status} value={status}>
                        {status}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </TableCell>
              <TableCell>
                <Button variant="destructive" onClick={() => handleDelete(order._id)}>
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
