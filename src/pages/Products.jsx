import React, {Fragment, useEffect, useRef, useState} from "react";
import CardProduct from "../components/Fragments/CardProduct";
import {getProducts} from "../services/product.service";
import {useLogin} from "../hooks/useLogin";
import {TableCart} from "../components/Fragments/TableCard";
import Navbar from "../components/Layouts/Navbar";

export default function ProductPage() {
  const [products, setProducts] = useState([]);
  useLogin();

  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  });

  return (
    <Fragment>
      <Navbar />
      <div className="flex px-5 overflow-hidden py-5 gap-5">
        <div className="w-3/4 flex gap-4 flex-wrap">
          {products.length > 0 &&
            products.map((product) => (
              <CardProduct key={product.id}>
                <CardProduct.Header imageUrl={product.image} id={product.id} />
                <CardProduct.Body title={product.title}>
                  {product.description}
                </CardProduct.Body>
                <CardProduct.Footer price={product.price} id={product.id} />
              </CardProduct>
            ))}
        </div>
        <div className="1/4">
          <h1 className="font-bold text-3xl text-blue-700 ml-5 mb-2">Cart</h1>
          <TableCart products={products} />
        </div>
      </div>
    </Fragment>
  );
}
