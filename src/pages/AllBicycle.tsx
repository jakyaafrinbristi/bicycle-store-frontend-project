import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useGetAllProductsPaginationQuery } from "@/redux/features/products/productApi";
import { IProduct } from "@/Types/types";
import { useState } from "react";
import { Link } from "react-router";

export default function AllBicycle() {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState("");
  const [page, setPage] = useState(1);
  const { data, isLoading } = useGetAllProductsPaginationQuery({ searchTerm, category, page, limit: 6 });

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

  const products = data?.data || [];
  const { totalPage } = data?.meta || { totalPage: 1 };

  return (
    <div className="container mx-auto px-4 sm:px-8 py-10 mt-10 mb-10">
      <h1 className="text-center font-bold text-2xl mb-8">All Bicycles</h1>

      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by name..."
          className="border p-2 w-full sm:w-1/3 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select 
          className="border p-2 w-full sm:w-1/3 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
          value={category} 
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="Mountain">Mountain</option>
          <option value="Road">Road</option>
          <option value="Hybrid">Hybrid</option>
          <option value="Electric">Electric</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product: IProduct) => (
          <Card className="p-4 h-full flex flex-col" key={product._id}>
            <div className="relative w-full h-48 overflow-hidden rounded-md">
              <img 
                className="w-full h-full object-cover"
                src={product.imageUrl} 
                alt={product.name}
              />
            </div>
            <div className="mt-4 flex-grow">
              <h3 className="text-lg font-bold">{product.name}</h3>
              <p className="text-gray-500 text-sm">Brand: {product.brand}</p>
              <div className="my-2 flex flex-wrap gap-2">
                <span className="bg-teal-600 text-white text-xs px-3 py-1 rounded-full">
                  {product.category}
                </span>
              </div>
              <p className="text-sm text-gray-600 line-clamp-2 mb-4">
                {product.description}
              </p>
            </div>
            <div className="flex justify-between items-center mt-auto">
              <p className="font-semibold text-lg text-teal-700">
                ${product.price.toLocaleString()}
              </p>
              <Link to={`/bicycle/${product._id}`}>
                <Button className="bg-teal-600 hover:bg-teal-500">
                  View Details
                </Button>
              </Link>
            </div>
          </Card>
        ))}
      </div>

      <div className="flex justify-center items-center mt-8 gap-2">
        <Button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          className="bg-teal-600 hover:bg-teal-500 text-white px-4 py-2 rounded-md disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          Previous
        </Button>
        <div className="flex items-center gap-2 mx-4">
          <span className="text-sm text-gray-700">
            Page {page} of {totalPage}
          </span>
        </div>
        <Button
          disabled={page === totalPage}
          onClick={() => setPage(page + 1)}
          className="bg-teal-600 hover:bg-teal-500 text-white px-4 py-2 rounded-md disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          Next
        </Button>
      </div>
    </div>
  );
}