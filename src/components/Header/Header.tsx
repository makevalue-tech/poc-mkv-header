import { BellAlertIcon } from "@heroicons/react/20/solid";
import { Search, Settings } from "@mui/icons-material";
import { AppBar, Toolbar } from "@mui/material";
import MakeLogo from "../../../public/logo-100px.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <AppBar position="fixed">
      <Toolbar className="bg-white">
        <Link to="/poc-mkv-header/">
          <img
            src={MakeLogo}
            alt="logo makevalue"
            className="mr-5"
            width={30}
          />
        </Link>

        <div className="w-full flex justify-between">
          <div className="ml-2 flex justify-start items-center relative">
            <input
              className="text-black border w-2/3 border-slate-200 rounded-lg pl-2  outline-sky-500"
              placeholder="Search..."
            />
            <Search fontSize="small" className="text-gray-400 absolute ml-24" />
          </div>
          <div className="flex justify-around w-20">
            <BellAlertIcon className="text-gray-500 hover:text-sky-400 cursor-pointer w-6" />
            <Settings className="text-gray-500 hover:text-sky-400 cursor-pointer" />
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
}
