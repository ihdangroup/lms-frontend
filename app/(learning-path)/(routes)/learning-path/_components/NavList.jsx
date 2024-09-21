"use client";
import Link from "next/link";
import React from "react";

const NavList = ({ navlist, handleList }) => {
  const [isScrolled, setIsScrolled] = React.useState(false);

  // Event listener untuk scroll
  React.useEffect(() => {
    const handleScroll = () => {
      // Jika scroll lebih dari 50px, ubah state
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener saat komponen di-unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`p-4 flex border justify-center items-center transition-all duration-300 ${
        isScrolled
          ? "px-24 py-0 fixed top-0 left-0 w-full bg-white shadow-lg"
          : "relative"
      }`}
    >
      <ul className="flex">
        {navlist?.map((list) => (
          <li key={list.name} className="font-bold mx-10">
            <button onClick={() => handleList(list.tag)}>
              <span>{list.name}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavList;
