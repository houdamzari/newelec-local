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
  logoutIcon,
} from "../../assets";
import { Link } from "react-router-dom";
import LanguageDropdown from "../LanguageDropdown/LanguageDropdown";
import SettingsDropdown from "../SettingsDropdown/SettingsDropdown";
import Flex from "../Flex/Flex";
import Dropdown from "../Dropdown/Dropdown";
function Navbar() {
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
  const category = [
    { icon: "", option: "Lorem" },
    { icon: "", option: "Lorem" },
  ];
  const routes = [
    {
      path: "dashboard",
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
      gap={"gap-[10px]"}
      className=" px-16"
    >
      <Flex
        flexDirection={"flex-row"}
        justifyContent={"justify-start"}
        alignItems={"items-center"}
        className="bg-green-400 px-16"
        gap={"gap-[10px]"}
      >
        <img src={logo} alt="logo-newelec" />
        <SearchBar />
      </Flex>
      <ul className="flex flex-row items-center justify-center gap-4">
        {routes.map((element) => (
          <li key={element.name}>
            <Link to={element.path}>{element.name}</Link>
          </li>
        ))}
        <li>More</li>
        <Dropdown label="More" dropdownOptions={category} />
      </ul>
      <Flex
        flexDirection={"flex-row"}
        justifyContent={"justify-between"}
        alignItems={"items-center"}
        gap={"gap-[10px]"}
      >
        <img src={notification} alt="notification" className="w-6" />
        <LanguageDropdown dropdownOptions={languages} />
        <SettingsDropdown dropdownOptions={settings} />
      </Flex>
    </Flex>
  );
}

export default Navbar;
