/* eslint-disable @typescript-eslint/no-unused-vars */
import { useCreateProductMutation, useDeleteProductMutation, useGetAllProductQuery, useUpdateProductMutation } from "@/redux/features/products/productApi"
import { IProduct } from "@/Types/types";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button"
import { toast } from "sonner";



export default function ManageProducts() {
  const {data,isLoading} =useGetAllProductQuery(undefined);
  // console.log(data);
  const [createProduct, {isLoading: isCreating}] =useCreateProductMutation();
  const [updateProduct, { isLoading: isUpdating }] = useUpdateProductMutation();
  const [deleteProduct, { isLoading: isDeleting }] = useDeleteProductMutation();




  //dialog
  const [editingProduct, setEditingProduct] = useState<IProduct | null>(null);
  const [isCreateDialogOpen, setCreateDialogOpen] = useState(false);
  const [isEditDialogOpen, setEditDialogOpen] = useState(false);
  const CATEGORIES = ['Mountain', 'Road', 'Hybrid', 'BMX', 'Electric'] as const;


  const {register :createRegister , handleSubmit:createHandleSubmit ,
    reset:createReset} =useForm<FieldValues>({

      defaultValues:{
        name:"",
        price:"",
        category:"",
        description:"",
        brand:"",
        stock:0,
        imageUrl:""

      },
    });
    const { register: editRegister, handleSubmit: editHandleSubmit, reset: editReset } = useForm<FieldValues>();
    

  const products = data?.data || [];

  const handleCreateProduct = async(formData:FieldValues) =>{

    try {
      const productData ={
        ...formData,
        price:Number(formData.price),
        stock:Number(formData.stock)
      };
      await createProduct(productData).unwrap();
      toast.success("product created Successfully");
      createReset();
      setCreateDialogOpen(false);



    } catch(err){
      toast.error("Failed to create product")
    }
  };
  //update
  const handleEdit = (product: IProduct) => {
    setEditingProduct(product);
    editReset(product);  
    setEditDialogOpen(true);
  };
  const handleUpdateProduct = async (formData: FieldValues) => {
    if (!editingProduct) return;
    try {
      const updatedProduct = { 
        ...editingProduct, 
        ...formData,
        price: Number(formData.price), 
        stock: Number(formData.stock)  
      };
      await updateProduct(updatedProduct).unwrap();
      toast.success("Product updated successfully");
      setEditDialogOpen(false);
      setEditingProduct(null);
    } catch (err) {
      toast.error("Failed to update product");
    }
  };

  //delete
  const handleDelete = async (id: string) => {
    try {
      await deleteProduct(id).unwrap();
      toast.success("Product deleted successfully");
    } catch (err) {
      toast.error("Failed to delete product");
    }
  };
  const handleCloseCreateDialog = () => {
    createReset();
    setCreateDialogOpen(false);
  };

  const handleCloseEditDialog = () => {
    editReset();
    setEditingProduct(null);
    setEditDialogOpen(false);
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
    <div className="admin-dashboard p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Admin Product Management</h1>
      
       {/* dialog for add product */}
       <Dialog open={isCreateDialogOpen} onOpenChange={setCreateDialogOpen}>
        <DialogTrigger asChild>
          <Button
            className="mb-6 bg-blue-600 hover:bg-blue-700 text-white"
            onClick={() => {
              setCreateDialogOpen(true);
            }}
          >
            Add New Product
          </Button>
        </DialogTrigger>

        <DialogContent className="max-w-[400px] bg-white rounded-lg max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold text-gray-800">
              Add New Product
            </DialogTitle>
            <DialogDescription className="text-gray-600">
              Fill in the details to add a new product.
            </DialogDescription>
          </DialogHeader>

          <form
            onSubmit={createHandleSubmit(handleCreateProduct)}
            className="space-y-4"
          >
            {/* Product Input Fields */}
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Product Name:</label>
              <input
                id="name"
                {...createRegister("name")}
                placeholder="Product Name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price:</label>
              <input
                id="price"
                {...createRegister("price")}
                placeholder="Product Price"
                type="number"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="space-y-2">
  {/* লেবেল যোগ করা হয়েছে */}
  <label htmlFor="category" className="block text-sm font-medium text-gray-700">
    Product Category
  </label>
  
  {/* আপনার সিলেক্ট এলিমেন্ট */}
  <select
    id="category"
    {...createRegister("category")}
    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
  >
    <option value="">Select a category</option>
    {CATEGORIES.map(category => (
      <option key={category} value={category}>{category}</option>
    ))}
  </select>
</div>
            <div className="space-y-2">
              <label htmlFor="brand" className="block text-sm font-medium text-gray-700">Brand:</label>
              <input
                id="brand"
                {...createRegister("brand")}
                placeholder="Product Brand"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description:</label>
              <textarea
                id="description"
                {...createRegister("description")}
                placeholder="Product Description"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="stock" className="block text-sm font-medium text-gray-700">Stock:</label>
              <input
                id="stock"
                {...createRegister("stock")}
                placeholder="Product Stock"
                type="number"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700">Image URL:</label>
              <input
                id="imageUrl"
                {...createRegister("imageUrl")}
                placeholder="Product Image URL"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <DialogFooter className="flex justify-end gap-3 mt-4">
              <Button
                type="button"
                variant="secondary"
                onClick={handleCloseCreateDialog}
                className="bg-gray-300 hover:bg-gray-400"
              >
                Close
              </Button>
              <Button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white"
                disabled={isCreating}
              >
                {isCreating ? "Saving..." : "Create Product"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

       {/* Dialog for Edit Product */}
       <Dialog open={isEditDialogOpen} onOpenChange={setEditDialogOpen}>
        <DialogContent className="max-w-[400px] bg-white rounded-lg max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold text-gray-800">
              Edit Product
            </DialogTitle>
            <DialogDescription className="text-gray-600">
              Update the product details below.
            </DialogDescription>
          </DialogHeader>

          <form
            onSubmit={editHandleSubmit(handleUpdateProduct)}
            className="space-y-4"
          >
            {/* Product Input Fields */}
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Product Name:</label>
              <input
                id="name"
                {...editRegister("name")}
                placeholder="Product Name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price:</label>
              <input
                id="price"
                {...editRegister("price")}
                placeholder="Product Price"
                type="number"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category:</label>
              <input
                id="category"
                {...editRegister("category")}
                placeholder="Product Category"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="brand" className="block text-sm font-medium text-gray-700">Brand:</label>
              <input
                id="brand"
                {...editRegister("brand")}
                placeholder="Product Brand"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description:</label>
              <textarea
                id="description"
                {...editRegister("description")}
                placeholder="Product Description"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="stock" className="block text-sm font-medium text-gray-700">Stock:</label>
              <input
                id="stock"
                {...editRegister("stock")}
                placeholder="Product Stock"
                type="number"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700">Image URL:</label>
              <input
                id="imageUrl"
                {...editRegister("imageUrl")}
                placeholder="Product Image URL"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <DialogFooter className="flex justify-end gap-3 mt-4">
              <Button
                type="button"
                variant="secondary"
                onClick={handleCloseEditDialog}
                className="bg-gray-300 hover:bg-gray-400"
              >
                Close
              </Button>
              <Button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white"
                disabled={isUpdating}
              >
                {isUpdating ? "Saving..." : "Update Product"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      
      <div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {products.map((product :IProduct) =>(
        <div className="card bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden" key={product._id}> 
          <div>
            <img 
            className="object-cover w-full h-full"
            src={product.imageUrl}
            
            />

          </div>
          <div className="p-4">
            <h3 className="font-bold text-lg text-gray-800">{product.name}</h3>
            <p className="text-gray-600"><strong>Price:</strong> ${product.price}</p>
            <p className="text-gray-600"><strong>Category:</strong> ${product.category}</p>
            <p className="text-gray-600"><strong>Brand:</strong> ${product.brand}</p>
            <p className="text-gray-600"><strong>Description:</strong> ${product.description}</p>
            <p className="text-gray-600"><strong>Stock:</strong> ${product.stock}</p>
          </div>
          <div className="flex justify-end gap-2 p-4 border-t border-gray-200">
            <button className="p-2 hover:bg-red-50 rounded-full" onClick={() => handleDelete(product._id)}
                disabled={isDeleting}>
            <FaTrash className="text-red-500" />

            </button>
            <button 
                  onClick={() => handleEdit(product)}
             className="p-2 hover:bg-blue-50 rounded-full">
            <FaEdit className="text-blue-500" />

            </button>
          </div>
        </div>
      ))}
      </div>
  </div>
  )
}
