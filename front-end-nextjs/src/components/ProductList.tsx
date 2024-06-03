"use client";

import { getAllProducts } from "@/app/action";
import { ProductType } from "@/app/type";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Pagination from "./Pagination";

export default function ProductList() {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const limit = 3;

  useEffect(() => {
    const fetchProducts = async () => {
      const fetchedProducts = await getAllProducts({ page: currentPage, limit: limit });
      console.log("🚀 ~ Home ~ products:", fetchedProducts.content);
      setProducts(fetchedProducts.content);
      setTotalPages(Math.ceil(fetchedProducts.totalElements / limit));
    };
    fetchProducts();
  }, [currentPage]);

  const handlePageChange = (newPage: number) => {
    if (newPage > 0 && newPage <= totalPages) {
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
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </>
  );
}
