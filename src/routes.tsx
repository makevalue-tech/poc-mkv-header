import { createBrowserRouter } from "react-router-dom";
import Operations from "./pages/Operations/Operations";
import Home from "./pages/Home/Home";
import CostCenter from "./pages/CostCenter/CostCenter";

export const router = createBrowserRouter([
  {
    path: '/poc-mkv-header/operations',
    element: <Operations />,
  },
  {
    path: '/poc-mkv-header/',
    element: <Home />,
  },
  {
    path: '/poc-mkv-header/costcenter',
    element: <CostCenter />,
  },
])