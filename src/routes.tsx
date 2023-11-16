import { createBrowserRouter } from "react-router-dom";
import Operations from "./components/Operations/Operations";
import Home from "./components/Home/Home";


export const router = createBrowserRouter([
  
  {
    path: '/poc-mkv-header/',
    element: <Home />,
  },
  {
    path: '/poc-mkv-header/operations',
    element: <Operations />,
  }
])