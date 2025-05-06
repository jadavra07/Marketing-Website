import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-noor-darkBrown text-white pt-16 pb-8">
      <div className="container-width section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Noor digital Marketing</h3>
            <p className="text-noor-lightGray mb-6">
              Transforming businesses through innovative digital marketing
              strategies and creative solutions.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-white bg-opacity-10 hover:bg-opacity-20 p-2 rounded-full transition-base"
                aria-label="Twitter"
              >
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z" />
                </svg>
              </a>
              <a
                href="#"
                className="bg-white bg-opacity-10 hover:bg-opacity-20 p-2 rounded-full transition-base"
                aria-label="LinkedIn"
              >
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="#"
                className="bg-white bg-opacity-10 hover:bg-opacity-20 p-2 rounded-full transition-base"
                aria-label="Facebook"
              >
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="#"
                className="bg-white bg-opacity-10 hover:bg-opacity-20 p-2 rounded-full transition-base"
                aria-label="Instagram"
              >
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <NavLink
                  to="/"
                  className="text-noor-lightGray hover:text-noor-beige transition-base"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className="text-noor-lightGray hover:text-noor-beige transition-base"
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services"
                  className="text-noor-lightGray hover:text-noor-beige transition-base"
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blog"
                  className="text-noor-lightGray hover:text-noor-beige transition-base"
                >
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className="text-noor-lightGray hover:text-noor-beige transition-base"
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <a
                  href="#"
                  className="text-noor-lightGray hover:text-noor-beige transition-base"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin
                  className="text-noor-beige mt-1 flex-shrink-0"
                  size={18}
                />
                <p className="text-noor-lightGray">
                  Ahmedabad
                  <br />
                  Gujarat, India
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-noor-beige flex-shrink-0" size={18} />
                <a
                  href="tel:+916351220752"
                  className="text-noor-lightGray hover:text-noor-beige transition-base"
                >
                  +91 6351220752
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-noor-beige flex-shrink-0" size={18} />
                <a
                  href="mailto:hitenjadavra3@gmail.com"
                  className="text-noor-lightGray hover:text-noor-beige transition-base"
                >
                  hitenjadavra3@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="text-noor-lightGray mb-4">
              Subscribe to our newsletter for the latest news and insights.
            </p>
            <form className="space-y-2" onSubmit={(e) => e.preventDefault()}>
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-white bg-opacity-10 border-0 text-white placeholder:text-gray-400 focus:ring-noor-gold"
              />
              <Button className="w-full bg-noor-gold hover:bg-opacity-90">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-noor-lightGray">
            © {new Date().getFullYear()} Noor Digital Marketing. All rights
            reserved.
            <br />
            Developed by{" "}
            <a
              href="https://www.linkedin.com/in/hiten-jadavra"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hiten Jadavra
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
