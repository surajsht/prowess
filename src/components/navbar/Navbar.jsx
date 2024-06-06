import { NavData } from "./NavData";
import { FaSearch } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="wrapper">
        <div className="nav-content">
          <img src="/logo.png" alt="" />

          <div className="nav-details">
            <ul className="nav-link-container">
              {NavData.map((item) => {
                let { id, link } = item;

                return <li key={id}> {link} </li>;
              })}
            </ul>

            <div className="nav-btn-group">
              <FaSearch />
              <FaBars />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
