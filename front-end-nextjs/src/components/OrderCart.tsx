"use client";

import { deleteOrderCart, getAllOrderCart } from "@/app/action";
import { CartType } from "@/app/type";
import { useEffect, useState } from "react";
// import ButtonHandleOrder from "./ButtonHandleOrder";

export default function OrderCart() {
  const [orderCart, setOrderCart] = useState<CartType[]>([]);
  const [selectAll, setSelectAll] = useState(false);
  const [selectedItems, setSelectedItems] = useState<{ [key: number]: boolean }>({});

  useEffect(() => {
    const fetchOrderCart = async () => {
      const data = await getAllOrderCart();
      setOrderCart(data);
    };
    fetchOrderCart();
  }, []);

  const handleSelectAll = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSelectedState = event.target.checked
      ? orderCart.reduce((acc, cart) => {
          acc[cart.id] = true;
          return acc;
        }, {} as { [key: number]: boolean })
      : {};
    setSelectedItems(newSelectedState);
    setSelectAll(event.target.checked);
  };

  const handleSelectItem = (id: number, checked: boolean) => {
    setSelectedItems((prev) => ({ ...prev, [id]: checked }));
  };

  const calculateTotal = () => {
    return orderCart.reduce((acc, cart) => {
      if (selectedItems[cart.id]) {
        acc += cart.total;
      }
      return acc;
    }, 0);
  };

  const handleOrder = async () => {
    console.log(selectedItems);
    const keysToDelete = Object.keys(selectedItems).filter((key) => selectedItems[parseInt(key)]);
    for (const key of keysToDelete) {
      await deleteOrderCart(parseInt(key));
    }
    if (keysToDelete.length > 0) {
      alert("Order placed successfully!");
      window.location.reload();
    }
  };

  return orderCart.length > 0 ? (
    <div>
      <h5>Customer : TomJerry</h5>
      <h5>Address : Jl. Tali 7 No.9 Jakarta Barat</h5>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">
              <input className="form-check-input" type="checkbox" checked={selectAll} onChange={handleSelectAll} id="flexCheckDefault" />
            </th>
            <th scope="col">Name</th>
            <th scope="col">Type</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Total</th>
          </tr>
        </thead>
        <tbody>
          {orderCart.map((cart) => (
            <tr key={cart.id}>
              <th>
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={!!selectedItems[cart.id]}
                  onChange={(e) => handleSelectItem(cart.id, e.target.checked)}
                  id={`check-${cart.id}`}
                />
              </th>
              <td>{cart.product.name}</td>
              <td>{cart.type}</td>
              <td>
                {cart.product.price.toLocaleString("id-ID", {
                  style: "currency",
                  currency: "IDR",
                })}
              </td>
              <td>{cart.quantity}</td>
              <td>
                {cart.total.toLocaleString("id-ID", {
                  style: "currency",
                  currency: "IDR",
                })}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h5>
        Total:{" "}
        {calculateTotal().toLocaleString("id-ID", {
          style: "currency",
          currency: "IDR",
        })}
      </h5>
      {/* <ButtonHandleOrder selectedItems={selectedItems} /> */}
      <button onClick={handleOrder} type="button" className="btn btn-outline-primary">
        Place Order
      </button>
    </div>
  ) : (
    <h5>No items in the cart</h5>
  );
}
