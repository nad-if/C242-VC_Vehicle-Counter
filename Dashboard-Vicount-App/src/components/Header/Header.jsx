import React, { useState, useEffect } from "react";
import { ChevronDown, User, Settings, LogOut } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { generateBreadcrumb } from "../../handler/Breadcumb";
import ApiClient from "../../api/apiClient";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const { data } = await ApiClient.get(`users/${localStorage.getItem('user')}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('authToken')}`,
          },
        });
        setUserData(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (localStorage.getItem('authToken') && localStorage.getItem('user')) {
      fetchUserData();
    } else {
      setIsLoading(false);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    navigate('/login');
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <header className="sticky top-0 z-10 w-full bg-white border-b border-gray-200">
      <div className="flex items-center justify-between h-16 px-6 mt-[-2px]">
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-sm text-gray-600 sm:flex-wrap">
            {generateBreadcrumb(location.pathname)}
          </ol>
        </nav>

        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(prev => !prev)}
            className="flex items-center space-x-3 hover:bg-gray-50 rounded-lg p-2 transition-colors duration-200"
          >
            <div className="hidden lg:block text-right">
              {userData && (
                <>
                  <div className="text-sm font-medium text-gray-900">{userData.fullname}</div>
                  <div className="text-xs text-gray-500">{userData.role}</div>
                </>
              )}
            </div>
            <img
              src="/assets/profile/bruce-mars.jpg"
              alt="User"
              className="h-8 w-8 rounded-full"
            />
            <ChevronDown
              className={`hidden sm:block transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`}
              size={16}
            />
          </button>

          {isDropdownOpen && (
            <div className="absolute right-0 z-100 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
              <div className="py-1">
                {userData && (
                  <div className="block lg:hidden px-4 py-2 text-sm text-gray-700">
                    <div className="text-sm font-medium text-gray-900">{userData.fullname}</div>
                    <div className="text-xs text-gray-500">{userData.role}</div>
                    <hr className="my-2" />
                  </div>
                )}
                <Link
                  to="/profile"
                  className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  <User className="mr-3 h-4 w-4" />
                  My Profile
                </Link>
                <Link
                  to={`/editAccount/${userData.id}`}
                  className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  <Settings className="mr-3 h-4 w-4" />
                  Account Settings
                </Link>
                <button
                  onClick={handleLogout}
                  className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                >
                  <LogOut className="mr-3 h-4 w-4" />
                  Log Out
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
