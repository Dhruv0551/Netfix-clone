import React from "react";
import logo from "../assets/netflix-logo-png-2562.png";
import ProfileIcon from "../assets/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg";
import "./poppins.css";
import "./homeNav.css";
import { NavLink } from "react-router-dom";

function HomeNavbar() {
  const SearchIcon = (
    <svg
      className="h-5 w-5"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path
        fill="#ffffff"
        d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 
    12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 
    40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1
     0 0-288 144 144 0 1 0 0 288z"
      />
    </svg>
  );

  const BellIcon = (
    <svg
      className="w-5 h-5"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
    >
      <path
        fill="#ffffff"
        d="M224 0c-17.7 0-32 14.3-32 32l0 19.2C119 66 64 130.6 64 208l0 25.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416l400 0c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8 384 233.4l0-25.4c0-77.4-55-142-128-156.8L256 32c0-17.7-14.3-32-32-32zm0 96c61.9 0 112 50.1 112 112l0 25.4c0 47.9 13.9 94.6 39.7 134.6L72.3 368C98.1 328 112 281.3 112 233.4l0-25.4c0-61.9 50.1-112 112-112zm64 352l-64 0-64 0c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z"
      />
    </svg>
  );
  const dropdown = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
      <path
        fill="#ffffff"
        d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"
      />
    </svg>
  );

  return (
    <div className="navbar flex w-[100%] justify-between h-auto fixed text-[14px] p-[20px] z-1">
      <div className="navbar-left flex items-center">
        <img src={logo} alt="" className=" w-[90px] h-auto" />
        <ul className="flex cursor-pointer gap-[20px] list-none ml-15">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/login">TV Shows</NavLink>
          </li>
          <li>Movies</li>
          <li>News & Popular</li>
          <li>
            <NavLink to="/mylist">My list</NavLink>
          </li>
          <li>Browse by languages</li>
        </ul>
      </div>
      <div className="navbar-right align-middle flex items-center gap-[20px]">
        <div className="icons cursor-pointer flex gap-[15px]">
          {SearchIcon}
          <p className="text-white">Children</p>
          {BellIcon}
        </div>
        <div className="userProile flex items-center relative">
          <img
            className="w-8 h-8 cursor-pointer rounded-[4px]"
            src={ProfileIcon}
            alt=""
          />
          <div className="w-3 h-3 cursor-pointer ml-2 mb-2">{dropdown}</div>
          <div className="dropdown text-white flex gap-[10px] items-center cursor-pointer absolute">
            <p className=" text-[13px]">
              <NavLink to="/login">Sign out of Netflix</NavLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeNavbar;
