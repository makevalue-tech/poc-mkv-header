import { Box } from "@mui/material";
import MuiSidebar from "../Sidebar/MuiSidebar";
import TreeGrid from "../TreeGrid/TreeGrid";

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
