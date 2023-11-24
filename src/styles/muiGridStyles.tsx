import { gridClasses } from "@mui/x-data-grid-pro";

export const gridStyle = {
  height: 485,
  width: "100%",
  [`& .${gridClasses.row}.even`]: {
    backgroundColor:"#fff"
  },
  [`& .${gridClasses.row}.odd`]: {
    backgroundColor:"#F2FBFF"
  },
  "& .MuiDataGrid-columnHeaders": {
    backgroundColor: "#f1f5f9",
    borderRadius: 0,
  },
  "& .MuiDataGrid": {
    borderRadius: 0,
  },
}