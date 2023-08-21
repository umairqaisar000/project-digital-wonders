import React, { useState } from "react";
import ProfileNavBar from "src/components/ProfileNavBar";
import ViewTaskCard from "src/components/ViewTaskCard";
import SideInfoBar from "src/components/SideInfoBar";
import styles from "./TaskView.module.scss";

export default function taskView() {
  return (
    <>
      <ProfileNavBar />
      <div className={styles["main-content"]}>
        <SideInfoBar />
        <ViewTaskCard />
      </div>
    </>
  );
}
