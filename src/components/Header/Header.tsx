import {
  BellAlertIcon,
  PhoneArrowDownLeftIcon,
} from "@heroicons/react/20/solid";
import { Search, Settings } from "@mui/icons-material";
import { Toolbar } from "@mui/material";
import MakeLogo from "../../../public/logo-100px.png";
import { Link } from "react-router-dom";
import UserInfoModal from "../Modals/UserInfoModal/UserInfoModal";

export default function Header() {
  return (
    <div className="border border-b-gray-200 shadow-md">
      <Toolbar className="bg-white justify-between md:justify-normal">
        <Link to="/poc-mkv-header/">
          <img
            src={MakeLogo}
            alt="logo makevalue"
            className="mr-5"
            width={30}
          />
        </Link>

        <div className="md:w-full flex justify-between">
          <div className="hidden md:flex ml-2 justify-start items-center">
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
              <PhoneArrowDownLeftIcon className=" text-gray-500 hover:text-sky-400 cursor-pointer w-5 h-5" />
            </div>
            <div className="p-1  bg-sky-200 rounded-md">
              <BellAlertIcon className="text-gray-500 hover:text-sky-400 cursor-pointer w-5 h-5" />
            </div>
            <div className="p-1 bg-sky-200 rounded-md">
              <Settings fontSize="small" className="text-gray-500 hover:text-sky-400 cursor-pointer" />
            </div>

            <UserInfoModal />
          </div>
        </div>
      </Toolbar>
    </div>
  );
}
