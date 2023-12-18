import {useState, useEffect, useRef} from "react";
import {useSelector} from "react-redux";

export function TableCart({products}) {
  const carts = useSelector((state) => state.cart.data);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (products.length > 0 && carts.length > 0) {
      const sum = carts.reduce((acc, cart) => {
        const product = products.find((product) => product.id === cart.id);
        return acc + product.price * cart.qty;
      }, 0);
      setTotalPrice(sum);
      localStorage.setItem("carts", JSON.stringify(carts));
    }
  }, [carts, products]);

  const totalPriceRef = useRef(null);

  useEffect(() => {
    if (carts.length > 0) {
      totalPriceRef.current.style.display = "table-row";
    } else {
      totalPriceRef.current.style.display = "none";
    }
  }, [carts]);

  return (
    <table className="text-left table-auto border-2 border-separate border-black border-spacing-x-5">
      <thead>
        <tr>
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {products.length > 0 &&
          carts.map((cart) => {
            const product = products.find((product) => product.id === cart.id);
            return (
              <tr key={cart.id}>
                <td className="">{product.title.substring(0, 10)}...</td>
                <td>
                  ${" "}
                  {product.price.toLocaleString("id-ID", {
                    styles: "currency",
                    currency: "IDR",
                  })}
                </td>
                <td>{cart.qty}</td>
                <td>
                  ${" "}
                  {(product.price * cart.qty).toLocaleString("id-ID", {
                    styles: "currency",
                    currency: "IDR",
                  })}
                </td>
              </tr>
            );
          })}
        <tr ref={totalPriceRef}>
          <td colSpan={3}>
            <b>Total Price</b>
          </td>
          <td>
            <b>
              ${" "}
              {totalPrice.toLocaleString("id-ID", {
                styles: "currency",
                currency: "IDR",
              })}
            </b>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
