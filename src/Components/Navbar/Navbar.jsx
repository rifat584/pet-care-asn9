import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut, loading } = use(AuthContext);
  const handleLogOut = () => {
    logOut();
  };
  return (
    <div className="navbar bg-base-100 shadow-sm px-12">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-200 rounded-box z-20 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/services"}>Services</Link>
            </li>
            <li>
              <Link to={"/profile"}>My Profile</Link>
            </li>
          </ul>
        </div>
        <Link to={"/"} className="text-2xl font-bold">
          Pet Care
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/services"}>Services</Link>
          </li>
          <li>
            <Link to={"/profile"}>My Profile</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {loading ? (
          <span className="loading loading-ring loading-sm"></span>
        ) : user ? (
          <div className="flex gap-4 items-center overflow-hidden">
            <Link to={"/profile"}>
              <img
                src={user.photoURL}
                alt=""
                className="h-8 w-8 rounded-full object-cover "
                title={user.displayName}
              />
            </Link>
            <button className="btn btn-primary border-none" onClick={handleLogOut}>
              Logout
            </button>
          </div>
        ) : (
          <Link to={"/login"} className="btn btn-primary hover:btn-neutral border-none">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
