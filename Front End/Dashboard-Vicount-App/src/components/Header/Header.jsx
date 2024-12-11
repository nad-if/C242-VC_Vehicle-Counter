import React, { useState } from "react";
import { ChevronDown, User, Settings, LogOut } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
// Import handler
import { generateBreadcrumb } from "../../handler/Breadcumb";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-10 w-full bg-white border-b border-gray-200">
      <div className="flex items-center justify-between h-16 px-6 mt-[-2px]">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-sm text-gray-600 sm:flex-wrap">
            {generateBreadcrumb(location.pathname)}
          </ol>
        </nav>

        {/* User Profile */}
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center space-x-3 hover:bg-gray-50 rounded-lg p-2 transition-colors duration-200"
          >
            {/* Nama hanya muncul pada layar besar */}
            <div className="hidden lg:block text-right">
              <div className="text-sm font-medium text-gray-900">
                User
              </div>
              <div className="text-xs text-gray-500">Cloud Engineer</div>
            </div>
            <img
              src="./src/assets/logo.png"
              alt="User"
              className="h-8 w-8 rounded-full"
            />
            <ChevronDown
              className={`hidden sm:block transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""
                }`}
              size={16}
            />
          </button>

          {isDropdownOpen && (
            <div className="absolute right-0 z-100 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
              <div className="py-1">
                {/* Nama dan Detail Profile hanya untuk layar kecil */}
                <div className="block lg:hidden px-4 py-2 text-sm text-gray-700">
                  <div className="text-sm font-medium text-gray-900">
                    Thomas Anree
                  </div>
                  <div className="text-xs text-gray-500">UX Designer</div>
                  <hr className="my-2" />
                </div>

                {/* Tombol Profil */}
                <Link
                  to="/profile"
                  className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  <User className="mr-3 h-4 w-4" />
                  My Profile
                </Link>
                <Link
                  to="/settings"
                  className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  <Settings className="mr-3 h-4 w-4" />
                  Account Settings
                </Link>
                {/* Tombol Keluar */}
                <Link
                  to="/auth/login"
                  className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  <LogOut className="mr-3 h-4 w-4" />
                  Log Out
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
