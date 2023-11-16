import * as React from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MakeLogo from "../../../public/logo-100px.png";
import {
  AccountBalance,
  ChevronLeft,
  ChevronRight,
  Menu,
  Analytics,
  Inventory,
  AutoAwesome,
  AutoMode,
  PrivacyTip,
  Gavel,
  Settings,
  Search,
  Category,
  Campaign,
  CandlestickChart,
  CrisisAlert,
  Adb,
  AddToHomeScreen,
  AddLocation,
} from "@mui/icons-material";
import { useState } from "react";
import Table from "../table/Table";
import { BellAlertIcon, ChevronDownIcon } from "@heroicons/react/20/solid";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function MuiSidebar() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const productsList = [
    
    {
      name: "Product 2",
      description: "See product2",
      href: "/product2",
      icon: CandlestickChart,
    },
    {
      name: "Product 3",
      description: "See product3",
      href: "/product3",
      icon: CrisisAlert,
    },
  ];

  const configs = [
    {
      name: "Privacy policy",
      description: "See our privacy policy",
      href: "/policy",
      icon: PrivacyTip,
    },
    {
      name: "Terms of service",
      description: "See our terms of service",
      href: "/terms",
      icon: Gavel,
    },
    {
      name: "Settings",
      description: "Open settings",
      href: "/settings",
      icon: Settings,
    },
  ];
  const products = [
    {
      name: "Billing",
      description: "Make a complete analysis of your customers billing",
      href: "#",
      icon: AccountBalance,
    },
    {
      name: "Dashboard",
      description: "See your dashboard",
      href: "#",
      icon: Analytics,
    },
    {
      name: "Products",
      description: "See all your active products",
      href: "#",
      icon: Inventory,
    },
    {
      name: "Integrations",
      description: "Connect with third-party applications",
      href: "#",
      icon: AutoAwesome,
    },
    {
      name: "Automations",
      description: "Automate your processes",
      href: "#",
      icon: AutoMode,
    },
  ];

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [productsClicked, setProductsClicked] = useState(false);
  const [subProductsClicked, setSubProductsClicked] = useState(false);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar className="bg-white">
          {!open && (
            <img
              src={MakeLogo}
              alt="logo makevalue"
              className="mr-5"
              width={30}
            />
          )}

          <IconButton
            color="default"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 0,
              ...(open && { display: "none" }),
            }}
          >
            <Menu />
          </IconButton>
          <div className="w-full flex justify-between">
            <div className="ml-2 flex justify-start items-center relative">
              <input
                className="text-black border w-2/3 border-slate-200 rounded-lg pl-2  outline-sky-500"
                placeholder="Search..."
              />
              <Search
                fontSize="small"
                className="text-gray-400 absolute ml-24"
              />
            </div>
            <div className="flex justify-around w-20">
              <BellAlertIcon className="text-gray-500 hover:text-sky-400 cursor-pointer w-6" />
              <Settings className="text-gray-500 hover:text-sky-400 cursor-pointer" />
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader sx={{ justifyContent: "space-around" }}>
          <div className="flex">
            {open && (
              <img
                src={MakeLogo}
                alt="logo makevalue"
                className="mr-5"
                width={30}
              />
            )}
            <h1 className="text-gray-500 font-bold">MakeValue</h1>
          </div>

          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? <ChevronRight /> : <ChevronLeft />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem
            className="hover:text-sky-500"
            disablePadding
            sx={{ display: "block" }}
          >
            <ListItemButton
              onClick={() => {
                setProductsClicked(!productsClicked);
              }}
              className="sideButton"
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <Category className="icon" />
              </ListItemIcon>

              <ListItemText
                className="menuText"
                primary="Products"
                sx={{ opacity: open ? 1 : 0 }}
              />
              {open ? <ChevronDownIcon className="text-gray-400 " /> : null}
            </ListItemButton>
          </ListItem>
          {productsClicked ? (
            <ListItem
            className={
              open ? `hover:text-sky-500 ml-2` : `hover:text-sky-500 ml-1`
            }
            disablePadding
            sx={{ display: "block" }}
          >
            <ListItemButton
              onClick={() => {
                setSubProductsClicked(!subProductsClicked);
              }}
              className="sideButton"
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <Campaign fontSize="small" className="icon text-gray-500" />
              </ListItemIcon>

              <ListItemText
                className="menuText text-gray-500"
                primary="Product 1"
                sx={{ opacity: open ? 1 : 0 }}
              />
              {open ? (
                      <ChevronDownIcon className="w-6 text-gray-400 " />
                    ) : null}
            </ListItemButton>
            { subProductsClicked ?  (
                    
                    <div>
                      <ListItem
                        key={134523}
                        className={
                          open
                            ? `hover:text-sky-500 ml-2`
                            : `hover:text-sky-500 ml-1`
                        }
                        disablePadding
                        sx={{ display: "block" }}
                      >
                        <ListItemButton
                          className="sideButton"
                          sx={{
                            minHeight: 48,
                            justifyContent: open ? "initial" : "center",
                            px: 2.5,
                          }}
                        >
                          <ListItemIcon
                            sx={{
                              minWidth: 0,
                              mr: open ? 3 : "auto",
                              justifyContent: "center",
                            }}
                          >
                            <Adb
                              fontSize="small"
                              className="icon text-gray-500"
                            />
                          </ListItemIcon>
                          <ListItemText
                            className="menuText text-gray-500"
                            primary='Sub-product 1'
                            sx={{ opacity: open ? 1 : 0 }}
                          />
                        </ListItemButton>
                      </ListItem>
                      <ListItem
                      key={213534}
                      className={
                        open
                          ? `hover:text-sky-500 ml-2`
                          : `hover:text-sky-500 ml-1`
                      }
                      disablePadding
                      sx={{ display: "block" }}
                    >
                      <ListItemButton
                        className="sideButton"
                        sx={{
                          minHeight: 48,
                          justifyContent: open ? "initial" : "center",
                          px: 2.5,
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            mr: open ? 3 : "auto",
                            justifyContent: "center",
                          }}
                        >
                          <AddToHomeScreen
                            fontSize="small"
                            className="icon text-gray-500"
                          />
                        </ListItemIcon>
                        <ListItemText
                          className="menuText text-gray-500"
                          primary='Sub-product 1'
                          sx={{ opacity: open ? 1 : 0 }}
                        />
                      </ListItemButton>
                    </ListItem>
                    <ListItem
                      key={5342521}
                      className={
                        open
                          ? `hover:text-sky-500 ml-2`
                          : `hover:text-sky-500 ml-1`
                      }
                      disablePadding
                      sx={{ display: "block" }}
                    >
                      <ListItemButton
                        className="sideButton"
                        sx={{
                          minHeight: 48,
                          justifyContent: open ? "initial" : "center",
                          px: 2.5,
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            mr: open ? 3 : "auto",
                            justifyContent: "center",
                          }}
                        >
                          <AddLocation
                            fontSize="small"
                            className="icon text-gray-500"
                          />
                        </ListItemIcon>
                        <ListItemText
                          className="menuText text-gray-500"
                          primary='Sub-product 1'
                          sx={{ opacity: open ? 1 : 0 }}
                        />
                      </ListItemButton>
                    </ListItem>
                    </div>
                    
                  ) : null}
          </ListItem>
          ): null}
          {productsClicked
            ? productsList.map((item, index) => (
                <ListItem
                  key={index}
                  className={
                    open ? `hover:text-sky-500 ml-2` : `hover:text-sky-500 ml-1`
                  }
                  disablePadding
                  sx={{ display: "block", fontSize: "0.25rem" }}
                >
                  <ListItemButton
                    
                    className="sideButton "
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      <item.icon
                        fontSize="small"
                        className="icon text-gray-500"
                      />
                    </ListItemIcon>
                    <ListItemText
                      className="menuText text-gray-500"
                      primary={item.name}
                      sx={{ opacity: open ? 1 : 0 }}
                    />
                    
                  </ListItemButton>
                </ListItem>
              ))
            : null}

          {products.map((item, index) => (
            <ListItem
              key={index}
              className="hover:text-sky-500"
              disablePadding
              sx={{ display: "block" }}
            >
              <ListItemButton
                className="sideButton"
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <item.icon className="icon" />
                </ListItemIcon>
                <ListItemText
                  className="menuText"
                  primary={item.name}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {configs.map((config) => (
            <ListItem
              key={config.name}
              className="hover:text-sky-500"
              disablePadding
              sx={{ display: "block" }}
            >
              <ListItemButton
                className="sideButton"
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <config.icon className="icon" />
                </ListItemIcon>
                <ListItemText
                  className="menuText"
                  primary={config.name}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box
        className="h-screen max-w-full bg-zinc-100"
        component="main"
        sx={{ flexGrow: 1, p: 3 }}
      >
        <DrawerHeader />
        <Table />
      </Box>
    </Box>
  );
}
