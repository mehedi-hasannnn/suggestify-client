import { Link, NavLink } from "react-router-dom";
import logo from '../assets/logo1.png';
import { useContext, useEffect, useState, useCallback } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";
import { AuthContext } from "../context/AuthProvider";
import { Tooltip as ReactTooltip } from 'react-tooltip';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  // Memoized links generation
  const getLinks = useCallback((isAuthenticated) => {
    const baseLink = "hover:text-[#540b75] transition-colors duration-200";
    const commonLinks = (
      <>
        <NavLink to="/" className={baseLink} onClick={() => setOpen(false)}>Home</NavLink>
        <NavLink to="/all-queries" className={baseLink} onClick={() => setOpen(false)}>Queries</NavLink>
        <NavLink to='/about' className={baseLink} onClick={() => setOpen(false)}>About Us</NavLink>
      </>
    );

    if (!isAuthenticated) return commonLinks;

    return (
      <>
        {commonLinks}
        <NavLink to="/recommandation-me" className={baseLink} onClick={() => setOpen(false)}>Recommendations For Me</NavLink>
        <NavLink to="/my-queries" className={baseLink} onClick={() => setOpen(false)}>My Queries</NavLink>
        <NavLink to="/my-recommandation" className={baseLink} onClick={() => setOpen(false)}>My recommendations</NavLink>
      </>
    );
  }, []);

  const handleToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (open && !event.target.closest('.mobile-menu-container')) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [open]);

  return (
    <div className="navbar fixed top-0 left-0 w-full z-50 bg-white shadow-md md:px-10 py-2">
      <div className="navbar-start">
        <div className="relative mobile-menu-container">
          <button
            onClick={() => setOpen(!open)}
            className="btn btn-sm !px-1.5 text-xl lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <IoCloseSharp /> : <IoMdMenu />}
          </button>

          {open && (
            <div 
              id="mobile-menu"
              className="absolute top-12 left-0 w-56 bg-white shadow-lg rounded-box z-50 p-4 space-y-3"
            >
              <div className="flex flex-col gap-3 font-semibold">
                {getLinks(!!user)}
              </div>
            </div>
          )}
        </div>
        
        <Link to='/' className="flex gap-1 items-center">
          <img 
            className="sm:w-10 sm:h-10 w-8 h-8 ml-1 rounded-full" 
            src={logo} 
            alt="Suggestify Logo" 
          />
          <p className="font-bold ml-2 text-2xl text-[#540b75]">Suggestify</p>
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <div className="flex gap-5 font-semibold">
          {getLinks(!!user)}
        </div>
      </div>

      <div className="navbar-end flex items-center gap-4">
        {user?.photoURL && (
          <div className="flex flex-col items-center">
            <img
              data-tooltip-id="user-tooltip"
              data-tooltip-content={user?.displayName || "No username available"}
              className="w-10 h-10 rounded-full"
              src={user?.photoURL}
              alt="User profile"
              referrerPolicy="no-referrer"
            />
            <ReactTooltip id="user-tooltip" place="left" type="dark" effect="float" />
          </div>
        )}

        {user?.email ? (
          <button 
            onClick={logOut} 
            className="btn btn-sm font-semibold ml-3 hover:bg-[#540b75] hover:text-white transition-colors duration-200"
          >
            Log-Out
          </button>
        ) : (
          <Link 
            to="/auth/login" 
            className="btn btn-sm font-semibold ml-3 hover:bg-[#540b75] hover:text-white transition-colors duration-200"
          >
            Login
          </Link>
        )}

        <ThemeToggle theme={theme} handleToggle={handleToggle} />
      </div>
    </div>
  );
};

// Extracted ThemeToggle component
const ThemeToggle = ({ theme, handleToggle }) => (
  <label className="swap swap-rotate ml-3">
    <input
      type="checkbox"
      onChange={handleToggle}
      checked={theme === "light"}
      className="theme-controller"
    />
    <svg
      className="swap-on h-8 w-8 fill-current"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
    </svg>
    <svg
      className="swap-off h-8 w-8 fill-current"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
    </svg>
  </label>
);

export default Navbar;