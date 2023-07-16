import Navbar from "src/components/Navbar";
import { useRouter } from "next/router";
import styles from "./Home.module.scss";

export default function Home() {
  const router = useRouter();

  return (
    <div className={styles["container"]}>
      <Navbar pathname={router.pathname} />
    </div>
  );
}
