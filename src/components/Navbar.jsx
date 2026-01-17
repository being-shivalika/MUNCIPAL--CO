import React from "react";
import { useLocation, Link } from "react-router-dom";
import { Menu, Bell, User } from "lucide-react";

const Navbar = ({ onToggleSidebar }) => {
  const location = useLocation();

  const isAdminPage = location.pathname.startsWith("/admin");
  const isCitizenPage = location.pathname.startsWith("/citizen");
  const MainHero = location.pathname === "/";

  return (
    <nav className="navbar bg-blue-950 text-white shadow-md px-4 py-2 sticky top-0 z-100">
      <div className="navbar-start flex items-center">
        <button
          onClick={onToggleSidebar}
          className="btn btn-ghost btn-circle mr-2 hover:bg-indigo-800 text-white"
        >
          <Menu size={24} />
        </button>

        <div className="ml-2">
          <Link to="/" className="flex flex-col">
            <span className="text-lg md:text-xl font-bold font-serif leading-none">
              Municipal Corporation
            </span>
            <span className="text-[10px] uppercase tracking-widest text-indigo-300 hidden sm:block">
              Civic Services Portal
            </span>
          </Link>
        </div>
      </div>

      <div className="navbar-end gap-2 md:gap-4">
        {!isAdminPage && (
          <div className="hidden sm:flex items-center gap-4 mr-2">
            <Link
              to="/"
              className="text-sm font-semibold hover:text-amber-300 transition-colors"
            >
              Home
            </Link>
            <Link
              to="/citizen"
              className="text-sm font-semibold hover:text-amber-300 transition-colors"
            >
              Complaints
            </Link>
          </div>
        )}

        <div className="flex items-center gap-2">
          {(isAdminPage || isCitizenPage) && (
            <Link to="/track">
              <button className="btn btn-ghost btn-circle btn-sm text-white">
                <div className="indicator">
                  <Bell size={20} />
                  <span className="badge badge-xs badge-error indicator-item"></span>
                </div>
              </button>
            </Link>
          )}

          {isAdminPage ? (
            <div className="flex items-center gap-2 ml-2 border-l border-indigo-700 pl-4">
              <span className="text-xs font-bold hidden md:block text-amber-400">
                ADMIN
              </span>
              <div className="avatar placeholder">
                <div className="bg-indigo-700 text-neutral-content content-center pl-1.5 rounded-full w-8">
                  <User size={20} />
                </div>
              </div>
            </div>
          ) : (
            <Link to="/login">
              <button className="btn btn-sm md:btn-md bg-amber-500 hover:bg-amber-600 text-white font-bold px-6 shadow-lg rounded-xl hover:border-amber-50 hover:shadow-black">
                Sign In
              </button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
