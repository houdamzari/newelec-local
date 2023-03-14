import SearchBar from "../SearchBar/SearchBar";
import {logo,notification,germany,english,nederlands,spain,france} from '../../assets'
import { Link } from "react-router-dom";
import LanguageDropdown from "../LanguageDropdown/LanguageDropdown";

function Navbar() {
  const languages = [
    { icon: english, name: "English(EN)" },
    { icon: france, name: "Francais(FR)" },
    { icon: nederlands, name: "Nederlands(NL)" },
    { icon: spain, name: "Espanol(ES)" },
    { icon: germany, name: "Deutsch(DE)" },
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
