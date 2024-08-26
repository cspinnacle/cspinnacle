"use client"
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">
          <Link href="/">MyNextApp</Link>
        </div>
        <div className="block lg:hidden">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="text-white hover:text-gray-400"
          >
            ☰
          </button>
        </div>
        <ul className="lg:flex space-x-4 text-white hidden lg:flex">
          <li>
            <Link href="/" className="hover:text-gray-400">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-gray-400">
              About
            </Link>
          </li>
          <li
            className="relative group"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <button className="hover:text-gray-400 inline-flex items-center">Grades ▼</button>
            {isDropdownOpen && (
              <div className="relative">
              {/* <div
                className="inline-flex items-center overflow-hidden rounded-md border bg-white dark:border-gray-800 dark:bg-gray-900"
              >
                <a
                  href="#"
                  className="px-4 py-2 text-sm/none text-gray-600 hover:bg-gray-50 hover:text-gray-700 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                >
                  Edit
                </a>
            
                <button
                  className="h-full border-e p-2 text-gray-600 hover:bg-gray-50 hover:text-gray-700 dark:border-e-gray-800 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                >
                  <span className="sr-only">Menu</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div> */}
            
              <div
                className="absolute end-0 z-10 mt-2 w-56 divide-y divide-gray-100 rounded-md border border-gray-100 bg-white shadow-lg dark:divide-gray-800 dark:border-gray-800 dark:bg-gray-900"
                role="menu"
              >
                <div className="p-2">
                  <strong className="block p-2 text-xs font-medium uppercase text-gray-400 dark:text-gray-500">
                    General
                  </strong>
            
                  <a
                    href="#"
                    className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300"
                    role="menuitem"
                  >
                    View on Storefront
                  </a>
            
                  <a
                    href="#"
                    className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300"
                    role="menuitem"
                  >
                    View Warehouse Info
                  </a>
            
                  <a
                    href="#"
                    className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300"
                    role="menuitem"
                  >
                    Duplicate Product
                  </a>
            
                  <a
                    href="#"
                    className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300"
                    role="menuitem"
                  >
                    Unpublish Product
                  </a>
                </div>
            
                <div className="p-2">
                  <strong className="block p-2 text-xs font-medium uppercase text-gray-400 dark:text-gray-500">
                    Danger Zone
                  </strong>
            
                  <form method="POST" action="#">
                    <button
                      type="submit"
                      className="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-sm text-red-700 hover:bg-red-50 dark:text-red-500 dark:hover:bg-red-600/10"
                      role="menuitem"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
            
                      Delete Product
                    </button>
                  </form>
                </div>
              </div>
            </div>
            )}
          </li>
          <li>
            <Link href="/contact" className="hover:text-gray-400">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;




