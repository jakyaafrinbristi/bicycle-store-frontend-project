import { FaFacebookF, FaTwitter, FaLinkedinIn, FaHome, FaInfoCircle, FaPhoneAlt, FaServicestack } from 'react-icons/fa'; // Social Media Icons

export function Footer() {
  return (
    <footer className="py-8 mt-8 bg-gray-100 text-black dark:bg-gray-900 dark:text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row justify-between items-center">
        {/* Logo Section */}
        <div className="text-center lg:text-left mb-6 lg:mb-0">
          <span className="font-bold text-2xl">TaskMaster</span>
        </div>

        {/* Links Section */}
        <div className="flex flex-wrap justify-center gap-8 mb-6 lg:mb-0">
          <a href="/" className="hover:text-teal-400 flex items-center gap-2">
            <FaHome /> Home
          </a>
          <a href="/about" className="hover:text-teal-400 flex items-center gap-2">
            <FaInfoCircle/> About
          </a>
          <a href="/contact" className="hover:text-teal-400 flex items-center gap-2">
            <FaPhoneAlt /> Contact
          </a>
          <a href="/services" className="hover:text-teal-400 flex items-center gap-2">
            <FaServicestack /> Services
          </a>
        </div>

        {/* Social Media Section */}
        <div className="flex space-x-6 mb-6 lg:mb-0">
          <div className="text-teal-400 hover:bg-teal-500 p-2 rounded-full">
            <FaFacebookF size={20} />
          </div>
          <div className="text-teal-400 hover:bg-teal-500 p-2 rounded-full">
            <FaTwitter size={20} />
          </div>
          <div className="text-teal-400 hover:bg-teal-500 p-2 rounded-full">
            <FaLinkedinIn size={20} />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-teal-600 text-center py-4">
        <p className="text-sm">© 2025 TaskMaster. All rights reserved.</p>
      </div>
    </footer>
  );
}
