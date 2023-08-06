import Image from "next/image";
import HeroSectionImage from "src/assets/images/hero-section-image.svg";
import { useRouter } from "next/router";
import Navbar from "src/components/Navbar";

import styles from "./Home.module.scss";

export default function Home() {
  const router = useRouter();

  return (
    <div className={styles["container"]}>
      <Navbar pathname={router.pathname} />
      <div className={styles["hero-section-container"]}>
        <div>
          <h1>Need assistance with your assignments?</h1>
          <p>
            Struggling to manage your assignments? We can step in and ensure
            your success.
          </p>
          <div className={styles["subject-container"]}>
            <div className={styles["subject-heading"]}>Your Subject</div>
            <div className={styles["subject-bottom-container"]}>
              <h5>dropdown</h5>
              <div className={styles["subject-continue-button"]}>continue</div>
            </div>
          </div>
        </div>

        <Image
          className={styles["organization-logo"]}
          src={HeroSectionImage}
          alt="logo"
        />
      </div>
    </div>
  );
}
