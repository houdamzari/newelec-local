import { useState } from 'react'
import SearchBar from "../SearchBar/SearchBar";
import { logo, notification, germany, english, nederlands, spain, france, settingsIcon, policies, greyArrow ,arrow} from '../../assets'
import { Link } from "react-router-dom";
import LanguageDropdown from "../LanguageDropdown/LanguageDropdown";
import SettingsDropdown from "../SettingsDropdown/SettingsDropdown";
import Flex from "../Flex/Flex";
import Dropdown from "../Dropdown/Dropdown";
import useClickOutside from "../../hooks/useClickOutside";
import { useLocation } from "react-router-dom";
function Navbar() {
  const location = useLocation();
  console.log(location.pathname)
  const ref = useClickOutside(()=> setOpen(false))
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
  const  [open, setOpen] = useState(false);
  const  [active, setActive] = useState(false);
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
      gap={"gap-[10px]"}
      className=' px-16'>
      <img src={logo} alt="logo-newelec"  className="w-fit "/>

      <Flex flexDirection={"flex-row"}
        justifyContent={"justify-start"}
        alignItems={"items-center"}
              className='w-[60%]'

        gap={"gap-8"}>
        <SearchBar />
         <ul className="flex flex-row items-center gap-4 w-fit ">
          {routes.map(element => (<li key={element}><Link to={element.path}><button onClick={() => setActive(!active)} className={` ${location.pathname === element.path ? 'text-textColor-blue' : 'text-textColor-lightGrey'}`} >{element.name}</button></Link></li>))}
        <li ref={ref}>
          <button className="flex flex-row items-center gap-2  text-textColor-lightGrey" onClick={()=>setOpen(!open)}>More <img src={greyArrow} alt="arrow"  /></button>
         {open && <div className="absolute top-12 bg-white p-3 rounded shadow-md">
            <div>Option 1</div>
            <div>Option 2</div>
          </div>}
</li>
      </ul>
      </Flex>
     
      <Flex flexDirection={"flex-row"}
        justifyContent={"justify-between"}
        alignItems={"items-center"}
        gap={"gap-[15px]"}>
        <img src={notification} alt="notification" className="w-6"/>
        <LanguageDropdown dropdownOptions={languages} />
        <SettingsDropdown dropdownOptions={settings} />
      </Flex>
    </Flex>
  );
}

export default Navbar;
