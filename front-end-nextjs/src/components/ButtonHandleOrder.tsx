// "use client";

// import { deleteOrderCart } from "@/app/action";

// export default function ButtonHandleOrder({ selectedItems }: { selectedItems: { [key: number]: boolean } }) {
//   const handleOrder = async () => {
//     console.log(selectedItems);
//     const keysToDelete = Object.keys(selectedItems).filter((key) => selectedItems[parseInt(key)]);
//     for (const key of keysToDelete) {
//       await deleteOrderCart(parseInt(key));
//     }
//     // window.location.reload();
//   };
//   return (
//     <button onClick={handleOrder} type="button" className="btn btn-outline-primary">
//       Place Order
//     </button>
//   );
// }
