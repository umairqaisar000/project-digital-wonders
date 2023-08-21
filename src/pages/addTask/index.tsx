import React from "react";
import styles from "./addTask.module.scss";
import SideInfoBar from "src/components/SideInfoBar";
import ProfileNavBar from "src/components/ProfileNavBar";
import AddTaskCard from "src/components/AddTaskCard";

export default function AddTask() {
  return (
    <div>
      <ProfileNavBar />
      <div className={styles["main-content"]}>
        <SideInfoBar />
        <AddTaskCard />
      </div>
    </div>
  );
}
