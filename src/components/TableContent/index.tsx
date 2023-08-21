import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import styles from "./TableContent.module.scss";
import TablePagination from "@mui/material/TablePagination";
import Badge from "@mui/material/Badge";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import IconButton from "@mui/material/IconButton";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

interface TaskList {
  taskID: number;
  name: string;
  dueDate: string;
  status: string;
  subject: string;
  bid: string;
  budget: string;
}

export default function TableContent({ taskList }: { taskList: TaskList[] }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [anchorElMap, setAnchorElMap] = useState({}); // For menu anchor element
  const [selectedTaskMap, setSelectedTaskMap] = useState({}); // Track the selected task

  const handleInputChange = (event: any) => {
    setSearchTerm(event.target.value);
  };

  const handleChangePage = (event: any, newPage: any) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: any) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleActionsClick = (event: any, task: any) => {
    setAnchorElMap((prevState) => ({
      ...prevState,
      [task.taskID]: event.currentTarget,
    }));
    setSelectedTaskMap((prevState) => ({
      ...prevState,
      [task.taskID]: task,
    }));
  };

  const handleCloseMenu = (taskID: any) => {
    setAnchorElMap((prevState) => ({
      ...prevState,
      [taskID]: null,
    }));
    setSelectedTaskMap((prevState) => ({
      ...prevState,
      [taskID]: null,
    }));
  };

  return (
    <Card className={styles["card"]}>
      <CardContent>
        <Typography
          variant="h6"
          component="div"
          className={styles["primary-heading"]}
        >
          Your Tasks List
        </Typography>
        <div className={styles["main-table-container"]}>
          <input
            type="text"
            placeholder="Search task..."
            value={searchTerm}
            onChange={handleInputChange}
            className={styles["search-bar"]}
          />
          <TableContainer>
            <Table
              sx={{
                borderCollapse: "separate",
                borderSpacing: "0 -5px",
                border: "none",

                marginTop: "20px",
              }}
            >
              <TableHead>
                <TableRow sx={{ backgroundColor: "#DFEAEF" }}>
                  <TableCell>Task ID</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Due Date</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Subject</TableCell>
                  <TableCell>Budget</TableCell>
                  <TableCell>Bid</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {taskList
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((task) => (
                    <TableRow key={task.taskID}>
                      <TableCell>{task.taskID}</TableCell>
                      <TableCell>{task.name}</TableCell>
                      <TableCell>{task.dueDate}</TableCell>
                      <TableCell>
                        <Badge className={styles["badge-pending"]}>
                          {task.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{task.subject}</TableCell>
                      <TableCell>{task.budget}</TableCell>
                      <TableCell>
                        <Badge className={styles["badge-pending"]}>
                          {task.bid}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <IconButton
                          onClick={(e) => handleActionsClick(e, task)}
                        >
                          <MoreHorizIcon />
                        </IconButton>
                        <Menu
                          anchorEl={anchorElMap[task.taskID]}
                          open={Boolean(anchorElMap[task.taskID])}
                          onClose={() => handleCloseMenu(task.taskID)}
                        >
                          <MenuItem
                            onClick={() => handleCloseMenu(task.taskID)}
                          >
                            <ListItemText primary="View Task" />
                          </MenuItem>
                          <MenuItem
                            onClick={() => handleCloseMenu(task.taskID)}
                          >
                            <ListItemText primary="Cancel" />
                          </MenuItem>
                          <MenuItem
                            onClick={() => handleCloseMenu(task.taskID)}
                          >
                            <ListItemText primary="Accept" />
                          </MenuItem>
                        </Menu>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]} // Customize rows per page options
          component="div"
          count={taskList.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          labelDisplayedRows={({ from, to }) => null}
          sx={{
            borderTop: "1px solid rgba(0, 0, 0, 0.12)",
            paddingTop: "10px",
            display: "flex",
            justifyContent: "end",
            alignItems: "center",
            verticalAlign: "middle",
          }}
          SelectProps={{
            style: {
              marginRight: "15px",
            },
          }}
        />
      </CardContent>
    </Card>
  );
}
