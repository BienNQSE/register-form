import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const linkList = [
  {
    id: 1,
    to: "/",
    title: "Home",
  },
  {
    id: 2,
    to: "/blog",
    title: "Blog",
  },
  {
    id: 3,
    to: "/profile",
    title: "Profile",
  },
  {
    id: 4,
    to: "/contact",
    title: "Contact Us",
  },
];

const Nav = () => {
  return (
    <>
      <div className="p-5 flex items-center justify-center gap-x-5 bg-white shadow-md">
        {linkList.map((item) => (
          <NavLink
            key={item.id}
            to={item.to}
            className={({ isActive }) => (isActive ? "text-purple-500" : "")}
          >
            {item.title}
          </NavLink>
        ))}
      </div>
      <Outlet></Outlet>
    </>
  );
};

export default Nav;
