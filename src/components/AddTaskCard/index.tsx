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
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import styles from "./AddTaskCard.module.scss";

const TaskCard = () => {
  return (
    <Card className={styles["add-card"]}>
      <CardContent>
        <Typography variant="h6" className={styles["primary-heading"]}>
          Add a new Task
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Grid container spacing={2} sx={{ marginBlock: "14px" }}>
              <Grid item xs={6}>
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
            </Grid>
            <Grid container spacing={2} sx={{ marginBlock: "14px" }}>
              <Grid item xs={6}>
                <label className={styles["label-text"]}>Task Type</label>
                <FormControl fullWidth margin="normal">
                  <Select>
                    <MenuItem value="type1">Type 1</MenuItem>
                    <MenuItem value="type2">Type 2</MenuItem>
                    <MenuItem value="type3">Type 3</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
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
            />
          </Grid>
          <Grid item xs={3} sx={{ margin: "35px 55px" }}>
            <div
              style={{
                border: "3px dashed #aaa",
                padding: "20px 60px",
                marginTop: "10px",
                textAlign: "center",
                borderRadius: "10px",
              }}
            >
              <label className={styles["label-text"]}>
                Attach or Drop File
              </label>
              <Typography sx={{ color: "red", padding: "10px 0" }}>
                We accept format of type PDF, DOC, PNG, JPEG
              </Typography>
              <AddOutlinedIcon fontSize="large" />
            </div>

            <Divider style={{ margin: "10px 0" }} />
            <div style={{ marginTop: "133px" }}>
              <label className={styles["label-text"]}>Your Budget</label>
              <Typography style={{ color: "red" }}>
                Please add the amount in $
              </Typography>
              <FormControl margin="normal">
                <TextField type="text" />
              </FormControl>
            </div>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          color="primary"
          sx={{
            background: "#17CF8D",
            borderRadius: "20px",
            padding: "5px 15px",
            width: "163px",
            height: "46px",
          }}
        >
          Submit
        </Button>
      </CardActions>
    </Card>
  );
};

export default TaskCard;
