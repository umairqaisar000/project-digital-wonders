import React from "react";
import styles from "./AddBalance.module.scss";
import SideInfoBar from "src/components/SideInfoBar";
import ProfileNavBar from "src/components/ProfileNavBar";
import AddBalanceCard from "src/components/addBalanceCard";
import CardLogoSection from "src/components/CardLogoSection";

export default function AdddBalance() {
  return (
    <>
      <ProfileNavBar />
      <div className={styles["main-content"]}>
        <SideInfoBar />
        <AddBalanceCard />
        <CardLogoSection />
      </div>
    </>
  );
}
