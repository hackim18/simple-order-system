export type Products = {
  totalPages: number;
  totalElements: number;
  size: number;
  content: ProductType[];
};
export type ProductType = {
  id: number;
  name: string;
  types: Type[];
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
  product: ProductType;
};
