import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ThemeBtn from '../ThemeBtn/ThemeBtn';

export default function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen(prev => !prev);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    const handleScroll = () => {
      setIsOpen(false);
    };

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="block py-2 pr-4 pl-3 duration-200 text-gray-700 hover:text-orange-700 lg:p-0"
      >
        More ▾
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 origin-top-right rounded-md bg-white dark:bg-slate-700 shadow-lg ring-1 ring-black ring-opacity-5 z-50">
          <div className="py-1">
            <Link
              to="/projects"
              className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 dark:hover:bg-slate-800 hover:bg-gray-100"
            >
              Projects
            </Link>
            <Link
              to="/blogs"
              className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 dark:hover:bg-slate-800 hover:bg-gray-100"
            >
              Blogs
            </Link>

            {/* Theme Toggle */}
            <div className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-slate-800 cursor-default">
              <ThemeBtn />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
