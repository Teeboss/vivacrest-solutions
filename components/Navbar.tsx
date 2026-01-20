import React, { useState } from "react";
// import logo from "../public/images/logo.png"
interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDark, toggleTheme }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-surface-light/90 dark:bg-surface-dark/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Area */}
          <div className="flex items-center gap-3">
            <img
              alt="VivaCrest Logo"
              className="h-10 w-10 rounded-full object-cover"
              src="/images/logo.png"
            />
            <span className="font-display font-bold text-2xl text-primary dark:text-white transition-colors">
              VivaCrest
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#services"
              className="text-sm font-medium hover:text-primary dark:hover:text-white transition-colors"
            >
              Services
            </a>
            <a
              href="#product"
              className="text-sm font-medium hover:text-primary dark:hover:text-white transition-colors"
            >
              Platform
            </a>
            <a
              href="#industries"
              className="text-sm font-medium hover:text-primary dark:hover:text-white transition-colors"
            >
              Industries
            </a>
            <a
              href="#contact"
              className="px-5 py-2.5 bg-primary text-white rounded-full font-medium text-sm hover:bg-opacity-90 transition-all shadow-lg hover:shadow-primary/30"
            >
              Get in Touch
            </a>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-500 dark:text-slate-400"
              aria-label="Toggle Dark Mode"
            >
              <span
                className={`material-symbols-outlined ${isDark ? "hidden" : "block"}`}
              >
                dark_mode
              </span>
              <span
                className={`material-symbols-outlined ${isDark ? "block" : "hidden"}`}
              >
                light_mode
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleTheme}
              className="mr-4 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-500 dark:text-slate-400"
            >
              <span
                className={`material-symbols-outlined ${isDark ? "hidden" : "block"}`}
              >
                dark_mode
              </span>
              <span
                className={`material-symbols-outlined ${isDark ? "block" : "hidden"}`}
              >
                light_mode
              </span>
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-500 dark:text-slate-300 hover:text-primary"
            >
              <span className="material-symbols-outlined text-3xl">menu</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-surface-light dark:bg-surface-dark border-t border-slate-200 dark:border-slate-800 px-4 pt-2 pb-6 shadow-lg">
          <div className="flex flex-col space-y-4 mt-4">
            <a
              href="#services"
              className="text-base font-medium hover:text-primary dark:hover:text-white transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#product"
              className="text-base font-medium hover:text-primary dark:hover:text-white transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Platform
            </a>
            <a
              href="#industries"
              className="text-base font-medium hover:text-primary dark:hover:text-white transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Industries
            </a>
            <a
              href="#contact"
              className="inline-block w-full text-center px-5 py-3 bg-primary text-white rounded-lg font-medium hover:bg-opacity-90 transition-all"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
