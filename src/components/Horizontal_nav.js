//! This component is for the horizontal navbar

// Navbar item data dynamic
import { Navbar_data } from "../data/Navbar_data";

// React icons
import { TiUser } from "react-icons/ti";

// React Router DOM
import { Link } from "react-router-dom";

const Horizontal_nav = () => {
  return (
    <div className="flex items-center justify-between p-[0.6rem_7rem] bg-white z-50 fixed w-full top-0 border-b-2 shadow-sm">
      {/* Logo */}
      <img src={process.env.PUBLIC_URL + "/images/Logo.svg"} alt="logo" />
      {/* Navbar Items */}
      <div className="flex space-x-8 items-center">
        {Navbar_data().map((item) => {
          return (
            <p className="text-[1rem] font-medium cursor-pointer" key={item.item}>
              {item.item}
            </p>
          );
        })}
      </div>
      {/* Login Button */}
      <Link to="/Login">
        <button className="flex items-center bg-gradient-to-t from-[#52A49A] to-[#00CDAC] text-lg text-white p-[0.5rem_1.5rem] rounded-full space-x-2 hover:shadow-lg shadow-green-600 transition-all duration-700 ease-in-out">
          <TiUser className="h-6 w-6" />
          <span className="font-medium">Login</span>
        </button>
      </Link>
    </div>
  );
};

export default Horizontal_nav;
