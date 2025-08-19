"use client"; 

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#55A605", //Green Agored
    },
    secondary: {
      main: "#FF6E08", //Orange Agrored
    },
    background: {
        paper: "#FFFFFF", //White
        default: "#0000", //Gray claro

    }, 
  }, 
});



export default theme;
