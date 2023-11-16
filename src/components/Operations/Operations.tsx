import Header from "../Header/Header"
import MuiSidebar from "../Sidebar/MuiSidebar"
import Table from "../Table/Table"

function App() {
  return (
    <>
     <MuiSidebar children={<Table/>}/>
    </>
  )
}

export default App
