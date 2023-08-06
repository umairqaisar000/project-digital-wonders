import Image from "next/image";
import { useState } from "react";
import styles from "./Navbar.module.scss";
import CompanyLogo from "src/assets/images/company-logo.svg";

interface NavbarProps {
  pathname: string;
}

const navbarContent = [
  { id: 1, label: "Home", path: "/home" },
  { id: 2, label: "Service", path: "/service" },
  { id: 3, label: "About", path: "/about" },
  { id: 4, label: "Contact", path: "/contact" },
  { id: 5, label: "How to Get Started", path: "/get-started" },
];

const Navbar: React.FC<NavbarProps> = ({ pathname }) => {
  const [navbarItems, setNavbarItems] = useState(navbarContent);

  return (
    <div className={styles["navbar-container"]}>
      <Image
        className={styles["organization-logo"]}
        src={CompanyLogo}
        alt="logo"
      />
      <div className={styles["vl"]}></div>
      <div className={styles["navbar-container-background"]}>
        {navbarItems.map((navItem, index) => (
          <div
            key={index}
            className={`${styles["navbar-text"]} ${
              pathname === navItem.path && styles["active-nav-item"]
            }`}
          >
            {navItem.label}
          </div>
        ))}
      </div>
      <div className={styles["button-container"]}>
        <div className={styles["auth-button"]}>Sign In</div>
        <div className={styles["auth-button-active"]}>Sign Up</div>
      </div>
    </div>
  );
};

export default Navbar;
