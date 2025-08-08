
import { motion } from "framer-motion";
import { Link } from "react-router";

const currentYear = new Date().getFullYear();

const Footer = () => (

 
  <motion.footer
    initial={{ opacity: 0, y: 24 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-green-900 text-gray-100 pt-25 pb-5 px-4 "
  >
    

    <div className="max-w-7xl mx-auto">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-6 border-b border-green-700">
      {/* Brand & About */}
      <div>
        <Link to="/" className="text-2xl font-bold tracking-tight text-green-200">
           SouqFresh
        </Link>
        <p className="mt-3 text-sm text-green-100 max-w-xs">
          Your local online marketplace for fresh groceries from trusted vendors in Doha.
        </p>
      </div>
      {/* Quick Links */}
      <div>
        <h4 className="text-lg font-semibold mb-2 text-green-100">Quick Links</h4>
        <ul className="space-y-2">
          <li><Link to="/" className="hover:underline">Home</Link></li>
          <li><Link to="/about" className="hover:underline">About Us</Link></li>
          <li><Link to="/vendors" className="hover:underline">Vendors</Link></li>
          <li><Link to="/contact" className="hover:underline">Contact</Link></li>
        </ul>
      </div>
      {/* Buyer Links */}
      <div>
        <h4 className="text-lg font-semibold mb-2 text-green-100">For Buyers</h4>
        <ul className="space-y-2">
          <li><Link to="/products" className="hover:underline">Browse Products</Link></li>
          <li><Link to="/cart" className="hover:underline">Your Cart</Link></li>
          <li><Link to="/wishlist" className="hover:underline">Wishlist</Link></li>
          <li><Link to="/account" className="hover:underline">My Account</Link></li>
        </ul>
      </div>
      {/* Vendor Links */}
      <div>
        <h4 className="text-lg font-semibold mb-2 text-green-100">For Vendors</h4>
        <ul className="space-y-2">
          <li><Link to="/auth/vendor-register" className="hover:underline">Become a Vendor</Link></li>
          <li><Link to="/dashboard" className="hover:underline">Vendor Dashboard</Link></li>
          <li><Link to="/support" className="hover:underline">Support</Link></li>
        </ul>
      </div>
    </div>
    </div>
    {/* Bottom Bar */}
    <div className="flex flex-col md:flex-row items-center justify-between mt-6 text-green-200 gap-2">
      <span>
        &copy; {currentYear} SouqFresh. All rights reserved.
      </span>
      <div className="flex space-x-4">
        <Link to="/privacy" className="hover:underline">Privacy Policy</Link>
        <Link to="/terms" className="hover:underline">Terms of Service</Link>
      </div>
      </div>
    </div>

  </motion.footer>
     
);

export default Footer;
