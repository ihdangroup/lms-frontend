import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 flex justify-between items-center">
      <div className="text-white text-lg font-bold">
        <img src="/logo.png" alt="Saung IT Bumiayu" className="h-12 inline" />
      </div>
      <ul className="flex space-x-4">
        <li>
          <Link href="#home">
            <span className="text-white">Home</span>
          </Link>
        </li>
        <li>
          <Link href="#about">
            <span className="text-white">About Us</span>
          </Link>
        </li>
        <li>
          <Link href="/browse">
            <span className="text-white">Courses</span>
          </Link>
        </li>
        <li>
          <Link href="#contact">
            <span className="text-white">Contact</span>
          </Link>
        </li>
        <li>
          <Link href="#login">
            <span className="text-white">Login</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
