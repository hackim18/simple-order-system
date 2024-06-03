"use client";

import { getAllProducts } from "@/app/action";
import { ProductType } from "@/app/type";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Pagination from "./Pagination";

export default function ProductList() {
  const [products, setProducts] = useState<ProductType[]>([]); // Specify the type for products state
  const [currentPage, setCurrentPage] = useState<number>(1); // Specify the type for currentPage state
  const [totalPages, setTotalPages] = useState<number>(1); // State to keep track of total pages
  const limit = 3;

  useEffect(() => {
    const fetchProducts = async () => {
      const fetchedProducts = await getAllProducts({ page: currentPage, limit: limit });
      console.log("🚀 ~ Home ~ products:", fetchedProducts.products);
      setProducts(fetchedProducts.products);
      setTotalPages(Math.ceil(fetchedProducts.totalItems / limit)); // Calculate total pages based on total products
    };
    fetchProducts();
  }, [currentPage]);

  const handlePageChange = (newPage: number) => {
    // Specify the type for newPage parameter
    if (newPage > 0 && newPage <= totalPages) {
      // Ensure the page number is not negative and does not exceed total pages
      setCurrentPage(newPage);
    }
    if (products.length < limit) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
      {/* Pagination UI for Product List */}
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </>
  );
}
