import {
  BellAlertIcon,
  PhoneArrowDownLeftIcon,
} from "@heroicons/react/20/solid";
import { Search, Settings } from "@mui/icons-material";
import { Toolbar } from "@mui/material";
import MakeLogo from "../../../public/logo-100px.png";
import { Link } from "react-router-dom";
import ProfilePicture from "../../../public/8847137.png";

export default function Header() {
  return (
    <div className="border border-b-gray-200 shadow-md">
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
          <div className="ml-2 flex justify-start items-center">
            <input
              className="text-gray-500 border-r-0 border w-72 p-2 h-full placeholder:p-1 border-sky-200 pl-2 rounded-l-lg outline-none"
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

            <div className="rounded-full w-10 h-10 flex justify-center items-center">
              <img src={ProfilePicture} alt="" className="w-full" />
            </div>
          </div>
        </div>
      </Toolbar>
    </div>
  );
}
