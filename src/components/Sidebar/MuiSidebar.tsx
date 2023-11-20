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
import ProfilePicture from "../../../public/8847137.png";
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
  BarChart,
  PieChart,
  LocalAtm,
  CenterFocusStrong,
  House,
  Savings,
  CarRental,
  LocalShipping,
  ListAlt,
  LocationCity,
  PriceCheck,
  AccountTree,
  Addchart,
  Warning,
} from "@mui/icons-material";
import { useState } from "react";
import { BellAlertIcon, ChevronDownIcon, PhoneArrowDownLeftIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";

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

export default function MuiSidebar({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const productsList = [
    {
      name: "Relatório 2",
      description: "See report2",
      href: "/product2",
      icon: CandlestickChart,
    },
    {
      name: "Relatório 3",
      description: "See report3",
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
  const products1 = [
    {
      name: "Investimento",
      description: "Make a complete analysis of your customers billing",
      href: "#",
      icon: BarChart,
    },
    {
      name: "Empréstimo",
      description: "See your dashboard",
      href: "#",
      icon: PieChart,
    },
    {
      name: "Derivativo",
      description: "See all your active products",
      href: "#",
      icon: LocalAtm,
    },
    {
      name: "Mutuo",
      description: "Connect with third-party applications",
      href: "#",
      icon: CenterFocusStrong,
    },
    {
      name: "Garantia",
      description: "Automate your processes",
      href: "#",
      icon: House,
    },
    
  ];

  const products2 = [
    {
      name: "Seguros",
      description: "Automate your processes",
      href: "#",
      icon: Savings,
    },
    {
      name: "Arrendamento",
      description: "Automate your processes",
      href: "#",
      icon: CarRental,
    },
    {
      name: "Consórcio",
      description: "Automate your processes",
      href: "#",
      icon: LocalShipping,
    },
    {
      name: "AVP",
      description: "Automate your processes",
      href: "#",
      icon: ListAlt,
    },
    {
      name: "CBios",
      description: "Automate your processes",
      href: "#",
      icon: LocationCity,
    },
    {
      name: "Dividendos",
      description: "Automate your processes",
      href: "#",
      icon: PriceCheck,
    },
  ]

  const products3 = [
    {
      name: "Contábil",
      description: "Automate your processes",
      href: "#",
      icon: AccountTree,
    },
    {
      name: "Relatório",
      description: "Automate your processes",
      href: "#",
      icon: Analytics,
    },
    {
      name: "Dashboard",
      description: "Automate your processes",
      href: "#",
      icon: Addchart,
    },
    {
      name: "Controle de Risco",
      description: "Automate your processes",
      href: "#",
      icon: Warning,
    },
  ]

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
            <Link to="/poc-mkv-header/">
              <img
                src={MakeLogo}
                alt="logo makevalue"
                className="mr-5"
                width={30}
              />
            </Link>
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
            <Menu className="bg-sky-100 rounded-md"/>
          </IconButton>
          <div className="w-full flex justify-between">
            <div className="ml-2 flex justify-start items-center">
              <input
                className="text-gray-500 border-r-0 border w-72 h-full placeholder:p-1 border-sky-200 pl-2 rounded-l-lg outline-none"
                placeholder="Search..."
              />
              <div className="flex items-center justify-center border border-l-0 h-full border-sky-200 rounded-r-lg pr-1">
              <Search
                fontSize="small"
                className="text-sky-300 ml-1 "
              />
              </div>
              
            </div>
            <div className="flex items-center justify-around w-72">
              <div className="p-1 bg-sky-200 rounded-md">
                <PhoneArrowDownLeftIcon className=" text-gray-500 hover:text-sky-400 cursor-pointer w-6" />
              </div>
              <div className="p-1  bg-sky-200 rounded-md">
              <BellAlertIcon className="text-gray-500 hover:text-sky-400 cursor-pointer w-6" />
              </div>
              <div className="p-1 bg-sky-200 rounded-md">
              <Settings className="text-gray-500 hover:text-sky-400 cursor-pointer" />
              </div>

              <div className="rounded-full w-10 h-10 flex justify-center items-center">
                <img src={ProfilePicture} alt="" className="w-full"/>
              </div>
            
              
              
            </div>
          </div>
        </Toolbar>
      </AppBar>
      
      <Drawer sx={{height:"100vh"}} variant="permanent"  open={open}>
        <DrawerHeader sx={{ justifyContent: "space-around" }}>
          <div className="flex">
            {open && (
              <Link to={"/poc-mkv-header/"}>
                <img
                  src={MakeLogo}
                  alt="logo makevalue"
                  className="mr-5"
                  width={30}
                />
              </Link>
            )}
            <h1 className="text-gray-500 font-bold">MakeValue</h1>
          </div>

          <IconButton onClick={handleDrawerClose}>  
            <Menu className="bg-sky-100 rounded-md" />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {products1.map((item, index) => (
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
          {products2.map((item, index) => (
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
            {products3.map((item, index) => (
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
        className="max-w-full bg-white"
        component="main"
        sx={{ flexGrow: 1, p: 3 }}
      >
        <DrawerHeader />
        {children}
      </Box>
    </Box>
  );
}
