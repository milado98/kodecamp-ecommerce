import { Link, useNavigate } from "react-router-dom";
import { FiShoppingCart } from 'react-icons/fi';
import { BsFillHandbagFill } from 'react-icons/bs';

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="navbar mb-4 md:mb-5 lg:mb-7 bg-gray-300 shadow-sm px-5 py-8 flex items-center justify-between">
      <div
        className="header ml-2 md:ml-4 lg:ml-6 cursor-pointer text-2xl"
        onClick={() => navigate("/")}
      >
        <div className="flex items-center gap-2">
            <div><BsFillHandbagFill size={32} /></div>
            <p className="text-black font-bold">ECOM</p>
        </div>
      </div>
      <div className="flex gap-4 items-center links mr-2 md:mr-4 lg:mr-6">
        <Link to="/cart">
          <FiShoppingCart size={32} />
        </Link>
        <Link to="/login">
          <button
            className="h-[40px] flex items-center font-semibold p-3 rounded-lg border border-black"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        </Link>
        <Link to="/register">
          <button
            className="h-[40px] flex items-center font-semibold p-3 rounded-lg border border-black bg-black text-gray-300"
          >
            Register
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
