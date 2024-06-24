"use client";
import { AuthContext } from "@/app/_context/AuthContext";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import StudentsIcon from "../icons/StudentsIcon";
import LetterIcon from "../icons/LetterIcon";
import Search from "../icons/Search";
import UpgradeIcon from "../icons/UpgradeIcon";

const SidebarNav = ({ slide, setSlide }) => {
  const { user } = React.useContext(AuthContext);
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
    <>
      <div className="flex bg-purple-600 p-4 items-center">
        <Image src="/logo2.png" width={40} height={40} alt="Logo" />
        <h1 className="ml-4 font-bold text-white text-lg">Saung IT</h1>
      </div>
      <div className="bg-white shadow-lg m-4 rounded-lg p-4">
        {menu?.map((item, index) => {
          const Icon = item.icon;
          return (
            <Link
              href={item.path}
              key={index}
              className={`flex items-center p-2 my-2 rounded-md transition-colors duration-300 ${
                item.path === pathname
                  ? "bg-purple-600 text-white shadow-lg"
                  : "hover:bg-gray-100"
              }`}
            >
              <Icon color={item.path === pathname ? "#fff" : "#333"} />
              <span className="ml-4">{item.name}</span>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default SidebarNav;
