"use client";
import Link from "next/link";
import React from "react";

const Navbar = () => {
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
  const navlist = [
    {
      name: "Learning Path",
      path: "/learning-path",
    },
    {
      name: "Tentang Kami",
      path: "#tentang",
    },
    {
      name: "Program",
      path: "#kursus",
    },
    {
      name: "Lainnya",
      path: "/",
    },
  ];
  return (
    <nav
      className={`p-4 flex justify-between items-center transition-all duration-300 ${
        isScrolled
          ? "px-24 py-0 fixed top-0 left-0 w-full bg-white shadow-lg"
          : "relative"
      }`}
    >
      <div className="text-white text-lg font-bold">
        <Link href="/">
          <img
            src="/logo.png"
            alt="Saung IT Bumiayu"
            width={100}
            height={100}
          />
        </Link>
      </div>
      <ul className="flex">
        {navlist?.map((list) => (
          <li key={list.name} className="font-bold mx-10">
            <Link href={list.path}>
              <span>{list.name}</span>
            </Link>
          </li>
        ))}
      </ul>
      <div className="font-bold">
        <button>
          <Link href="/login">
            <span className="border border-2 border-slate-800 px-8 py-4">
              Login
            </span>
          </Link>
        </button>
        <button>
          <Link href="/register-siswa">
            <span className="text-white ml-4 bg-slate-800 px-8 py-4">
              Daftar
            </span>
          </Link>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
