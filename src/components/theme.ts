import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#3f3276', 
    },
    secondary: {
      main: '#f560a2', 
    },
    background: {
      default: '#f4f3fb',
      paper: '#ffffff',   
    },
    text: {
      primary: '#333',
      secondary: '#666',
    },
  },
  typography: {
    fontFamily: '"Segoe UI", "Helvetica", "Arial", sans-serif',
    h6: {
      fontWeight: 600,
    },
    body2: {
      color: '#888',
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: '0 1px 5px rgba(33, 32, 32, 0)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 500,
        },
      },
    },
  },
});

export default theme;
