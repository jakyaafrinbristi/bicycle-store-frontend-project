import { useVerifyOrderQuery } from "@/redux/features/orders/orderApi";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, AlertCircle } from "lucide-react";
import { Link, useSearchParams } from "react-router";
import { Button } from "@/components/ui/button";

interface OrderData {
  id: number;
  order_id: string;
  currency: string;
  amount: number;
  payable_amount: number;
  discsount_amount: number | null;
  disc_percent: number;
  received_amount: string;
  usd_amt: number;
  usd_rate: number;
  is_verify: number;
  card_holder_name: string | null;
  card_number: string | null;
  phone_no: string;
  bank_trx_id: string;
  invoice_no: string;
  bank_status: string;
  customer_order_id: string;
  sp_code: string;
  sp_message: string;
  name: string;
  email: string;
  address: string;
  city: string;
  value1: string | null;
  value2: string | null;
  value3: string | null;
  value4: string | null;
  transaction_status: string | null;
  method: string;
  date_time: string;
}

export default function Order() {
  const [searchParams] = useSearchParams();
  const { isLoading, data } = useVerifyOrderQuery(searchParams.get("order_id"), {
    refetchOnMountOrArgChange: true,
  });

  const orderData: OrderData = data?.data?.[0];

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
    <div className="container mx-auto p-6 space-y-8">
      <h1 className="text-4xl font-bold text-center text-teal-600">Order Verification</h1>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
        <Card className="shadow-xl rounded-2xl">
          <CardHeader>
            <CardTitle className="text-lg text-teal-700">Order Details</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-3 text-sm text-gray-700">
            <div><span className="font-semibold">Order ID:</span> {orderData?.order_id}</div>
            <div><span className="font-semibold">Amount:</span> {orderData?.currency} {orderData?.amount?.toFixed(2)}</div>
            <div className="flex items-center gap-2">
              <span className="font-semibold">Status:</span>
              <Badge variant={orderData?.bank_status === "Success" ? "default" : "destructive"}>
                {orderData?.bank_status}
              </Badge>
            </div>
            <div><span className="font-semibold">Date:</span> {new Date(orderData?.date_time).toLocaleString()}</div>
          </CardContent>
        </Card>

        <Card className="shadow-xl rounded-2xl">
          <CardHeader>
            <CardTitle className="text-lg text-teal-700">Payment Information</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-3 text-sm text-gray-700">
            <div><span className="font-semibold">Method:</span> {orderData?.method}</div>
            <div><span className="font-semibold">Transaction ID:</span> {orderData?.bank_trx_id}</div>
            <div><span className="font-semibold">Invoice No:</span> {orderData?.invoice_no}</div>
            <div><span className="font-semibold">SP Code:</span> {orderData?.sp_code}</div>
            <div><span className="font-semibold">SP Message:</span> {orderData?.sp_message}</div>
          </CardContent>
        </Card>

        <Card className="shadow-xl rounded-2xl">
          <CardHeader>
            <CardTitle className="text-lg text-teal-700">Customer Information</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-3 text-sm text-gray-700">
            <div><span className="font-semibold">Name:</span> {orderData?.name}</div>
            <div><span className="font-semibold">Email:</span> {orderData?.email}</div>
            <div><span className="font-semibold">Phone:</span> {orderData?.phone_no}</div>
            <div><span className="font-semibold">Address:</span> {orderData?.address}</div>
            <div><span className="font-semibold">City:</span> {orderData?.city}</div>
          </CardContent>
        </Card>

        <Card className="shadow-xl rounded-2xl">
          <CardHeader>
            <CardTitle className="text-lg text-teal-700">Verification Status</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center gap-3">
            {orderData?.is_verify === 1 ? (
              <>
                <CheckCircle className="text-green-500 h-6 w-6" />
                <span className="text-green-600 font-medium">Verified</span>
              </>
            ) : (
              <>
                <AlertCircle className="text-yellow-500 h-6 w-6" />
                <span className="text-yellow-600 font-medium">Not Verified</span>
              </>
            )}
          </CardContent>
          <CardFooter>
            <Link to="/customer/customerOrders" className="w-full">
              <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white">View Orders</Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
