export interface IProduct {
    _id: string
    name: string
    brand:string
    price: number
    description: string
    category: string
    stock: number
    imageUrl: string
  }

  export interface Transaction {
    id: string;
    transactionStatus: string | null;
    bank_status: string;
    date_time: string;
    method: string;
    sp_code: string;
    sp_message: string;
  }
  export interface IOrderProduct {
    _id: string;
    quantity: number;
    product: IProduct;
  }
  export interface IOrder {
    transaction: Transaction;
    _id: string;
    user: {
      _id: string;
      name: string;
      email: string;
    };
    products: IOrderProduct[];
    totalPrice: number;
    status: string; 
    createdAt: string;
    updatedAt: string;
    __v?: number;
  }  

  export interface ITestimonial{
    _id: string
    image:string
    name:string
    email:string
    message:string
    rating:number
 
}
export interface IUser {
  _id: string;
  name: string;
  email: string;
  role: 'admin' | 'customer';  
  address?: string;
  city?: string;
}