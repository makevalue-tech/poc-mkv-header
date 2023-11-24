import { Box } from "@mui/material";
import MuiSidebar from "../../components/Sidebar/MuiSidebar";
import TreeGrid from "../../components/TreeGrid/TreeGrid";

function App() {
  return (
    <Box className="flex">
      <MuiSidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3, pt: 10 }}>
        <TreeGrid />
      </Box>
    </Box>
  );
}

export default App;