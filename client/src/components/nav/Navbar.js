import {Nav} from 'react-bootstrap';
import { NavLink} from "react-router-dom";

function NavList() {
  return (
    <Nav defaultActiveKey="/"  as="ul">
      <Nav.Item as="li">
        <NavLink to="/" className="nav-link">Home</NavLink>
      </Nav.Item>
      <Nav.Item as="li">
        <NavLink to="/About" className="nav-link">About</NavLink>
      </Nav.Item>
      <Nav.Item as="li"><NavLink to="/contact" className="nav-link">Contact</NavLink>
      </Nav.Item>
    </Nav>
  );
}

export default NavList;