import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

function NavBar() {
  const [isMobileNavActive, setMobileNavActive] = useState(false);
  const location = useLocation();

  const toggleMobileNav = () => {
    setMobileNavActive((prev) => !prev);
    document.body.classList.toggle("mobile-nav-active");
  };

  const closeMobileNav = () => {
    setMobileNavActive(false);
    document.body.classList.remove("mobile-nav-active");
  };

  const navLinks = [
    { path: "/home", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/privacy", label: "Privacy" },
    { path: "/services", label: "Services" },
    { path: "/properties", label: "Properties" },
  ];

  return (
    <header id="header" className="header d-flex align-items-center fixed-top">
      <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
        <a href="/" className="logo d-flex align-items-center">
          <h1 className="sitename">
            HK<span>Realty</span>
          </h1>
        </a>

        <nav id="navmenu" className={`navmenu ${isMobileNavActive ? "active" : ""}`}>
          <ul>
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.path}
                  className={location.pathname === link.path ? "active" : ""}
                  onClick={closeMobileNav}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <a href="#" onClick={closeMobileNav}>
                Contact
              </a>
            </li>
          </ul>
          <i
            className={`mobile-nav-toggle d-xl-none bi ${
              isMobileNavActive ? "bi-x" : "bi-list"
            }`}
            onClick={toggleMobileNav}
          ></i>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
