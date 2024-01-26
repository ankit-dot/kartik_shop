import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <div>
        <img
          src="./startupConnectLogo.png"
          alt=""
          className="h-[40px] w-[40px]"
        />
        <p className="navbar_logo_text">
          <span className="purple_navbar_logo_text">Dry</span> Cleaning
        </p>
      </div>
      <nav ref={navRef}>
        <a href="/#">Home</a>
        <a href="/#">About</a>
        <a href="/#">Services</a>
        <a href="/#">Pricing</a>
        <a href="/#">Contact US</a>
        
        
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
