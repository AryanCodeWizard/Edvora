import { FaFacebook, FaGoogle, FaHeart, FaTwitter, FaYoutube } from "react-icons/fa";

import { FooterLink2 } from "../../data/footer-links";
import { Link } from "react-router-dom";
// Images
import Logo from "../../assets/Logo/Logo-Full-Light.png";
import React from "react";

const BottomFooter = ["Privacy Policy", "Cookie Policy", "Terms"];
const Resources = [
  "Articles",
  "Blog",
  "Chart Sheet",
  "Code challenges",
  "Docs",
  "Projects",
  "Videos",
  "Workspaces",
];
const Plans = ["Paid memberships", "For students", "Business solutions"];
const Community = ["Forums", "Chapters", "Events"];

const Footer = () => {
  return (
    <div className="bg-gradient-to-b from-richblack-800 to-richblack-900 border-t border-richblack-700">
      <div className="flex flex-col lg:flex-row gap-12 items-start justify-between w-11/12 max-w-maxContent text-richblack-300 leading-6 mx-auto relative py-16">
        
        {/* Main Footer Content */}
        <div className="w-full flex flex-col lg:flex-row gap-12 lg:gap-8 pb-8">
          
          {/* Section 1 - Left Side */}
          <div className="lg:w-[50%] flex flex-wrap flex-row justify-between lg:border-r lg:border-richblack-700 lg:pr-12 gap-8">
            
            {/* Company & Social */}
            <div className="w-full md:w-[45%] lg:w-[30%] flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <img 
                  src={Logo} 
                  alt="Edvora Logo" 
                  className="object-contain w-40 h-auto filter brightness-0 invert opacity-90"
                />
                <p className="text-richblack-100 text-sm leading-6">
                  Empowering learners worldwide with quality education and cutting-edge resources.
                </p>
              </div>
              
              <div className="flex flex-col gap-3">
                <h3 className="text-richblack-50 font-bold text-lg">Company</h3>
                <div className="flex flex-col gap-3">
                  {["About", "Careers", "Affiliates"].map((ele, i) => (
                    <Link
                      key={i}
                      to={ele.toLowerCase()}
                      className="text-richblack-300 hover:text-yellow-50 transition-all duration-200 text-sm font-medium hover:translate-x-1 transform"
                    >
                      {ele}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="flex flex-col gap-3">
                <h3 className="text-richblack-50 font-bold text-lg">Follow Us</h3>
                <div className="flex gap-4 text-xl">
                  {[
                    { Icon: FaFacebook, color: "hover:text-blue-500" },
                    { Icon: FaGoogle, color: "hover:text-red-500" },
                    { Icon: FaTwitter, color: "hover:text-blue-400" },
                    { Icon: FaYoutube, color: "hover:text-red-600" }
                  ].map(({ Icon, color }, index) => (
                    <Link
                      key={index}
                      to="#"
                      className={`text-richblack-400 ${color} transition-all duration-300 transform hover:scale-110 hover:-translate-y-0.5`}
                    >
                      <Icon />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Resources & Support */}
            <div className="w-full md:w-[45%] lg:w-[30%] flex flex-col gap-8">
              <div className="flex flex-col gap-3">
                <h3 className="text-richblack-50 font-bold text-lg">Resources</h3>
                <div className="flex flex-col gap-3">
                  {Resources.map((ele, index) => (
                    <Link
                      key={index}
                      to={ele.split(" ").join("-").toLowerCase()}
                      className="text-richblack-300 hover:text-yellow-50 transition-all duration-200 text-sm font-medium hover:translate-x-1 transform"
                    >
                      {ele}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <h3 className="text-richblack-50 font-bold text-lg">Support</h3>
                <Link
                  to={"/help-center"}
                  className="text-richblack-300 hover:text-yellow-50 transition-all duration-200 text-sm font-medium hover:translate-x-1 transform"
                >
                  Help Center
                </Link>
              </div>
            </div>

            {/* Plans & Community */}
            <div className="w-full md:w-[45%] lg:w-[30%] flex flex-col gap-8">
              <div className="flex flex-col gap-3">
                <h3 className="text-richblack-50 font-bold text-lg">Plans</h3>
                <div className="flex flex-col gap-3">
                  {Plans.map((ele, index) => (
                    <Link
                      key={index}
                      to={ele.split(" ").join("-").toLowerCase()}
                      className="text-richblack-300 hover:text-yellow-50 transition-all duration-200 text-sm font-medium hover:translate-x-1 transform"
                    >
                      {ele}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <h3 className="text-richblack-50 font-bold text-lg">Community</h3>
                <div className="flex flex-col gap-3">
                  {Community.map((ele, index) => (
                    <Link
                      key={index}
                      to={ele.split(" ").join("-").toLowerCase()}
                      className="text-richblack-300 hover:text-yellow-50 transition-all duration-200 text-sm font-medium hover:translate-x-1 transform"
                    >
                      {ele}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Section 2 - Right Side */}
          <div className="lg:w-[50%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:pl-4">
            {FooterLink2.map((ele, i) => (
              <div key={i} className="flex flex-col gap-4">
                <h3 className="text-richblack-50 font-bold text-lg">{ele.title}</h3>
                <div className="flex flex-col gap-3">
                  {ele.links.map((link, index) => (
                    <Link
                      key={index}
                      to={link.link}
                      className="text-richblack-300 hover:text-yellow-50 transition-all duration-200 text-sm font-medium hover:translate-x-1 transform"
                    >
                      {link.title}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-richblack-700">
        <div className="flex flex-col lg:flex-row items-center justify-between w-11/12 max-w-maxContent mx-auto py-8 gap-6 text-sm">
          
          {/* Legal Links */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            {BottomFooter.map((ele, i) => (
              <Link
                key={i}
                to={ele.split(" ").join("-").toLowerCase()}
                className="text-richblack-400 hover:text-yellow-50 transition-all duration-200 px-3 py-1 rounded-lg hover:bg-richblack-700 font-medium text-xs uppercase tracking-wide"
              >
                {ele}
              </Link>
            ))}
          </div>

          {/* Copyright */}
          <div className="flex items-center gap-2 text-richblack-300 font-medium">
            <span>Made with</span>
            <FaHeart className="text-red-500 animate-pulse" />
            <span>by Edvora</span>
            <span className="text-richblack-400">© 2023 Edvora</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;