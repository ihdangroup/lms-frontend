"use client";
import { AuthContext } from "@/app/_context/AuthContext";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import StudentsIcon from "../icons/StudentsIcon";
import Search from "../icons/Search";

const TopNav = ({ slide, setSlide }) => {
  const { user, logoutUser } = React.useContext(AuthContext);
  let pathname = usePathname();
  const [menu, setMenu] = React.useState([
    {
      id: 1,
      name: "Courses",
      icon: Search,
      path: "/browse",
    },
  ]);
  const menuListUser = [
    {
      id: 1,
      name: "Courses",
      icon: Search,
      path: "/browse",
    },
    {
      id: 2,
      name: "Dashboard",
      icon: StudentsIcon,
      path: "/dashboard",
    },
    {
      id: 3,
      name: "Profile",
      icon: StudentsIcon,
      path: "/profile",
    },
  ];
  const menuListAdmin = [
    {
      id: 1,
      name: "Dashboard",
      icon: StudentsIcon,
      path: "/statistic",
    },
    {
      id: 2,
      name: "Courses",
      icon: Search,
      path: "/browse",
    },
    {
      id: 2,
      name: "Data User",
      icon: StudentsIcon,
      path: "/dashboard",
    },
    {
      id: 3,
      name: "Profile",
      icon: StudentsIcon,
      path: "/profile",
    },
  ];
  const getMenu = () => {
    if (user?.role == "user") {
      setMenu(menuListUser);
    } else {
      setMenu(menuListAdmin);
    }
  };
  React.useEffect(() => {
    user?.role ? getMenu() : null;
    user
      ? null
      : setMenu([
          {
            id: 1,
            name: "Courses",
            icon: Search,
            path: "/browse",
          },
        ]);
  }, [user]);
  return (
    <nav className="flex bg-white justify-between items-center transition-all duration-300 px-24 py-0 fixed top-0 left-0 w-full shadow-lg">
      <div className="text-white text-lg font-bold">
        <Link href="/">
          <img src="/logo.png" alt="Saung IT Bumiayu" width={70} height={70} />
        </Link>
      </div>
      <ul className="flex">
        {menu?.map((list) => (
          <li
            key={list.name}
            className={`${
              list.path == pathname
                ? "border border-0 border-b-4  border-slate-700"
                : null
            } font-bold mx-10`}
          >
            <Link href={list.path}>
              <span>{list.name}</span>
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex items-center font-bold">
        <div>
          <span className="ml-4 border border-2 border-slate-800 px-4 py-1">
            {user?.name}
          </span>
        </div>
        <button
          onClick={logoutUser}
          className="text-white ml-4 bg-slate-800 px-8 py-4"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default TopNav;
