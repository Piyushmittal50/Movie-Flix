import React from 'react'
import { user_icon } from '../utils/mockData'
import { useState } from 'react';
import { signOut } from 'firebase/auth';
import { useNavigate,useLocation} from 'react-router-dom';
import { auth } from '../utils/firebase';
import { useSelector } from 'react-redux';

const Header = () => {
  
  const navigate = useNavigate();
  const location = useLocation();
  const user = useSelector(store => store.user);
  const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
      setShowDropdown(!showDropdown);
    };

    const handleSignOut = () => {
      // Implement sign-out logic here
      signOut(auth)
        .then(() => {
          navigate("/");
        })
        .catch(() => {
          navigate("/error");
        });
  };

  const renderUserIcon = () => {
    if (user  && location.pathname === '/browse') {
      return (
        <button className="flex items-center" onClick={toggleDropdown}>
          <img className="w-12 py-3 mr-5" src={user_icon} alt="user-icon" />
          <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
            <path d="M10 12l-6-6h12l-6 6z" />
          </svg>
        </button>
      );
    }
    return null;
  };

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-44"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      <div className="relative">
        {renderUserIcon()}
        {showDropdown && (
          <div className="absolute right-0 mt-2 w-56 origin-top-right rounded-md shadow-lg bg-white">
            <div className="py-1">
              <button
                className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                onClick={handleSignOut}
              >
                Sign Out
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;