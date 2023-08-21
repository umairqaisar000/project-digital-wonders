import React, { useState } from "react";
import ProfileNavBar from "src/components/ProfileNavBar";
import SideInfoBar from "src/components/SideInfoBar";
import TableContent from "src/components/TableContent";
import styles from "./Profile.module.scss";
import { useRouter } from "next/router";

interface Task {
  taskID: number;
  name: string;
  dueDate: string;
  status: string;
  subject: string;
  bid: string;
  budget: string;
}

export default function Profile() {
  const tasks: Task[] = [
    {
      taskID: 1,
      name: "Task 1",
      dueDate: "2023-08-31",
      status: "pending",
      subject: "Subject 1",
      bid: "pending",
      budget: "$1000",
    },
    {
      taskID: 2,
      name: "Task 2",
      dueDate: "2023-08-31",
      status: "pending",
      subject: "Subject 2",
      bid: "pending",
      budget: "$1000",
    },
    {
      taskID: 3,
      name: "Task 3",
      dueDate: "2023-08-31",
      status: "pending",
      subject: "Subject 3",
      bid: "pending",
      budget: "$1000",
    },
    {
      taskID: 3,
      name: "Task 3",
      dueDate: "2023-08-31",
      status: "pending",
      subject: "Subject 3",
      bid: "pending",
      budget: "$1000",
    },
    {
      taskID: 3,
      name: "Task 3",
      dueDate: "2023-08-31",
      status: "pending",
      subject: "Subject 3",
      bid: "pending",
      budget: "$1000",
    },

    // Add more task objects here...
  ];
  const [taskList, setTaskList] = useState<Task[]>(tasks);
  const router = useRouter();

  return (
    <div>
      <ProfileNavBar />
      <div className={styles["main-content"]}>
        <SideInfoBar />
        <TableContent taskList={taskList} />
      </div>
    </div>
  );
}
