import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import RadioButtonCheckedOutlinedIcon from "@mui/icons-material/RadioButtonCheckedOutlined";
import Image from "next/image";
import styles from "./SideInfoBar.module.scss";

export default function SideInfoBar() {
  return (
    <Card className={styles["card"]}>
      <CardContent>
        <Typography
          variant="h5"
          component="div"
          className={styles["main-heading"]}
        >
          Profile
        </Typography>
        <hr className={styles["dark-line"]} />
        <div className={styles["internal-card-content"]}>
          <div className={styles["internal-inline-card-content"]}>
            <RadioButtonCheckedOutlinedIcon fontSize="medium" />
            <span className={styles["balance-text"]}>Balance</span>
          </div>
          <div>
            <span className={styles["dollar-text"]}>$10.00</span>
          </div>
        </div>

        <Typography
          variant="h6"
          component="div"
          className={styles["secondary-heading"]}
        >
          Tasks
        </Typography>
        <hr className={styles["dark-line"]} />
        <div className={styles["internal-footer-card-content"]}>
          <span>Active</span>
          <span>23</span>
        </div>
        <div className={styles["internal-footer-card-content"]}>
          <span>Pending</span>
          <span>03</span>
        </div>
        <div className={styles["internal-footer-card-content"]}>
          <span>In Progress</span>
          <span>13</span>
        </div>
        <div className={styles["internal-footer-card-content"]}>
          <span>Cancelled</span>
          <span>05</span>
        </div>
      </CardContent>
    </Card>
  );
}
