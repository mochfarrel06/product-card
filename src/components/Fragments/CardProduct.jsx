import React from "react";
import Button from "../Elements/Button";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {addToCart} from "../../redux/slices/cartSlice";

export default function CardProduct({children}) {
  return (
    <div className="w-full max-w-sm bg-gray-700 border border-gray-700 rounded-lg shadow overflow-hidden flex flex-col justify-between">
      {children}
    </div>
  );
}

function Header({imageUrl, id}) {
  return (
    <Link to={`/product/${id}`}>
      <img
        src={imageUrl}
        alt="Shoes"
        className="p-8 rounded-t-lg h-60 w-full object-cover"
      />
    </Link>
  );
}

function Body({children, title}) {
  return (
    <div className="px-5 pb-5 h-full">
      <a href="">
        <h5 className="text-xl font-semibold tracking-tight text-white truncate">
          {title}
        </h5>
        <p className="text-sm tracking-tight text-slate-300 truncate">
          {children}
        </p>
      </a>
    </div>
  );
}

function Footer({price, id}) {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center justify-between px-5 py-5">
      <span className="text-xl font-bold text-white">
        $ {price.toLocaleString("id-ID", {styles: "currency", currency: "IDR"})}
      </span>
      <Button
        variant="bg-blue-600"
        onClick={() =>
          dispatch(
            addToCart({
              id,
              qty: 1,
            })
          )
        }
      >
        Add to cart
      </Button>
    </div>
  );
}

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;
