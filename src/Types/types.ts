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

  export interface ITestimonial{
    _id: string
    image:string
    name:string
    email:string
    message:string
    rating:number
 
}