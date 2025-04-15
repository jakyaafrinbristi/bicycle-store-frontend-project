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

  export interface IOrderProduct {
    _id: string;
    quantity: number;
    product: IProduct;
  }
  export interface IOrder {
    _id: string;
    user: string; 
    products: IOrderProduct[];
    totalPrice: number;
    status: "Pending" |"Paid" |"Shipped" | "Completed" | "Cancelled"; 
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