import React, {Fragment, useState} from "react";
import CardProduct from "../components/Fragments/CardProduct";
import Button from "../components/Elements/Button";

const products = [
  {
    id: 1,
    title: "Sepatu Nike",
    price: 1000000,
    imageUrl: "/images/shoes-1.jpg",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
          dolores cupiditate officiis optio quasi dolorum modi tenetur atque
          quibusdam id! aliquid?`,
  },
  {
    id: 2,
    title: "Sepatu Adidas",
    price: 2000000,
    imageUrl: "/images/shoes-2.jpg",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
          dolores cupiditate`,
  },
  {
    id: 3,
    title: "Sepatu Jordan",
    price: 10000000,
    imageUrl: "/images/shoes-3.jpg",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
          dolores cupiditate`,
  },
];

const email = localStorage.getItem("email");

export default function ProductPagess() {
  const [carts, setCarts] = useState([
    {
      id: 1,
      qty: 1,
    },
  ]);

  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };

  const handleAddToCart = (productId) => {
    const existingCart = carts.find((cart) => cart.id === productId);

    if (existingCart) {
      const updateCarts = carts.map((cart) =>
        cart.id === productId ? {...cart, qty: cart.qty + 1} : cart
      );
      setCarts(updateCarts);
    } else {
      setCarts([
        ...carts,
        {
          id: productId,
          qty: 1,
        },
      ]);
    }
  };

  return (
    <Fragment>
      <div className="flex justify-end h-16 mb-10 bg-blue-500 text-white items-center px-10">
        {email}
        <Button variant="bg-slate-700" onClick={handleLogout}>
          Logout
        </Button>
      </div>
      <div className="flex px-5 overflow-hidden py-5 gap-5">
        <div className="w-3/4 flex gap-4">
          {products.map((product) => (
            <CardProduct key={product.id}>
              <CardProduct.Header imageUrl={product.imageUrl} />
              <CardProduct.Body title={product.title}>
                {product.description}
              </CardProduct.Body>
              <CardProduct.Footer
                price={product.price}
                id={product.id}
                handleAddToCart={handleAddToCart}
              />
            </CardProduct>
          ))}
        </div>
        <div className="1/4">
          <h1 className="font-bold text-3xl text-blue-700 ml-5 mb-2">Cart</h1>
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
              {carts.map((cart) => {
                const product = products.find(
                  (product) => product.id === cart.id
                );
                return (
                  <tr key={cart.id}>
                    <td>{product.title}</td>
                    <td>
                      Rp{" "}
                      {product.price.toLocaleString("id-ID", {
                        styles: "currency",
                        currency: "IDR",
                      })}
                    </td>
                    <td>{cart.qty}</td>
                    <td>
                      Rp{" "}
                      {(product.price * cart.qty).toLocaleString("id-ID", {
                        styles: "currency",
                        currency: "IDR",
                      })}
                    </td>
                  </tr>
                );
              })}
              <tr>
                <td colSpan={3}>
                  <b>Total Price</b>
                </td>
                <td>
                  <b>
                    Rp{" "}
                    {(100000).toLocaleString("id-ID", {
                      styles: "currency",
                      currency: "IDR",
                    })}
                  </b>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Fragment>
  );
}
