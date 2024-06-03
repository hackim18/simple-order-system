export type Products = {
  totalItems: number;
  totalPages: number;
  currentPage: number;
  products: ProductType[];
};
export type ProductType = {
  id: number;
  name: string;
  Types: Type[];
  price: number;
  createdAt: Date;
  updatedAt: Date;
};
export type Type = {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
};
export type CartType = {
  id: number;
  productId: number;
  quantity: number;
  type: string;
  total: number;
  createdAt: Date;
  updatedAt: Date;
  Product: ProductType;
};
