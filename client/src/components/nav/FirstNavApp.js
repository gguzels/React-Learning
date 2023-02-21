import NavList from "./Navbar";
import { Route, Routes} from "react-router-dom";
import { Home, About, Contact } from './PagesAll';

function FirstNavApp() {

    return (
        <div>
          <NavList/>
          <div className="container">
              <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/About' element={<About/>} />
                <Route path='/Contact' element={<Contact/>} />
              </Routes>
  
              
          </div>
        </div>
    );
  }

  export default FirstNavApp