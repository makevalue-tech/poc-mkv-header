import MuiSidebar from "../Sidebar/MuiSidebar"
import TreeGrid from "../TreeGrid/TreeGrid"

function App() {
  return (
     <MuiSidebar children={<TreeGrid/>}/>    
  )
}

export default App
