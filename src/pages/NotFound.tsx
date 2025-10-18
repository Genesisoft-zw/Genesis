import React from "react";
import { Link } from "react-router-dom";
import { Home, ArrowLeft, Search } from "lucide-react";
import { Helmet } from "react-helmet-async";

export function NotFound() {
  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | Genesisoft</title>
        <meta
          name="description"
          content="The page you're looking for doesn't exist."
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300 flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
        <div className="max-w-2xl w-full text-center">
          {/* 404 Animation */}
          <div className="relative mb-8">
            <h1 className="text-[150px] md:text-[200px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 leading-none animate-pulse">
              404
            </h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <Search className="w-16 h-16 md:w-24 md:h-24 text-gray-400 dark:text-gray-600 animate-bounce" />
            </div>
          </div>

          {/* Message */}
          <div className="space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
              Oops! Page Not Found
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 transition-colors duration-300">
              The page you're looking for seems to have vanished into the
              digital void.
            </p>
            <p className="text-base text-gray-500 dark:text-gray-400 transition-colors duration-300">
              Don't worry, even the best explorers get lost sometimes!
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/"
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 text-white font-semibold rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105"
            >
              <Home className="w-5 h-5 mr-2" />
              Back to Home
            </Link>

            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center px-6 py-3 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-semibold rounded-lg shadow-lg border-2 border-gray-200 dark:border-gray-700 transform transition-all duration-300 hover:scale-105"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Go Back
            </button>
          </div>

          {/* Quick Links */}
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Quick links to help you find your way:
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/about"
                className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors duration-300"
              >
                About Us
              </Link>
              <span className="text-gray-300 dark:text-gray-600">•</span>
              <a
                href="/#services"
                className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors duration-300"
              >
                Our Services
              </a>
              <span className="text-gray-300 dark:text-gray-600">•</span>
              <a
                href="/#contact"
                className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors duration-300"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
