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
    <nav className=" flex flex-row items-center justify-between py-2 px-48 bg-red-500">
      <img src={logo} alt="logo-newelec" />
      <SearchBar />
      <ul className="flex flex-row items-center justify-center gap-4">
        {routes.map((element) => (
          <li key={element.path}>
            <Link to={element.path}>{element.name}</Link>
          </li>
        ))}
        <li>More</li>
      </ul>
      <img src={notification} alt="notification" />
      <LanguageDropdown dropdownOptions={languages} />
      <SettingsDropdown dropdownOptions={settings} />
    </nav>
  );
}

export default Navbar;
