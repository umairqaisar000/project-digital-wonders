import React from "react";
import card1 from "../../assets/images/undraw_file_manager_re_ms29 1.svg";
import styles from "./WhatCanWeDoSection.module.scss";
import Image from "next/image";
import { Card, CardContent, Grid } from "@mui/material";

const displayCard = () => {
  return (
    <>
      <Card className={styles["view-card"]}>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <Image className={styles["card-logo"]} src={card1} alt="logo" />
            </Grid>
            <Grid item xs={8}>
              <div className={styles.card_text}>Manage Academic Work</div>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};

export default function WhatCanWeDoSection() {
  return (
    <div className={styles["main-container"]}>
      <div className={styles["main-heading"]}>WHAT YOU CAN DO WITH US ?</div>
      <div className={styles.cardsSection} style={{ float: "left" }}>
        {displayCard()}
      </div>
      <div className={styles.cardsSection} style={{ float: "right" }}>
        {displayCard()}
      </div>
      <div className={styles.cardsSection} style={{ float: "left" }}>
        {displayCard()}
      </div>
    </div>
  );
}
