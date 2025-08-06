import * as React from "react";
import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const pages = [
  { name: "Teams", path: "/teams" },
  { name: "Drivers", path: "/drivers" },
  { name: "F1 Race", path: "/f1-race" },
  { name: "Schedule", path: "/schedule" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Đóng menu mobile khi chuyển route
  React.useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const toggleMenu = () => setMenuOpen((open) => !open);

  return (
    <nav
      // className="relative bg-gradient-to-r from-gray-900 via-black to-gray-900 px-6 py-4 shadow-2xl "
      className="relative px-6 py-4 "
      style={{ fontFamily: "'Racing Sans One', sans-serif" }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 10px,
              rgba(255,255,255,0.1) 10px,
              rgba(255,255,255,0.1) 11px
            )`,
          }}
        ></div>
      </div>

      <div className="relative z-10">
        {/* Logo & Desktop menu trên cùng một hàng */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <NavLink to="/teams" className="flex-shrink-0">
            <img
              src="/src/assets/images/logo.png"
              alt="Logo"
              className="h-10"
              style={{ background: "none" }}
            />
          </NavLink>
          {/* Desktop menu */}
          <div className="hidden md:flex flex-1 justify-center items-center space-x-12">
            {pages.map((page) => (
              <NavLink
                key={page.name}
                to={page.path}
                className={({ isActive }) =>
                  `relative group px-6 py-2 text-lg font-semibold transition-all duration-300 ${
                    isActive
                      ? "text-red-400 after:content-[''] after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-24 after:h-0.5 after:bg-gradient-to-r after:from-red-500 after:to-red-400 after:rounded-full after:transition-all after:duration-500"
                      : "text-gray-300 hover:text-white"
                  }`
                }
              >
                {page.name}
              </NavLink>
            ))}
          </div>
          {/* Sign In button (desktop) */}
          <div className="hidden md:flex ml-6">
            <button className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 to-red-400 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative bg-black border border-red-500/50 text-red-400 px-6 py-2.5 rounded-lg transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-red-600 group-hover:to-red-500 group-hover:text-white group-hover:border-transparent">
                <span className="font-semibold">Sign In</span>
              </div>
            </button>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden ml-2">
            <button
              onClick={toggleMenu}
              className="relative text-white p-2 rounded-lg hover:bg-red-900/20 transition-all duration-300 group"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span
                  className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                    menuOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
                  }`}
                ></span>
                <span
                  className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
                    menuOpen ? "opacity-0" : "opacity-100"
                  }`}
                ></span>
                <span
                  className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                    menuOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>
        {/* ...Mobile menu giữ nguyên... */}
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="relative mt-6 pt-6 border-t border-red-900/30">
          <div className="absolute inset-0 bg-gradient-to-b from-red-900/5 to-transparent"></div>
          <div className="relative space-y-2">
            {pages.map((page) => (
              <NavLink
                key={page.name}
                to={page.path}
                className={({ isActive }) =>
                  `block w-full text-left px-4 py-3 rounded-lg text-lg font-semibold transition-all duration-300 ${
                    isActive
                      ? "bg-red-900/20 text-red-400 border-l-4 border-red-500"
                      : "text-gray-300 hover:text-white hover:bg-red-900/10"
                  }`
                }
              >
                {page.name}
              </NavLink>
            ))}

            {/* Mobile Sign In */}
            <div className="pt-4 mt-4 border-t border-red-900/30">
              <button className="w-full group">
                <div className="relative bg-gradient-to-r from-red-600 to-red-500 text-white px-4 py-3 rounded-lg transition-all duration-300 group-hover:from-red-700 group-hover:to-red-600 group-hover:shadow-lg group-hover:shadow-red-500/25">
                  <span className="font-semibold">Sign In</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
