const Footer = () => {
  return (
    <footer className="mx-10  border-t-2 border-0 py-12 border-gray-300 flex justify-between lg:mx-24">
      <div className="flex flex-col items-center justify-center">
        <img src="/logo.png" width={300} height={300} alt="" />
        <p className="text-center">CV Saung Information Technology</p>
        <p className="text-center">
          JL Raya, Dukuh Bandung, Bumiayu, Kec. Bumiayu, Kabupaten Brebes, Jawa
          Tengah 52273
        </p>
      </div>
      <div className="flex justify-center space-x-4 mt-4">
        <ul>
          <li className="hover:text-gray-300">About</li>
          <li className="hover:text-gray-300">Contact</li>
          <li className="hover:text-gray-300">Privacy Policy</li>
        </ul>
      </div>
      <div className="container mx-auto text-center">
        <p>&copy; 2024 Saung IT. All rights reserved.</p>
      </div>
    </footer>
  );
};
export default Footer;
