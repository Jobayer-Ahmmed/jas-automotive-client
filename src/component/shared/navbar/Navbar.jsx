import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/logo/jas_logo.png";
import { useContext } from "react";
import { MyContext } from "../../contextApi/MyAuthProvider";

const Navbar = () => {
  const { myUser, myLogOut } = useContext(MyContext);
  const handleLogout = () => {
    myLogOut()
      .then(() => console.log("Logout successful"))
      .catch((err) => console.log(err.message));
  };
  return (
    <div className="navbar bg-base-100 px-xPadding2 md:px-xPadding">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/add-product">Add Product</NavLink>
            </li>
            <li>
              <NavLink to="/see-all-car">See All Car</NavLink>
            </li>
            <li>
              <NavLink to="/my-cart">My Cart</NavLink>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>
        </div>
        {/* for logo */}
        <div>
          <span className="text-2xl font-bold">
            <img src={logo} className="inline w-20" /> jas{" "}
          </span>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/add-product">Add Product</NavLink>
          </li>
          <li>
              <NavLink to="/see-all-car">See All Car</NavLink>
          </li>
          <li>
            <NavLink to="/my-cart">My Cart</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {myUser ? (
          <div className="">
            <div className="dropdown dropdown-end">
              <label tabIndex={0}>
                      <img className="w-10 h-10 hover:w-11 hover:h-11 rounded-full" src={myUser.photoURL} alt="" />
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li className="pl-4">
                 {myUser.displayName}
                </li>
                <li>
                <button
                      onClick={handleLogout}
                    >
                      Log Out
                    </button>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <ul className="flex gap-6">
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
