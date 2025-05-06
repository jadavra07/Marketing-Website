import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-3" : "bg-transparent py-6"
      }`}
    >
      <div className="container-width section-padding flex justify-between items-center">
        <NavLink to="/" className="flex items-center">
          <span className="font-montserrat font-bold text-2xl text-noor-brown">
            Noor <span className="text-noor-gold">Digital Marketing</span>
          </span>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "font-medium text-noor-gold"
                : "font-medium text-gray-700 hover:text-noor-gold transition-base"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "font-medium text-noor-gold"
                : "font-medium text-gray-700 hover:text-noor-gold transition-base"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive
                ? "font-medium text-noor-gold"
                : "font-medium text-gray-700 hover:text-noor-gold transition-base"
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              isActive
                ? "font-medium text-noor-gold"
                : "font-medium text-gray-700 hover:text-noor-gold transition-base"
            }
          >
            Blog
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "font-medium text-noor-gold"
                : "font-medium text-gray-700 hover:text-noor-gold transition-base"
            }
          >
            Contact
          </NavLink>
          <Button className="bg-noor-gold hover:bg-opacity-90" size="sm">
            Get a Quote
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-noor-brown"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md py-4 px-6">
          <nav className="flex flex-col space-y-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "font-medium text-noor-gold py-2"
                  : "font-medium text-gray-700 hover:text-noor-gold py-2 transition-base"
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "font-medium text-noor-gold py-2"
                  : "font-medium text-gray-700 hover:text-noor-gold py-2 transition-base"
              }
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive
                  ? "font-medium text-noor-gold py-2"
                  : "font-medium text-gray-700 hover:text-noor-gold py-2 transition-base"
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </NavLink>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                isActive
                  ? "font-medium text-noor-gold py-2"
                  : "font-medium text-gray-700 hover:text-noor-gold py-2 transition-base"
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "font-medium text-noor-gold py-2"
                  : "font-medium text-gray-700 hover:text-noor-gold py-2 transition-base"
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </NavLink>
            <Button
              className="bg-noor-gold hover:bg-opacity-90 w-full"
              size="sm"
              onClick={() => setIsMenuOpen(false)}
            >
              Get a Quote
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
