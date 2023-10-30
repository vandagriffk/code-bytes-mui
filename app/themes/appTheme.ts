"use client"
import { createTheme } from '@mui/material/styles';
import { deepPurple, lightBlue, red } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: deepPurple[400],
    },
    secondary: {
        main: lightBlue[900],
      },
    background: {
        default: red[200]
    }
  },
});

export default theme;