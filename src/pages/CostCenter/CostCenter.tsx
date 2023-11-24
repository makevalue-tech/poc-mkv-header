import { Box } from "@mui/material";
import MuiSidebar from "../../components/Sidebar/MuiSidebar";
import { CostCenterProvider } from "../../context/CostCenterProvider/CostCenterContext";
import CostCenterTable from "../../components/CostCenterTable/CostCenterTable";

const CostCenter = () => {
  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <MuiSidebar />
      <Box className="bg-slate-100 h-screen" component="main" sx={{ flexGrow: 1, p: 3, pt: 10 }}>
        <h3 className="text-gray-600 text-1xl font-semibold ml-1 mb-2">Centro de Custo</h3>
        <CostCenterProvider>
          <CostCenterTable />
        </CostCenterProvider>
      </Box>
    </Box>
  );
};

export default CostCenter;
