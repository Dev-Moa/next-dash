import {
  Toolbar,
  Box,
  Avatar,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ListAltIcon from "@mui/icons-material/ListAlt";

interface SidebarProps {
  onDrawerClose?: () => void;
}

function SidebarContent({
  onDrawerClose,
}: SidebarProps) {
  const router = useRouter();
  const navItems: Array<{
    label: string;
    href: string;
    icon: React.ElementType;
  }> = [
    { label: "Dashboard", href: "/", icon: DashboardIcon },
    { label: "Orders", href: "/orders", icon: ListAltIcon },
  ];

  return (
    <div>
      <Toolbar />
      <Box sx={{ overflow: "auto", p: 2 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mb: 3,
          }}
        >
          <Avatar
            src="/goran.png"
            alt="Goran"
            sx={{
              width: 64,
              height: 64,
              mb: 1,
            }}
          />
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
            Some Name
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum
          </Typography>
        </Box>

        <List>
          {navItems.map(({ label, href, icon: Icon }) => {
            const isActive = router.pathname === href || router.asPath === href;
            return (
              <ListItem key={href} disablePadding sx={{ mb: 1 }}>
                <ListItemButton
                  component={NextLink}
                  href={href}
                  onClick={onDrawerClose}
                  selected={isActive}
                  sx={{
                    borderRadius: 2,
                    "&.Mui-selected": { backgroundColor: "#f3f4f6" },
                    "&:hover": { boxShadow: "#f3f4f6" },
                  }}
                >
                  <ListItemIcon>
                    <Icon sx={{ color: isActive ? "#8b5cf6" : "#6b7280" }} />
                  </ListItemIcon>
                  <ListItemText sx={{ color: isActive ? "#8b5cf6" : "#6b7280" }} primary={label} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Box>
    </div>
  );
}

export default SidebarContent;
