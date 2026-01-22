import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import { MdHomeWork } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-neutral text-neutral-content">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold mb-3 text-white">
            <MdHomeWork /> Home Nest
          </h2>
          <p className="text-sm text-gray-300">
            Find your dream home with confidence. Trusted properties, verified
            listings, and secure deals.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="footer-title mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a className="link link-hover">Home</a></li>
            <li><a className="link link-hover">All Properties</a></li>
            <li><a className="link link-hover">Add Property</a></li>
            <li><a className="link link-hover">My Properties</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="footer-title mb-4">Support</h3>
          <ul className="space-y-2 text-sm">
            <li><a className="link link-hover">Help Center</a></li>
            <li><a className="link link-hover">Privacy Policy</a></li>
            <li><a className="link link-hover">Terms & Conditions</a></li>
            <li><a className="link link-hover">Contact Us</a></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="footer-title mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <a className="p-2 bg-white/10 rounded-full hover:bg-primary transition">
              <FaFacebookF />
            </a>
            <a className="p-2 bg-white/10 rounded-full hover:bg-primary transition">
              <FaTwitter />
            </a>
            <a className="p-2 bg-white/10 rounded-full hover:bg-primary transition">
              <FaYoutube />
            </a>
            <a className="p-2 bg-white/10 rounded-full hover:bg-primary transition">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} RealEstatePro. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;