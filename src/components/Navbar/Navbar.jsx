import SearchBar from "../SearchBar/SearchBar";
import logo from '../../assets/logo.svg'
import { Link } from "react-router-dom";
function Navbar() {
  const routes = [
    {
      path: '/',
      name:'Trainings'
    },
    {
      path: 'dashboard',
      name:'Dashboard'
    },
    {
      path: '/users',
      name:'Users'
    },

  ]
  return (<nav className="bg-red-300 flex flex-row items-center justify-between">
    <img src={logo} alt="" />
    <SearchBar />
    <ul>
      {routes.map(element => ( <li key={element}><Link to={element.path}>{element.path}</Link></li>))}
     
    </ul>
  </nav>);
}

export default Navbar;
