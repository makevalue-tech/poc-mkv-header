import { Box, Button} from "@mui/material";
import {
  DataGridPremium,
  GridColDef,
  useGridApiRef,
  useKeepGroupedColumnsHidden,
} from "@mui/x-data-grid-premium";
import {
  GridCellParams,
  GridGroupNode,
  gridClasses,
} from "@mui/x-data-grid-pro";
import React, { useState } from "react";


const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

const COLUMNS: GridColDef[] = [
  { field: "company", headerName: "Company", width: 200 },
  {
    field: "agency",
    headerName: "Agency",
    width: 200,
  },
  {
    field: "account",
    headerName: "Account",
    width: 200,
  },
  {
    field: "gross",
    headerName: "Gross",
    type: "number",
    width: 150,
    groupable: false,
    valueFormatter: ({ value }) => {
      if (!value) {
        return value;
      }
      return currencyFormatter.format(value);
    },
  },
];

export default function AggregationGetAggregationPosition() {
  const apiRef = useGridApiRef();

  const [expanded, setExpanded] = useState(0);

  const debug = (params: GridGroupNode) =>
    console.info("Row expansion changed for row ", params.id);

  React.useEffect(() => {
    apiRef.current.subscribeEvent("rowExpansionChange", debug);
  }, [apiRef]);

  const data = {
    rows: [
      {
        id: 1,
        company: "0001",
        agency: "5954",
        account: "0003458-8",
        gross: 183,
      },
      {
        id: 2,
        company: "0001",
        agency: "5954",
        account: "0003458-8",
        gross: 95,
      },
      {
        id: 3,
        company: "0001",
        agency: "5954",
        account: "0003458-8",
        gross: 19700,
      },
      {
        id: 4,
        company: "0001",
        agency: "5954",
        account: "0003458-8",
        gross: 23500,
      },
      {
        id: 5,
        company: "0001",
        agency: "5731",
        account: "00003642-5",
        gross: 14300,
      },
      {
        id: 6,
        company: "0001",
        agency: "5731",
        account: "00003642-5",
        gross: 12000,
      },
      {
        id: 7,
        company: "0001",
        agency: "5731",
        account: "00003642-5",
        gross: 1560,
      },
      {
        id: 8,
        company: "0001",
        agency: "5731",
        account: "00002324-5",
        gross: 1320,
      },
      {
        id: 9,
        company: "0001",
        agency: "5731",
        account: "00002324-5",
        gross: 125,
      },
      {
        id: 10,
        company: "0001",
        agency: "5954",
        account: "0001540-8",
        gross: 277,
      },
      {
        id: 11,
        company: "0001",
        agency: "5954",
        account: "0001540-8",
        gross: 1900,
      },
    ],
  };


  const initialState = useKeepGroupedColumnsHidden({
    apiRef,
    initialState: {
      rowGrouping: {
        model: [],
      },
      aggregation: {
        model: {
          gross: "sum",
        },
      },
    },
  });

 
  


  return (
    <div style={{ height: 370, width: "100%" }}>
      <Box
        sx={{
          [`& .${gridClasses.row}.even`]: {
            backgroundColor:"#d4e0f0"
          },
          [`& .${gridClasses.row}.odd`]: {
            backgroundColor:"#dfecf5"
          },
          [`& .${gridClasses.row}.isLastVisible`]: {
            backgroundColor:"#fffdc0"
          },
          
          "& .MuiDataGrid-aggregationColumnHeaderLabel": {
            color: "#000",
        
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "#e5e5e5",
            color: "#000"
          },
          "& .MuiDataGrid-row": {
            backgroundColor: "white",
          },
          "& .MuiDataGrid-footerContainer": {
            backgroundColor: "#e5e5e5"
          },
          
          "& .MuiDataGrid-footerCell": {
            backgroundColor: "#fffdc0",
            fontWeight:'bold',
            color: "#000",
          },
        }}
      >
        <Button
          size="small"
          onClick={() => expanded === 0 ? setExpanded(-1) : setExpanded(0) }
        >
          {expanded === 0 ? "Expand All" : "Collapse All"}
        </Button>
        <Box>
          <DataGridPremium
            {...data}
            apiRef={apiRef}
            density="compact"
            
            columns={COLUMNS}
            defaultGroupingExpansionDepth={expanded}
            disableRowSelectionOnClick
            initialState={initialState}
            getRowClassName={(params) =>
              params.indexRelativeToCurrentPage % 2 === 0 && params.id != 'auto-generated-group-footer-root' ? 'even' : 'odd' &&
              params.id === 'auto-generated-group-footer-root'  ? 'isLastVisible' : ''
            }
            
            rowGroupingColumnMode="multiple"
            getCellClassName={(params: GridCellParams<any, any, number>) => {
              if (params.field != "value" || params.value == null) {
                return "";
              }
              return params.field === "value" ? "sum" : "";
            }}
          />
        </Box>
      </Box>
    </div>
  );
}
