import { useRouter } from "next/router";
import Navbar from "src/components/Navbar";
import styles from "./Home.module.scss";
import HeroSection from "../../components/HeroSection";

export default function Home() {
  const router = useRouter();

  return (
    <div className={styles["container"]}>
      <Navbar pathname={router.pathname} />
      <HeroSection />
    </div>
  );
}
