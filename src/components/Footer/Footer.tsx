import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-black to-gray-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">SoleMate</h2>
          <p className="mt-3 text-sm text-gray-400">
            Your perfect fit, every step of the way.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            {['Home', 'Shop', 'About', 'Contact'].map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="text-sm text-gray-300 hover:text-white transition-colors duration-200"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Get in Touch</h3>
          <div className="space-y-2 text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>support@solemate.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>+1 800 123 4567</span>
            </div>
            <div className="flex items-center gap-4 mt-4">
              <a href="#" aria-label="Facebook" className="hover:text-white">
                <Facebook className="w-5 h-5 text-gray-400 hover:text-white transition" />
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-white">
                <Instagram className="w-5 h-5 text-gray-400 hover:text-white transition" />
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-white">
                <Twitter className="w-5 h-5 text-gray-400 hover:text-white transition" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 text-center text-sm text-gray-500 py-6">
        &copy; {new Date().getFullYear()} SoleMate. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;