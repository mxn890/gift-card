import React from 'react';
import { FaCcVisa, FaCcMastercard, FaPaypal, FaApple, FaBitcoin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-purple-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About ZakGifs</h3>
            <p className="text-gray-300 text-sm">
              Your trusted destination for digital gift cards from top brands worldwide.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Help</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Refund Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Ways to Pay</h3>
            <div className="flex flex-wrap gap-4">
              <span className="text-2xl text-gray-300 hover:text-white transition-colors" title="Visa">
                <FaCcVisa />
              </span>
              <span className="text-2xl text-gray-300 hover:text-white transition-colors" title="Mastercard">
                <FaCcMastercard />
              </span>
              <span className="text-2xl text-gray-300 hover:text-white transition-colors" title="PayPal">
                <FaPaypal />
              </span>
              <span className="text-2xl text-gray-300 hover:text-white transition-colors" title="Apple Pay">
                <FaApple />
              </span>
              <span className="text-2xl text-gray-300 hover:text-white transition-colors" title="Bitcoin">
                <FaBitcoin />
              </span>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300 text-sm">
            © 2024 ZakGifs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;