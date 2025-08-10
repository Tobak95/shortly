import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import { IoMdMenu } from "react-icons/io";
import { MdOutlineClose } from "react-icons/md";
import { navLinks } from "../../data";

const Nav = () => {
  const [showHamburger, setShowHamburger] = useState(false);

  return (
    <nav className="bg-[var()]">
      <div className="layout flex items-center justify-between p-4 h-[105px]">
        <div className="flex items-center justify-between gap-12 ">
          <div>
            <img src={logo} alt="....." />
          </div>

          <div className="hidden lg:flex items-center justify-between">
            {navLinks.map((link, index) => {
              return (
                <div
                  key={index}
                  to={link.routes}
                  className=" text-[var(--Gray500)] hover:text-black px-2 font-bold cursor-pointer "
                >
                  {link.title}
                </div>
              );
            })}
          </div>
        </div>

        <div className="hidden lg:flex items-center justify-between gap-5 font-bold ">
          <button className="text-[var(--Gray500)]  hover:text-black">
            Login
          </button>

          <button className="bg-[var(--Blue400)] rounded-full px-5 py-1 text-white font-semibold cursor-pointer hover:bg-[var(--Blue200)]">
            Sign Up
          </button>
        </div>

        {showHamburger ? (
          <MdOutlineClose
            className="text-[48px] text-[var(--Gray500)] lg:hidden cursor-pointer"
            onClick={() => setShowHamburger(!showHamburger)}
          />
        ) : (
          <IoMdMenu
            className="text-[48px] text-[var(--Gray500)] lg:hidden cursor-pointer"
            onClick={() => setShowHamburger(!showHamburger)}
          />
        )}

        {showHamburger && (
          <div className="absolute top-[90px] w-[350px] flex justify-center h-[420px] items-center right-5 bg-[var(--Purple950)] rounded-2xl text-[26px] z-5 lg:hidden">
            <ul className="flex flex-col items-center gap-4 mb-7 ">
              {navLinks.map((link, index) => {
                return (
                  <li
                    key={index}
                    to={link.routes}
                    className="text-white hover:text-[var(--Gray400)] px-2 font-bold cursor-pointer "
                  >
                    {link.title}
                  </li>
                );
              })}

              <div className="flex flex-col w-[350px] mt-5 ">
                <hr className="w-70 mx-auto  border-gray-300 " />
                <button className="text-white hover:text-[var(--Gray400)] px-2 font-bold cursor-pointer mt-5">
                  Login
                </button>
                <button className="bg-[var(--Blue400)] rounded-full text-white font-semibold cursor-pointer mt-4 py-2 mx-6 w-auto">
                  Sign Up
                </button>
              </div>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
