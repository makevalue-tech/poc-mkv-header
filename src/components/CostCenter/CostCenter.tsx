import { Box } from "@mui/material";
import MuiSidebar from "../Sidebar/MuiSidebar";
import Table from "../Table/Table";

const CostCenter = () => {
  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <MuiSidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3, pt: 10 }}>
        <Table />
      </Box>
    </Box>
  );
};

export default CostCenter;
