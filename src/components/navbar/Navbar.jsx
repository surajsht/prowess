import { useRef, useState } from "react";
import { NavData } from "./NavData";
import { FaSearch } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { UseCustomContext } from "../../context/Context";
import "./navbar.css";

const Navbar = () => {
  let [navContainerState, setNavContainerState] = useState(false);

  let { setSearchPopupState } = UseCustomContext();

  let navContainerRef = useRef(null);

  let openCloseNavbar = () => {
    if (!navContainerRef.current.classList.contains("active")) {
      setNavContainerState(true);
      let navLinkDetailsHeight =
        navContainerRef.current.querySelector(".nav-link-details").offsetHeight;
      navContainerRef.current.style.height = navLinkDetailsHeight + "px";
      navContainerRef.current.style.boxShadow =
        "0px 3px 14px 3px rgba(0, 0, 0, 0.14)";
    } else {
      setNavContainerState(false);
      navContainerRef.current.style.height = 0;
      navContainerRef.current.style.boxShadow = "none";
    }
  };

  return (
    <nav className="navbar">
      <div className="wrapper">
        <div className="nav-content">
          <img src="/logo.png" alt="" />

          <div className="nav-details">
            <div
              className={`nav-link-container ${
                navContainerState ? "active" : ""
              }`}
              ref={navContainerRef}
            >
              <ul className="nav-link-details">
                {NavData.map((item) => {
                  let { id, link } = item;

                  return <li key={id}> {link} </li>;
                })}
              </ul>
            </div>

            <div className="nav-btn-group">
              <FaSearch onClick={() => setSearchPopupState(true)} />
              <FaBars onClick={openCloseNavbar} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
