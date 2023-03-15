import React, { useState } from "react";
import { cross, logo } from "../../../assets";
import { Link } from "react-router-dom";
function MobileNav({ routes }) {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
      <div
        onClick={() => setOpenMenu(!openMenu)}
        className="flex flex-col cursor-pointer h-full desktop:hidden  mobile:visible justify-center items-end gap-1"
      >
        <div className="h-1 w-8 bg-grey rounded-md" />
        <div className="h-1 w-6 bg-grey rounded-md" />
        <div className="h-1 w-4 bg-grey rounded-md" />
      </div>

      <div
        className={`fixed ${
          openMenu ? "w-full h-screen opacity-1" : "w-0 h-0 opacity-0"
        } top-0 left-0 bg-white z-[9999999] p-8 overflow-hidden transition-all`}
      >
        <div className="flex flex-row justify-between items-center">
          <img src={logo} alt="logo" />
          <img
            className="w-[19px] cursor-pointer"
            onClick={() => setOpenMenu(false)}
            src={cross}
            alt="cross"
          />
        </div>
        <ul className="flex flex-col justify-center mt-8 items-start">
          {routes.map((element) => (
            <li key={element.path}>
              <Link to={element.path}>
                <button
                  onClick={() => setActive(!active)}
                  className={`text-xl ${
                    location.pathname === element.path
                      ? "text-textColor-blue"
                      : "text-textColor-lightGrey"
                  }`}
                >
                  {element.name}
                </button>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default MobileNav;
