import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import CompanyLogo from "src/assets/images/company-logo.svg";
import Button, { ButtonProps } from "@mui/material/Button";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import AddIcon from "@mui/icons-material/Add";
import Stack from "@mui/material/Stack";
import Image from "next/image";
import { styled } from "@mui/material/styles";
import styles from "./ProfileNavBar.module.scss";
import { useRouter } from "next/router";

const YellowColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: "black",
  marginTop: "3px !important",
  marginRight: "28px",
  backgroundColor: "#FFC963",
  "&:hover": {
    backgroundColor: "#FFC963",
  },
  borderRadius: "50px",
  boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
  width: "200px",
  height: "46px",
}));

const DarkColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: "white",
  marginTop: "3px !important",
  marginRight: "46px !important",
  backgroundColor: "#272727",
  "&:hover": {
    backgroundColor: "#272727",
  },
  borderRadius: "50px",
  boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
  width: "200px",
  height: "46px",
}));

export default function ProfileNavBar() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);
  const router = useRouter();

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleButtonClick = () => {
    router.push("/addTask");
  };

  const handleAddBalanceButtonClick = () => {
    router.push("/addBalance");
  };

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Edit profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ backgroundColor: "#FAD0CC", boxShadow: "none" }}
      >
        <Toolbar>
          <Image
            className={styles["organization-logo"]}
            src={CompanyLogo}
            alt="logo"
            onClick={() => router.push("/home")}
          />
          <div className={styles["vl"]} />
          <Typography
            noWrap
            component="div"
            onClick={() => router.push("/howItWorks")}
            sx={{
              display: { xs: "none", sm: "block", color: "#893232" },
              marginRight: "10px",
            }}
          >
            How it works
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Stack direction="row" spacing={2}>
              <YellowColorButton
                variant="contained"
                endIcon={<AccountBalanceWalletOutlinedIcon />}
                onClick={handleAddBalanceButtonClick}
              >
                Add Balance
              </YellowColorButton>
              <DarkColorButton
                variant="contained"
                endIcon={<AddIcon />}
                onClick={handleButtonClick}
              >
                Add Task
              </DarkColorButton>
            </Stack>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Badge color="error">
                <MailIcon />
              </Badge>
            </IconButton>
            <div className={styles["v2"]} />
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <div className={styles["v2"]} />
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <Typography
                noWrap
                component="div"
                sx={{
                  display: { xs: "none", sm: "block", color: "black" },
                  marginRight: "10px",
                }}
              >
                Faiz Ali
              </Typography>
              <AccountCircle />
            </IconButton>
          </Box>

          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
