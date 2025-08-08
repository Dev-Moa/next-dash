import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import * as React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Header onMenuClick={handleDrawerToggle} />
      <Sidebar 
        mobileOpen={mobileOpen}
        onDrawerClose={handleDrawerClose}
        onDrawerTransitionEnd={handleDrawerTransitionEnd}
      />
      <Box 
        component="main" 
        sx={{ 
          flexGrow: 1, 
          p: 3,
          mt: 8,
          backgroundColor: '#f4f3fb',
          minHeight: '100vh',
          width: { sm: `calc(100% - 240px)` }
        }}
      >
        {children}
      </Box>
    </Box>
  );
}