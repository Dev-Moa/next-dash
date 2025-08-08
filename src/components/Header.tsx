import GitHubIcon from "@mui/icons-material/GitHub";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  IconButton,
  Link,
  Toolbar,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { FaSlack } from "react-icons/fa";

interface HeaderProps {
  onMenuClick?: () => void;
}

function Header({ onMenuClick }: HeaderProps) {
  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        backgroundColor: "#39345C",
        color: "white",
        zIndex: (theme) => theme.zIndex.drawer + 1,
        width: "100%",
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={onMenuClick}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
          <Image
            src="/cube.svg"
            alt="Cube.js Logo"
            width={28}
            height={28}
            style={{ marginRight: "12px" }}
          />
          <Typography
            variant="h6"
            sx={{
              fontWeight: 500,
              letterSpacing: "-0.5px",
              fontSize: "1.25rem",
            }}
          >
            Cube.js
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Link
            href="https://github.com"
            color="inherit"
            sx={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              px: 2,
              py: 1,
              borderRadius: 1,
              transition: "background-color 0.2s",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              },
            }}
          >
            <GitHubIcon sx={{ mr: 1, fontSize: 20, opacity: "0.4" }} />
            <Typography
              variant="body2"
              sx={{ fontWeight: 500, color: "white" }}
            >
              Github
            </Typography>
          </Link>
          <Link
            href="https://slack.com"
            color="inherit"
            sx={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              px: 2,
              py: 1,
              borderRadius: 1,
              transition: "background-color 0.2s",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              },
            }}
          >
            <FaSlack size={18} style={{ marginRight: "8px", opacity: "0.4" }} />
            <Typography
              variant="body2"
              sx={{ fontWeight: 500, color: "white" }}
            >
              Slack
            </Typography>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
