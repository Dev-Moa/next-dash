import { Box, Drawer } from "@mui/material";
import DynamicContent from "./DynamicContent";


interface SidebarProps {
  mobileOpen?: boolean;
  onDrawerClose?: () => void;
  onDrawerTransitionEnd?: () => void;
}

function Sidebar({
  mobileOpen,
  onDrawerClose,
  onDrawerTransitionEnd,
}: SidebarProps) {
  const drawerWidth = 240;

  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      aria-label="mailbox folders"
    >
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onTransitionEnd={onDrawerTransitionEnd}
        onClose={onDrawerClose}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            backgroundColor: "#ffffff",
            borderRight: "1px solid #e0e0e0",
          },
        }}
        slotProps={{
          root: {
            keepMounted: true,
          },
        }}
      >
        <DynamicContent onDrawerClose={onDrawerClose}/>
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            backgroundColor: "#ffffff",
            borderRight: "1px solid #e0e0e0",
          },
        }}
        open
      >
        <DynamicContent onDrawerClose={onDrawerClose} />
      </Drawer>
    </Box>
  );
}

export default Sidebar;
