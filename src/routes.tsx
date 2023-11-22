import { createBrowserRouter } from "react-router-dom";
import Operations from "./components/Operations/Operations";
import Home from "./components/Home/Home";
import CostCenter from "./components/CostCenter/CostCenter";

export const router = createBrowserRouter([
  {
    path: '/poc-mkv-header/operations',
    element: <Operations />,
  },
  {
    path: '/poc-mkv-header/home',
    element: <Home />,
  },
  {
    path: '/poc-mkv-header/',
    element: <CostCenter />,
  },
])