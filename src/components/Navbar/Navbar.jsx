import SearchBar from "../SearchBar/SearchBar";
import logo from '../../assets/logo.svg'
import notification from '../../assets/notification-bell.svg'
import { Link } from "react-router-dom";
import LanguageDropdown from "../LanguageDropdown/LanguageDropdown";
function Navbar() {
  const languages = [
    { icon: upload, name: "English(EN)" },
    { icon: upload, name: "Francais(FR)" },
    { icon: upload, name: "Nederlands(NL)" },
    { icon: upload, name: "Espanol(ES)" },
    { icon: upload, name: "Deutsch(DE)" },
  ];
  const routes = [
   
    {
      path: 'dashboard',
      name:'Dashboard'
    },
     {
      path: '/',
      name:'Trainings'
    },
    {
      path: '/users',
      name:'Users'
    },

  ]
  return (<nav className=" flex flex-row items-center justify-between p-2">
    <img src={logo} alt="logo-newelec" />
    <SearchBar />
    <ul className="flex flex-row items-center justify-center gap-4">
      {routes.map(element => (<li key={element}><Link to={element.path}>{element.name}</Link></li>))}
      <li>More</li>

    </ul>
    <img src={notification} alt="notification" />
   <LanguageDropdown dropdownOptions={languages} />
  </nav>);
}

export default Navbar;
