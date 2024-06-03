import OrderCart from "@/components/OrderCart";
import ProductList from "@/components/ProductList";

export default function Home() {
  return (
    <div className="container">
      <div className="row mt-3 mb-3">
        <div className="col-md-6">
          <h2>Product List</h2>
          <ProductList />
        </div>

        <div className="col-md-6">
          <h2>Order Cart</h2>
          {/* Order cart content goes here */}
          <OrderCart />
        </div>
      </div>
    </div>
  );
}
