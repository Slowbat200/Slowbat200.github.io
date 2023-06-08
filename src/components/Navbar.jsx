import React, { useState } from "react";
import styles from "../style";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-lightBlue">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Hamburger menu */}
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white xs:hover:transition xs:hover:duration-700 xs:hover:ease-in-out"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          {/* Desktop navigation links */}
          <div className="hidden sm:block sm:ml-6">
            <div className="flex space-x-4">
              <a
                href="#"
                className={`${styles.desktopLinkstyles} ${styles.xsTransition}`}
              >
                Domů
              </a>
              <a
                href="#"
                className={`${styles.desktopLinkstyles} ${styles.xsTransition}`}
              >
                Teorie
              </a>
              <a
                href="#"
                className={`${styles.desktopLinkstyles} ${styles.xsTransition}`}
              >
                HTML
              </a>
              <a
                href="#"
                className={`${styles.desktopLinkstyles} ${styles.xsTransition}`}
              >
                CSS
              </a>
              <a
                href="#"
                className={`${styles.desktopLinkstyles} ${styles.xsTransition}`}
              >
                Javascript
              </a>
              <a
                href="#"
                className={`${styles.desktopLinkstyles} ${styles.xsTransition}`}
              >
                Tailwind
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile navigation menu */}
      <div
        className={`${isOpen ? "block" : "hidden"} sm:hidden`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a
            href="#"
            className={`${styles.mobileLinkStyles} ${styles.xsTransition}`}
          >
            Domů
          </a>
          <a
            href="#"
            className={`${styles.mobileLinkStyles} ${styles.xsTransition}`}
          >
            Teorie
          </a>
          <a
            href="#"
            className={`${styles.mobileLinkStyles} ${styles.xsTransition}`}
          >
            HTML
          </a>
          <a
            href="#"
            className={`${styles.mobileLinkStyles} ${styles.xsTransition}`}
          >
            CSS
          </a>
          <a
            href="#"
            className={`${styles.mobileLinkStyles} ${styles.xsTransition}`}
          >
            JavaScript
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
