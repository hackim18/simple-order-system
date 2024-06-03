"use server";

import { revalidatePath } from "next/cache";
import { CartType, ProductType, Products } from "./type";
import { redirect } from "next/navigation";

export async function getAllProducts({ page, limit }: { page: number; limit: number }): Promise<Products> {
  const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + `/products?page=${page}&size=${limit}`, {
    cache: "no-cache",
  });
  if (!res.ok) {
    throw new Error("Failed to get data product");
  }
  return res.json();
}

export async function getAllOrderCart(): Promise<CartType[]> {
  const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "/carts", {
    cache: "no-cache",
  });
  if (!res.ok) {
    throw new Error("Failed to get data order cart");
  }
  return res.json();
}

export async function deleteOrderCart(id: number): Promise<void> {
  const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + `/carts/${id}`, {
    method: "DELETE",
    cache: "no-cache",
  });
  if (!res.ok) {
    throw new Error("Failed to delete order cart");
  } else {
    revalidatePath("/");
  }
}

export async function addProductOnCart(productId: number, quantity: number, type: string): Promise<void> {
  const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "/carts/add", {
    cache: "no-cache",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      productId,
      quantity,
      type,
    }),
  });
  if (!res.ok) {
    throw new Error("Failed to add order cart");
  } else {
    revalidatePath("/");
  }
}
