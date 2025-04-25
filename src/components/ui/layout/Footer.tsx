import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaHome,
  FaInfoCircle,
  FaPhoneAlt,
} from "react-icons/fa";
import { Link } from "react-router";

export function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-black dark:text-white pt-12 pb-6 shadow-inner mt-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-10 items-center text-center lg:text-left">
        
    
        <div>
          <h2 className="text-3xl font-bold text-teal-600 mb-2">Bicycle Store</h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Ride. Explore. Repeat.
          </p>
        </div>

  
        <div className="space-y-2">
          <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
          <div className="flex flex-col gap-2">
            <Link to="/" className="flex items-center justify-center lg:justify-start gap-2 hover:text-teal-500 transition">
              <FaHome /> Home
            </Link>
            <Link to="/about" className="flex items-center justify-center lg:justify-start gap-2 hover:text-teal-500 transition">
              <FaInfoCircle /> About
            </Link>
            <Link to="/contact-us" className="flex items-center justify-center lg:justify-start gap-2 hover:text-teal-500 transition">
              <FaPhoneAlt />Contact
            </Link>
          </div>
        </div>

     
        <div>
          <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
          <div className="flex justify-center lg:justify-start space-x-4">
            <a href="#" className="text-white bg-teal-500 hover:bg-teal-600 p-2 rounded-full transition">
              <FaFacebookF size={18} />
            </a>
            <a href="#" className="text-white bg-teal-500 hover:bg-teal-600 p-2 rounded-full transition">
              <FaTwitter size={18} />
            </a>
            <a href="#" className="text-white bg-teal-500 hover:bg-teal-600 p-2 rounded-full transition">
              <FaLinkedinIn size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 border-t border-teal-600 pt-4 text-sm text-center text-gray-600 dark:text-gray-400">
        © 2025 Bicycle Store. All rights reserved.
      </div>
    </footer>
  );
}
