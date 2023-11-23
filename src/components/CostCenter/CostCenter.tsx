import { Box } from "@mui/material";
import MuiSidebar from "../Sidebar/MuiSidebar";
import Table from "../Table/Table";
import { CostCenterProvider } from "../../context/CostCenterProvider/CostCenterContext";

const CostCenter = () => {
  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <MuiSidebar />
      <Box className="bg-slate-100 h-screen" component="main" sx={{ flexGrow: 1, p: 3, pt: 10 }}>
        <h2 className="text-gray-600 text-1xl font-semibold ml-1 mb-2">Centro de Custo</h2>
        <CostCenterProvider>
          <Table />
        </CostCenterProvider>
        
        
       
      </Box>
    </Box>
  );
};

export default CostCenter;
