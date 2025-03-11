import { Link } from "react-router-dom";
import {
  BrainCircuit,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <BrainCircuit className="h-7 w-7 text-blue-400" />
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                AutoHire.AI
              </span>
            </Link>
            <p className="text-sm text-gray-400 mb-4">
              Revolutionizing recruitment with AI-powered solutions that match
              the right talent with the right opportunities.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com"
                className="text-gray-400 hover:text-blue-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.twitter.com"
                className="text-gray-400 hover:text-blue-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.facebook.com"
                className="text-gray-400 hover:text-blue-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.instagram.com"
                className="text-gray-400 hover:text-blue-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/features"
                  className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  to="/testimonials"
                  className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Resources</h3>
            <ul className="space-y-2">
              <li>
                <button
                  className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Blog
                </button>
              </li>
              <li>
                <button
                  className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Case Studies
                </button>
              </li>
              <li>
                <button
                  className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Documentation
                </button>
              </li>
              <li>
                <button
                  className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Help Center
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Mail size={18} className="text-blue-400 mt-0.5" />
                <span className="text-sm text-gray-400">
                  contact@autohire.ai
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone size={18} className="text-blue-400 mt-0.5" />
                <span className="text-sm text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-blue-400 mt-0.5" />
                <span className="text-sm text-gray-400">
                  123 Innovation Drive, San Francisco, CA 94103
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} AutoHire.AI. All rights
              reserved.
            </p>
            <div className="flex space-x-6">
              <button
                className="text-sm text-gray-500 hover:text-blue-400 transition-colors"
              >
                Privacy Policy
              </button>
              <button
                className="text-sm text-gray-500 hover:text-blue-400 transition-colors"
              >
                Terms of Service
              </button>
              <button
                className="text-sm text-gray-500 hover:text-blue-400 transition-colors"
              >
                Cookies
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
