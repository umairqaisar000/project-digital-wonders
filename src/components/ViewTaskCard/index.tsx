import React from "react";
import {
  Card,
  CardContent,
  TextField,
  FormControl,
  Select,
  MenuItem,
  Typography,
  TextareaAutosize,
  Badge,
  Grid,
  Button
} from "@mui/material";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import styles from "./ViewTaskCard.module.scss";

export default function ViewTaskCard() {
  return (
    <Card className={styles["view-card"]}>
      <CardContent>
        <Typography variant="h6" className={styles["primary-heading"]}>
          My Task Name
        </Typography>
        <div className={styles["row-content"]} style={{ marginTop: "31px" }}>
          <span className={styles["label-text"]}>Task ID</span>
          <span className={styles["label-text"]}>Name</span>
          <span className={styles["label-text"]}>Due Date</span>
          <span className={styles["label-text"]}>Status</span>
          <span className={styles["label-text"]}>Budget</span>
          <span className={styles["label-text"]}>Bid</span>
        </div>
        <div
          className={styles["row-content-secondary"]}
          style={{ backgroundColor: "white" }}
        >
          <span className={styles["label-text"]}>012B2FF</span>
          <span className={styles["label-text"]}>Proton & Neutron</span>
          <span className={styles["label-text"]}>01 June 2023</span>
          <span className={styles["label-text"]}>
            <Badge className={styles["badge-pending"]}>pending</Badge>
          </span>
          <span className={styles["label-text"]}>$16.00</span>
          <span className={styles["label-text"]}>
            <Badge className={styles["badge-pending"]}>pending</Badge>
          </span>
        </div>
        <Button
          variant="contained"
          color="primary"
          sx={{
            background: "#DA5C5C",
            borderRadius: "50px",
            padding: "5px 15px",
            marginTop: "20px",
            width: "163px",
            height: "46px",
          }}
        >
          Cancel
        </Button>

        <hr className={styles["hr-dotted"]} />

        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Grid container spacing={2} sx={{ marginBlock: "14px" }}>
              <Grid item xs={3}>
                <label className={styles["label-text"]}>Topic Name</label>
                <TextField label="Topic Name" fullWidth margin="normal" />
              </Grid>
              <Grid item xs={3}>
                <label className={styles["label-text"]}>Deadline</label>
                <FormControl fullWidth margin="normal">
                  <TextField type="date" />
                </FormControl>
              </Grid>
              <Grid item xs={3} sx={{ marginTop: "24px" }}>
                <FormControl fullWidth margin="normal">
                  <TextField type="time" />
                </FormControl>
              </Grid>
              <Grid item xs={3}>
                <label className={styles["label-text"]}>Subject</label>
                <FormControl fullWidth margin="normal">
                  <Select>
                    <MenuItem value="type1">Type 1</MenuItem>
                    <MenuItem value="type2">Type 2</MenuItem>
                    <MenuItem value="type3">Type 3</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <Grid container spacing={2} sx={{ marginBlock: "14px" }}>
              <Grid item xs={4}>
                <label className={styles["label-text"]}>Task Type</label>
                <FormControl fullWidth margin="normal">
                  <Select>
                    <MenuItem value="type1">Type 1</MenuItem>
                    <MenuItem value="type2">Type 2</MenuItem>
                    <MenuItem value="type3">Type 3</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={4}>
                <label className={styles["label-text"]}>Attached file</label>
                <FormControl fullWidth margin="normal">
                  <TextField type="file" />
                </FormControl>
              </Grid>
              <Grid item xs={4}>
                <label className={styles["label-text"]}>Your Budget</label>
                <FormControl fullWidth margin="normal">
                  <TextField
                    type="text"
                    value="$16.00"
                    sx={{ color: "#D65959 !important" }}
                  />
                </FormControl>
              </Grid>
            </Grid>
            <label className={styles["label-text"]}>Description</label>
            <TextareaAutosize
              minRows={6}
              style={{
                width: "100%",
                marginTop: 14,
                border: "none",
                borderRadius: "10px",
                padding: "10px",
              }}
              placeholder="is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s, when an unknown printer took a galley of type and "
            />
          </Grid>
        </Grid>
        <Button
          variant="contained"
          color="primary"
          sx={{
            background: "#17CF8D",
            borderRadius: "50px",
            padding: "5px 15px",
            marginTop: "20px",
            width: "163px",
            height: "46px",
          }}
        >
          Update
        </Button>
      </CardContent>
    </Card>
  );
}
