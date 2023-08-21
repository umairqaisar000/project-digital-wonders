import React from "react";
import {
  Card,
  CardContent,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  TextareaAutosize,
  CardActions,
  Button,
  Divider,
  Grid,
  Paper,
} from "@mui/material";
import styles from "./AddBalanceCard.module.scss";

export default function AddBalanceCard() {
  return (
    <Card className={styles["add-card"]}>
      <CardContent>
        <Typography variant="h6" className={styles["primary-heading"]}>
          Add Balance
        </Typography>
        <Grid>
          <Grid container spacing={2} sx={{ marginBlock: "14px" }}>
            <Grid item xs={8}>
              <label className={styles["label-text"]}>Number of Card</label>
              <TextField label="Topic Name" fullWidth margin="normal" />
            </Grid>
            <Grid item xs={4}>
              <label className={styles["label-text"]}>Postal Code</label>
              <TextField label="Topic Name" fullWidth margin="normal" />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <label className={styles["label-text"]}>
                Card Number (no spaces or dashes)
              </label>
              <TextField label="Topic Name" fullWidth margin="normal" />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <label className={styles["label-text"]}>Expiration</label>
              <TextField fullWidth margin="normal" type="month" />
            </Grid>
            <Grid item xs={4} sx={{ marginBlock: "24px" }}>
              <TextField fullWidth margin="normal" type="year" />
            </Grid>
            <Grid item xs={4}>
              <label className={styles["label-text"]}>CVV</label>
              <TextField fullWidth margin="normal" type="text" />
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
