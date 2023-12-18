import {useEffect, useState} from "react";
import {useLogin} from "../../hooks/useLogin";
import Button from "../Elements/Button";
import {useSelector} from "react-redux";

const Navbar = () => {
  const username = useLogin();
  const [totalCart, setTotalCart] = useState(0);
  const carts = useSelector((state) => state.cart.data);

  useEffect(() => {
    const sum = carts.reduce((acc, item) => {
      return acc + item.qty;
    }, 0);
    setTotalCart(sum);
  }, [carts]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div className="flex justify-end h-16 mb-10 bg-blue-500 text-white items-center px-10 gap-5">
      <p>{username}</p>
      <Button variant="bg-slate-700" onClick={handleLogout}>
        Logout
      </Button>
      <div className="flex items-center bg-gray-800 p-2 rounded-md ml-5">
        {totalCart}
      </div>
    </div>
  );
};

export default Navbar;
