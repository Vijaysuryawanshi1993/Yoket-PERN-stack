import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useSelector } from "react-redux";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

function HomeView(props) {
  const { handleAddTask, handleLogout, onTaskClick } = props;
  const { login } = useSelector((state) => state.authReducer);
  const { getAllTask } = useSelector((state) => state.taskReducer);

  console.log("get all task", getAllTask);
  return (
    <React.Fragment>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
      />
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: "wrap" }}>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            {`${login.data.data.first_name} ${login.data.data.last_name}`}
          </Typography>
          <Button
            onClick={() => {
              handleAddTask();
            }}
            variant="outlined"
            sx={{ my: 1, mx: 1.5 }}
          >
            +
          </Button>
          <Button
            onClick={() => {
              handleLogout();
            }}
            variant="outlined"
            sx={{ my: 1, mx: 1.5 }}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      {/* Hero unit */}
      <Container
        disableGutters
        maxWidth="sm"
        component="main"
        sx={{ pt: 8, pb: 6 }}
      >
        <React.Fragment>
          <Typography component="h2" variant="h6" color="primary" gutterBottom>
            Task List
          </Typography>
          <Table size="medium">
            <TableHead>
              <TableRow>
                <TableCell>Heading</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Deadline</TableCell>
                <TableCell>Priority</TableCell>
                <TableCell align="right">Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {getAllTask?.data?.data?.map((row, index) => (
                <TableRow
                  key={index}
                  onClick={() => {
                    onTaskClick(row);
                  }}
                >
                  <TableCell>{row.task_title}</TableCell>
                  <TableCell>{row.task_description}</TableCell>
                  <TableCell>{row.task_deadline}</TableCell>
                  <TableCell>{row.task_priority}</TableCell>
                  <TableCell align="right">{`${
                    row.task_status ? row.task_status : "Incomplete"
                  }`}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </React.Fragment>
      </Container>
    </React.Fragment>
  );
}

export default HomeView;
