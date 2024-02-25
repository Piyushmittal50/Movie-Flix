import React, { useEffect } from 'react'
import { useState } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate,useLocation} from 'react-router-dom';
import { auth } from '../utils/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { SUPPORTED_LANGUAGES, netflix_logo } from '../utils/mockData';
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';
const Header = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const user = useSelector(store => store.user);
  const showGptSearch = useSelector(store => store.gpt.showGptSearch);
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
      setShowDropdown(!showDropdown);
  };
  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };
    const handleSignOut = () => {
      // Implement sign-out logic here
      signOut(auth)
        .then(() => {
        })
        .catch(() => {
          navigate("/error");
        });
  };

      useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          if (user) {
            // for sign in / sign up
            const { uid, email, displayName, photoURL } = user;
            dispatch(
              addUser({
                uid: uid,
                email: email,
                displayName: displayName,
                photoURL: photoURL,
              })
            );
            navigate("/browse");
          } else {
            // sign out
            dispatch(removeUser());
            navigate("/");
          }
        });
        return () => unsubscribe();
      }, []);

  const renderUserIcon = () => {
    if (user  && location.pathname === '/browse') {
      return (
        <button className="flex items-center" onClick={toggleDropdown}>
          <img className="w-12 py-3 mr-5" src={user.photoURL} alt="user-icon" />
          <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
            <path d="M10 12l-6-6h12l-6 6z" />
          </svg>
        </button>
      );
    }
    return null;
  };

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
      <img className="w-44 mx-auto md:mx-0" src={netflix_logo} alt="logo" />

      <div className="flex">
        {showGptSearch && (
          <select
            className="p-2 m-3 rounded-lg cursor-pointer bg-blue-600 text-white font-semibold px-3"
            onChange={handleLanguageChange}
          >
            {SUPPORTED_LANGUAGES.map((lang) => (
              <option key={lang.identifier} value={lang.identifier}>
                {lang.name}
              </option>
            ))}
          </select>
        )}
        {user && 
          <button
            className="py-2 px-4 text-white rounded-lg bg-purple-700 my-3 mr-10 font-semibold"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? "HomePage" : "GPT Search"}
          </button>
        }
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