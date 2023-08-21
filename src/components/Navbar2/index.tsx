import Image from "next/image";
import { useState, useEffect } from "react";
import styles from "./Navbar.module.scss";
import CompanyLogo from "src/assets/images/company-logo.svg";
import Link from "next/link";
import { useRouter } from "next/router";

interface NavbarProps {
  pathname: string;
}

const navbarContent = [
  { id: 1, label: "Home", path: "/home" },
  { id: 2, label: "Service", path: "service-section" },
  { id: 3, label: "About", path: "/about" },
  { id: 4, label: "Contact", path: "/contact" },
  { id: 5, label: "How to Works", path: "/howItWorks" },
];

const Navbar: React.FC<NavbarProps> = ({ pathname }) => {
  const router = useRouter();
  const [navbarItems, setNavbarItems] = useState(navbarContent);
  const [activeSection, setActiveSection] = useState<string>("section1");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      for (const section of sections) {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = async (sectionId: string) => {
    await router.push("/home");
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className={styles["navbar-container"]}>
      <Image
        className={styles["organization-logo"]}
        src={CompanyLogo}
        alt="logo"
      />
      <div className={styles["vl"]}></div>
      <div className={styles["navbar-container-background"]}>
        {navbarItems.map((navItem, index) =>
          navItem.path === "service-section" ? (
            <div
              key={index}
              onClick={() => scrollToSection(navItem.path)}
              className={`${styles["navbar-text"]} ${
                pathname === navItem.path && styles["active-nav-item"]
              }`}
            >
              {navItem.label}
            </div>
          ) : (
            <Link
              key={navItem.id}
              href={navItem.path}
              className={styles["link-section"]}
            >
              <div
                className={`${styles["navbar-text"]} ${
                  pathname === navItem.path && styles["active-nav-item"]
                }`}
              >
                {navItem.label}
              </div>
            </Link>
          )
        )}
      </div>
      <div className={styles["button-container"]}>
        <div className={styles["auth-button"]}>Sign In</div>
        <div className={styles["auth-button-active"]}>Sign Up</div>
      </div>
    </div>
  );
};

export default Navbar;
