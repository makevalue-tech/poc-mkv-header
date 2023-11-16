import { Box } from "@mui/material";
import { useMovieData } from "@mui/x-data-grid-generator";
import {
  DataGridPremium,
  GridColDef,
  useGridApiRef,
  useKeepGroupedColumnsHidden,
} from "@mui/x-data-grid-premium";
import { GridCellParams } from "@mui/x-data-grid-pro";

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

const COLUMNS: GridColDef[] = [
  { field: "agency", headerName: "Agency", width: 200 },
  {
    field: "company",
    headerName: "Company",
    width: 200,
  },
  {
    field: "account",
    headerName: "Account",
    width: 200,
  },
  {
    field: "value",
    headerName: "Value",
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
  const data = {
    rows: [
      {
        id: 1,
        company: "0001",
        agency: "5954",
        account: "0003458-8",
        value: 183,
      },
      {
        id: 2,
        company: "0001",
        agency: "5954",
        account: "0003458-8",
        value: 95,
      },
      {
        id: 3,
        company: "0001",
        agency: "5954",
        account: "0003458-8",
        value: 19700,
      },
      {
        id: 4,
        company: "0001",
        agency: "5954",
        account: "0003458-8",
        value: 23500,
      },
      {
        id: 5,
        company: "0001",
        agency: "5731",
        account: "00003642-5",
        value: 14300,
      },
      {
        id: 6,
        company: "0001",
        agency: "5731",
        account: "00003642-5",
        value: 12000,
      },
      {
        id: 7,
        company: "0001",
        agency: "5731",
        account: "00003642-5",
        value: 1560,
      },
      {
        id: 8,
        company: "0001",
        agency: "5731",
        account: "00002324-5",
        value: 1320,
      },
      {
        id: 9,
        company: "0001",
        agency: "5731",
        account: "00002324-5",
        value: 125,
      },
      {
        id: 10,
        company: "0001",
        agency: "5954",
        account: "0001540-8",
        value: 277,
      },
      {
        id: 11,
        company: "0001",
        agency: "5954",
        account: "0001540-8",
        value: 1900,
      },
    ],
  };
  const apiRef = useGridApiRef();

  const initialState = useKeepGroupedColumnsHidden({
    apiRef,
    initialState: {
      rowGrouping: {
        model: ["company", "agency", "account"],
      },
      aggregation: {
        model: {
          value: "sum",
        },
      },
    },
  });

  return (
    <div style={{ height: 370, width: "100%" }}>
      <Box
      sx={{
        "& .MuiDataGrid-footerCell": {
          backgroundColor: "#b9d5ff91",
          color: "#1a3e72",
        },
      }}
      >
        <DataGridPremium
          
          {...data}
          apiRef={apiRef}
          columns={COLUMNS}
          disableRowSelectionOnClick
          initialState={initialState}
          getCellClassName={(params: GridCellParams<any, any, number>) => {
            if (params.field != 'value' || params.value == null) {
              return '';
            }
            return params.field === 'value' ? 'sum' : ''; }}
          getAggregationPosition={(groupNode) =>
            groupNode.depth === -1 ? null : "footer"
          }
        />
      </Box>
    </div>
  );
}
