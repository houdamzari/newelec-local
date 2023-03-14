import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage";
import {Dashboard,Users,Trainings} from './pages/index' 
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout /> }  >
          <Route path='dashboard' element={<Dashboard /> }  />
          <Route path='/' element={<HomePage /> }  />
          <Route path='users' element={<Users /> }  />
          <Route path='trainings' element={<Trainings /> }  />
        </Route>
      </Routes>
   
    </>
  );
}

export default App;
