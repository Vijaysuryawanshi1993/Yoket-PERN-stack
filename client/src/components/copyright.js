import { Typography } from "@mui/material";

const Copyright = (props) => {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <a
        color="inherit"
        href="https://www.linkedin.com/in/vijay-suryawanshi-a4b19477/"
      >
        Vijay's Website
      </a>
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

export default Copyright;
