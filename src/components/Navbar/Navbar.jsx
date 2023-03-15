import { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import {
  logo,
  notification,
  germany,
  english,
  nederlands,
  spain,
  france,
  settingsIcon,
  policies,
  greyArrow,
} from "../../assets";
import { Link, useLocation } from "react-router-dom";
import { LanguageDropdown, SettingsDropdown, Flex } from "../../components";
import useClickOutside from "../../hooks/useClickOutside";
import MobileNav from "./MobileNav/MobileNav";
function Navbar() {
  const location = useLocation();
  const ref = useClickOutside(() => setOpen(false));
  const languages = [
    { icon: english, name: "English(EN)" },
    { icon: france, name: "Francais(FR)" },
    { icon: nederlands, name: "Nederlands(NL)" },
    { icon: spain, name: "Espanol(ES)" },
    { icon: germany, name: "Deutsch(DE)" },
  ];
  const settings = [
    { icon: settingsIcon, name: "Profile settings" },
    { icon: policies, name: "Our policies" },
  ];
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(false);
  const routes = [
    {
      path: "/dashboard",
      name: "Dashboard",
    },
    {
      path: "/",
      name: "Trainings",
    },
    {
      path: "/users",
      name: "Users",
    },
  ];
  return (
    <Flex
      flexDirection={"flex-row"}
      justifyContent={"justify-between"}
      alignItems={"items-center"}
      flexWrap={"flex-wrap"}
      gap={"gap-[10px]"}
      className="xs:px-2 px-16 bg-white shadow-lg mobile:py-4"
    >
      <div className="flex flex-row gap-2 items-center flex-wrap mobile:w-[200px]">
        <img src={logo} alt="logo-newelec" className="w-fit " />
        <div className="mobile:visible desktop:hidden">
          <SearchBar />
        </div>
      </div>

      <Flex
        flexDirection={"flex-row"}
        justifyContent={"justify-start"}
        alignItems={"items-center"}
        className="desktop:w-[60%] mobile:w-fit"
        gap={"gap-8"}
      >
        <div className="mobile:hidden w-[46%] desktop:visible">
          <SearchBar />
        </div>
        <ul className="flex flex-row items-center gap-4 w-fit flex-wrap mobile:hidden ">
          {routes.map((element) => (
            <li key={element.path}>
              <Link to={element.path}>
                <button
                  onClick={() => setActive(!active)}
                  className={` ${
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
          <li ref={ref}>
            <button
              className="flex flex-row items-center gap-2  text-textColor-lightGrey"
              onClick={() => setOpen(!open)}
            >
              More <img src={greyArrow} alt="arrow" />
            </button>
            {open && (
              <div className="absolute top-12 bg-white p-3 rounded shadow-md">
                <div>Option 1</div>
                <div>Option 2</div>
              </div>
            )}
          </li>
        </ul>
      </Flex>

      <Flex
        flexDirection={"flex-row"}
        justifyContent={"justify-between"}
        alignItems={"items-center"}
        className="w-fit"
        gap={"gap-[15px]"}
      >
        <MobileNav routes={routes} />
        <img src={notification} alt="notification" className="w-[15px]" />
        <LanguageDropdown dropdownOptions={languages} />
        <SettingsDropdown dropdownOptions={settings} />
      </Flex>
    </Flex>
  );
}

export default Navbar;
