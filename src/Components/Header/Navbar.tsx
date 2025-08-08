import { motion } from "framer-motion";
import { Link, NavLink } from "react-router";
import { Heart, ShoppingCart, User } from "lucide-react";
import Logo from "../Logo/Logo";
import useAuth from "../../Hooks/useAuth";



export default function Navbar() {
  const {user} = useAuth()

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className="bg-white shadow-sm sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-5">
        <div className="container">
        <div className="flex items-center justify-between h-16">
          {/* LEFT: Logo */}
          <motion.div
            whileHover={{ scale: 1.08 }}
            className="flex-shrink-0"
          >
            <Link to="/" aria-label="Go to homepage">
              {/* <img
                src= {Logo}
                alt="SouqFresh Logo"
                className="h-9 w-auto"
              /> */}
            <Logo></Logo>
         
            </Link>
          </motion.div>

          {/* MIDDLE: Menu */}
          <div className="hidden md:flex space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `font-medium transition-colors ${
                  isActive
                    ? "text-green-700"
                    : "text-gray-700 hover:text-green-600"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `font-medium transition-colors ${
                  isActive
                    ? "text-green-700"
                    : "text-gray-700 hover:text-green-600"
                }`
              }
            >
              About Us
            </NavLink>
            {/* Add more links as needed */}
          </div>

          {/* RIGHT: Icons */}
          <div className="flex items-center space-x-3">
            {/* Wishlist */}
            <Link
              to="/wishlist"
              aria-label="View wishlist"
              className="relative p-2 rounded-full hover:bg-gray-100 focus:outline-none focus-visible:ring-2 ring-green-300"
            >
              <Heart className="w-6 h-6 text-gray-600" />
            </Link>
            {/* Cart */}
            <Link
              to="/cart"
              aria-label="View cart"
              className="relative p-2 rounded-full hover:bg-gray-100 focus:outline-none focus-visible:ring-2 ring-green-300"
            >
              <ShoppingCart className="w-6 h-6 text-gray-600" />
            </Link>
            {/* User */}
            <Link
              to="/profile"
              aria-label="User menu"
              className="relative p-2 rounded-full hover:bg-gray-100 focus:outline-none focus-visible:ring-2 ring-green-300"
            >
              <User className="w-6 h-6 text-gray-600" />
            </Link>
            {/* Login/Logout - Example static button, handle state as needed */}
            <Link
              to="/auth/login"
              className="ml-2 px-4 py-2 rounded bg-green-600 text-white font-semibold hover:bg-green-700 transition-colors"
            >
              Login
            </Link>
            {/* If logged in, show logout button instead */}
            {/* <button ...>Logout</button> */}
          </div>

          {/* MOBILE: Hamburger Menu */}
          <div className="md:hidden flex items-center">
            {/* Implement mobile menu if desired */}
            {/* ... */}
          </div>
        </div>
        </div>
      </div>
    </nav>
  );
}
