import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import * as React from "react";
import { useSelector } from "react-redux";

const theme = createTheme();

export default function SignIn(props) {
  const { handledClickType } = useSelector((state) => state.taskReducer);
  let { handleSubmit, priority, setPriority, status, setStatus } = props;

  console.log(handledClickType);
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="heading"
              label="Task Heading"
              name="heading"
              autoFocus
            />

            <TextField
              margin="normal"
              required
              fullWidth
              name="description"
              label="Description"
              multiline
              rows={4}
              id="description"
            />

            {/* <InputLabel id="demo-simple-select-label">Deadline</InputLabel> */}
            <TextField
              margin="normal"
              required
              fullWidth
              name="deadline"
              // label="Deadline"

              id="deadline"
              type="date"
            />

            <FormControl fullWidth sx={{ marginTop: 2 }}>
              <InputLabel id="demo-simple-select-label">Priority</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={priority}
                label="Age"
                onChange={(e) => {
                  setPriority(e.target.value);
                }}
              >
                <MenuItem value="Low">Low</MenuItem>
                <MenuItem value="Intermidiate">Intermidiate</MenuItem>
                <MenuItem value="High">High</MenuItem>
              </Select>
            </FormControl>

            {handledClickType !== "add" && (
              <FormControl fullWidth sx={{ marginTop: 2 }}>
                <InputLabel id="demo-simple-select-label">Status</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={status}
                  label="Age"
                  onChange={(e) => {
                    setStatus(e.target.value);
                  }}
                >
                  <MenuItem value="InProgress">Incomplete</MenuItem>
                  <MenuItem value="Completed">Complete</MenuItem>
                </Select>
              </FormControl>
            )}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Create Task
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
