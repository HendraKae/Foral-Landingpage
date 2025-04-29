import { useEffect, useState } from "react";
import logo from "../assets/images/svg/logo.svg";
import { FiMenu } from "react-icons/fi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      // Deteksi scroll ke bawah atau ke atas
      if (currentScroll > scrollTop) {
        setShowNavbar(false); // sembunyikan saat scroll ke bawah
      } else {
        setShowNavbar(true); // tampilkan saat scroll ke atas
      }

      setScrollTop(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollTop]);

  // Cek apakah di paling atas
  const isAtTop = scrollTop <= 10;

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 bg-white ${
        showNavbar ? "top-0 opacity-100" : "-top-20 opacity-0"
      } ${
        isAtTop ? "bg-transparent" : "bg-white/80 backdrop-blur-md shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <a href="#">
            <img src={logo} alt="Logo" className="w-32 md:w-40" />
          </a>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-6 items-center text-[16px] text-black">
          <li>
            <a href="#" className="hover:text-gray-700">
              Home
            </a>
          </li>
          <li>
            <a href="#project" className="hover:text-gray-700">
              Project
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-gray-700">
              About
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="bg-[#556b2f] text-white px-8 py-3 rounded-full hover:bg-[#455a1f] duration-300 ease-in-out"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Nav */}
        <div className="md:hidden flex items-center gap-3">
          <a
            href="#contact"
            className="bg-[#556b2f] text-white text-sm px-5 py-2 rounded-full hover:bg-[#455a1f] duration-300 ease-in-out"
          >
            Contact
          </a>
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl">
            <FiMenu />
          </button>
        </div>
      </div>

      {/* Dropdown Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-2 px-4 pb-3">
          <ul className="flex flex-col gap-3 text-sm text-black">
            <li>
              <a href="#" className="hover:text-gray-700">
                Home
              </a>
            </li>
            <li>
              <a href="#project" className="hover:text-gray-700">
                Project
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-gray-700">
                About
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
