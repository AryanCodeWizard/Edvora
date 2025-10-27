import { Link, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";

import { GrCart } from "react-icons/gr";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { NavbarLinks } from "../../data/navbar-links";
import ProfileDropDown from "../core/Auth/ProfileDropDown";
import { apiConnector } from "../../services/apiConnector";
import { categories } from "../../services/apis";
import logo from "../../assets/Logo/Logo-Full-Light.png";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const { totalItems } = useSelector((state) => state.cart);

  const [subLinks, setSubLinks] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ Fetch categories on mount
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await apiConnector("GET", categories.CATEGORIES_API);
        console.log("✅ Categories API Response:", res.data);
        setSubLinks(res?.data?.data || []);
      } catch (error) {
        console.error("❌ Could not fetch categories:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCategories();
  }, []);

  const location = useLocation();
  const matchRoute = (route) => location.pathname === route;

  return (
    <div className="flex h-14 items-center justify-center border-b border-richblack-400 bg-richblack-900 z-50">
      <div className="flex w-11/12 max-w-maxContent justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <img
            // src={logo}
            width={160}
            height={32}
            loading="lazy"
            // alt="Study Notion Logo"
            className="mt-1"
          />
        </Link>

        {/* Navigation Links */}
        <nav>
          <ul className="flex gap-x-6 text-richblack-25 mt-2">
            {NavbarLinks.map((link, index) => (
              <li key={index}>
                {link.title === "Catalog" ? (
                  <div className="relative flex items-center gap-2 group cursor-pointer">
                    <p>{link.title}</p>
                    <IoIosArrowDropdownCircle />

                    {/* Dropdown */}
                    <div className="absolute left-1/2 top-full mt-2 -translate-x-1/2 flex flex-col rounded-md bg-richblack-5 p-4 text-richblack-900 shadow-lg 
                                    transition-all duration-300 ease-in-out opacity-0 scale-95 invisible 
                                    group-hover:visible group-hover:opacity-100 group-hover:scale-100 lg:w-[300px]">
                      
                      {/* Small triangle pointer */}
                      <div className="absolute left-1/2 -translate-x-1/2 -translate-y-2 top-0 h-4 w-4 rotate-45 rounded-sm bg-richblack-5"></div>

                      {loading ? (
                        <div className="text-sm text-richblack-400 px-3 py-2">
                          Loading...
                        </div>
                      ) : subLinks.length ? (
                        subLinks.map((sublink, idx) => (
                          <Link
                            // ✅ Make sure these match your API keys
                            to={`/catalog/${sublink.name}`} 
                            key={sublink._id || idx}
                            className="px-3 py-2 rounded-md hover:bg-yellow-100 hover:text-richblack-900 transition"
                          >
                            {sublink.name}
                          </Link>
                        ))
                      ) : (
                        <div className="text-sm text-richblack-400 px-3 py-2">
                          No categories
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  <Link to={link?.path}>
                    <p
                      className={`${
                        matchRoute(link?.path)
                          ? "text-yellow-50"
                          : "text-richblack-50"
                      } hover:text-yellow-50 transition`}
                    >
                      {link?.title}
                    </p>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Auth / Dashboard / Cart */}
        <div className="flex gap-x-6 items-center">
          {user && user.accountType !== "Instructor" && (
            <Link to="/dashboard/cart" className="relative flex items-center">
              <GrCart className="text-2xl text-richblack-25 hover:text-yellow-50 transition" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-white text-xs font-semibold shadow">
                  {totalItems}
                </span>
              )}
            </Link>
          )}

          {token === null && (
            <Link to="/login">
              <button className="px-4 py-2 rounded-lg bg-richblack-800 text-richblack-25 border border-richblack-600 hover:bg-richblack-700 transition">
                Log in
              </button>
            </Link>
          )}

          {token === null && (
            <Link to="/signup">
              <button className="px-4 py-2 rounded-lg bg-yellow-50 text-richblack-900 font-semibold hover:bg-yellow-100 transition">
                Sign up
              </button>
            </Link>
          )}

          {token !== null && <ProfileDropDown />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
