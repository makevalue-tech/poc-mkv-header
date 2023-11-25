import * as React from "react";
import { styled, Theme, CSSObject } from "@mui/material/styles";
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
import './MuiSidebar.css'
import MakeLogo from "../../../public/logo-100px.png";
import {
  Menu,
  Analytics,
  Settings,
  Search,
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
  Business,
  AccountBalance,
  AccountBalanceWallet,
} from "@mui/icons-material";
import {
  BellAlertIcon,
  PhoneArrowDownLeftIcon,
} from "@heroicons/react/20/solid";
import { Link, NavLink, useNavigate } from "react-router-dom";
import UserInfoModal from "../Modals/UserInfoModal/UserInfoModal";

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
  const [open, setOpen] = React.useState(true);
  const navigate = useNavigate();
  const register = [
    {
      name: "Centro de Custo",
      description: "Cadastrar centro de custo",
      href: "/poc-mkv-header/costcenter",
      icon: Business,
    },
    {
      name: "Plano de Contas",
      description: "Cadastrar plano de contas",
      href: "/accountplaning",
      icon: AccountBalance,
    },
    {
      name: "Conta Contábil",
      description: "Cadastrar Conta contábil",
      href: "/billaccount",
      icon: AccountBalanceWallet,
    },
  ];
  const products1 = [
    {
      name: "Investimento",
      description: "Make a complete analysis of your customers billing",
      href: "/poc-mkv-header/operations",
      icon: BarChart,
    },
    {
      name: "Empréstimo",
      description: "See your dashboard",
      href: "/loan",
      icon: PieChart,
    },
    {
      name: "Derivativo",
      description: "See all your active products",
      href: "/derivative",
      icon: LocalAtm,
    },
    {
      name: "Mutuo",
      description: "Connect with third-party applications",
      href: "/mutual",
      icon: CenterFocusStrong,
    },
    {
      name: "Garantia",
      description: "Automate your processes",
      href: "/garantee",
      icon: House,
    },
  ];

  const products2 = [
    {
      name: "Seguros",
      description: "Automate your processes",
      href: "/insurance",
      icon: Savings,
    },
    {
      name: "Arrendamento",
      description: "Automate your processes",
      href: "/rentals",
      icon: CarRental,
    },
    {
      name: "Consórcio",
      description: "Automate your processes",
      href: "/consortium",
      icon: LocalShipping,
    },
    {
      name: "AVP",
      description: "Automate your processes",
      href: "/avp",
      icon: ListAlt,
    },
    {
      name: "CBios",
      description: "Automate your processes",
      href: "/cbios",
      icon: LocationCity,
    },
    {
      name: "Dividendos",
      description: "Automate your processes",
      href: "/dividends",
      icon: PriceCheck,
    },
  ];

  const products3 = [
    {
      name: "Contábil",
      description: "Automate your processes",
      href: "/accountance",
      icon: AccountTree,
    },
    {
      name: "Relatório",
      description: "Automate your processes",
      href: "/report",
      icon: Analytics,
    },
    {
      name: "Dashboard",
      description: "Automate your processes",
      href: "/dashboard",
      icon: Addchart,
    },
    {
      name: "Controle de Risco",
      description: "Automate your processes",
      href: "/riskcontrol",
      icon: Warning,
    },
  ];

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar className="bg-white">
          <Link className="flex" to="/poc-mkv-header/">
            <img
              src={MakeLogo}
              alt="logo makevalue"
              className="mr-5"
              width={30}
            />
            <h1 className="text-gray-500 font-bold mr-10">MakeValue</h1>
          </Link>

          <IconButton
            color="default"
            aria-label="open drawer"
            onClick={() => setOpen(!open)}
            edge="start"
          >
            <Menu className="bg-sky-100 rounded-md" />
          </IconButton>
          <div className="w-full flex justify-between">
            <div className="ml-2 flex justify-start items-center">
              <input
                className="text-gray-500 border-r-0 border w-72 h-full placeholder:p-1 border-sky-200 pl-2 rounded-l-lg outline-none"
                placeholder="Search..."
              />
              <div className="flex items-center justify-center border border-l-0 h-full border-sky-200 rounded-r-lg pr-1">
                <Search fontSize="small" className="text-sky-300 ml-1 " />
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

              <UserInfoModal />
            </div>
          </div>
        </Toolbar>
      </AppBar>

      <Drawer sx={{}} variant="permanent" open={open}>
        <DrawerHeader sx={{ justifyContent: "space-around" }}>
          <IconButton onClick={() => setOpen(!open)}>
            <Menu className="bg-sky-100 rounded-md" />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {products1.map((item) => (
            <NavLink key={item.name} to={item.href}>
              <ListItem
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
            </NavLink>
            
          ))}
        </List>
        <Divider />
        <List>
          {products2.map((item) => (
            <NavLink key={item.name} to={item.href}>
              <ListItem
              
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
            </NavLink>
            
          ))}
        </List>
        <Divider />
        <List>
          {products3.map((item) => (
            <NavLink key={item.name} to={item.href}>
              <ListItem
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
            </NavLink>
            
          ))}
        </List>
        <Divider />
        {open ? (
          <h3 className="text-start ml-6 text-xl text-gray-500 font-semibold mt-4">
            Cadastros
          </h3>
        ) : null}
        <List>
          {register.map((item) => (
            <NavLink key={item.name} to={item.href}>
              <ListItem
              onClick={() => {navigate(item.href)}}
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
            </NavLink>
            
          ))}
        </List>
      </Drawer>

      
    </Box>
  );
}
