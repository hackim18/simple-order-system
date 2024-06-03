"use client";

import { addProductOnCart } from "@/app/action";
import { ProductType } from "@/app/type";
import { useState, useEffect } from "react";

export default function ProductCard({ product }: { product: ProductType }) {
  const [quantity, setQuantity] = useState<number>(1);
  const [type, setType] = useState<string>("");

  useEffect(() => {
    if (product.Types.length > 0) {
      setType(product.Types[0].name);
    }
  }, [product.Types]);

  const handleAddCart = async () => {
    console.log("🚀 ~ handleAddCart ~ product:", product.id, quantity);
    try {
      const data = await addProductOnCart(product.id, quantity, type);
      console.log("🚀 ~ handleAddCart ~ data:", data);
      alert("Product added to cart successfully!");
      window.location.reload();
    } catch (error) {
      console.error("Failed to add product to cart:", error);
      alert("Failed to add product to cart.");
    }
  };

  return (
    <div className="card mb-4">
      <div className="card-body">
        <div className="form-group row mb-3">
          <label htmlFor="productName" className="col-sm-3 col-form-label">
            Name
          </label>
          <div className="col-sm-9">
            <input type="text" className="form-control" id="productName" defaultValue={product.name} readOnly />
          </div>
        </div>

        <div className="form-group row mb-3">
          <label htmlFor="productType" className="col-sm-3 col-form-label">
            Type
          </label>
          <div className="col-sm-9">
            <div className="input-group">
              <select className="form-control" id="productType" value={type} onChange={(e) => setType(e.target.value)}>
                {product.Types.map((type) => {
                  return (
                    <option key={type.id} value={type.name}>
                      {type.name}
                    </option>
                  );
                })}
              </select>
              <div className="input-group-append">
                <span className="input-group-text">
                  <i className="bi bi-chevron-down"></i>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="form-group row mb-3">
          <label htmlFor="productPrice" className="col-sm-3 col-form-label">
            Price
          </label>
          <div className="col-sm-9">
            <div className="input-group">
              {/* <div className="input-group-prepend">
                <span className="input-group-text">Rp.</span>
              </div> */}
              <input
                type="text"
                className="form-control"
                id="productPrice"
                defaultValue={product.price.toLocaleString("id-ID", {
                  style: "currency",
                  currency: "IDR",
                })}
                readOnly
              />
            </div>
          </div>
        </div>

        <div className="form-group row mb-3">
          <label htmlFor="productQuantity" className="col-sm-3 col-form-label">
            Quantity
          </label>
          <div className="col-sm-9">
            <input
              type="number"
              className="form-control"
              id="productQuantity"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              style={{ width: "25%" }}
              min="1"
            />
          </div>
        </div>

        <button onClick={handleAddCart} className="btn btn-primary">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
