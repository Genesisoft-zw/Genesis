import React from 'react';
import { Facebook, Linkedin, Instagram, Mail, } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {  faXTwitter } from '@fortawesome/free-brands-svg-icons';

export function Footer() {
  const { isDarkMode } = useTheme();
  
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img
                loading="lazy"
                src="/logo-white.svg"
                alt="Genesisoft Logo"
                className="h-8 mr-2"
              />
            </div>
            <p className="text-gray-400">
              Empowering businesses and individuals with innovative software
              solutions.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  About
                </Link>
              </li>
              <li>
                <a
                  href="/#services"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/#values"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Values
                </a>
              </li>
              <li>
                <a
                  href="/#contact"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Privacy Policy
                </Link>
              </li>{" "}
              {/* Add the new link */}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400">
                <Mail className="w-4 h-4 mr-2" />
                <a
                  href="mailto:info@genesisoft.co.zw"
                  className="hover:text-white transition-colors duration-300"
                >
                  info@genesisoft.co.zw
                </a>
              </li>
              <li className="text-gray-400">Harare, Zimbabwe</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a
                aria-label="Facebook"
                href="https://www.facebook.com/profile.php?id=61575020610088#"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                target="_blank"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                aria-label="X"
                href="https://x.com/genesisoft_"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                target="_blank"
              >
                <FontAwesomeIcon icon={faXTwitter} className="w-6 h-6" />
              </a>
              <a
                aria-label="LinkedIn"
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                aria-label="Instagram"
                href="https://www.instagram.com/genesisoft_"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                target='_blank'
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
            <div className="mt-6">
              <a
                href="/#newsletter"
                className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
              >
                Subscribe to our newsletter
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Genesisoft. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}