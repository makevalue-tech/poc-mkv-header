import {
  Delete,
  Download,
  Edit,
  Search,
  Upload,
  Visibility,
} from "@mui/icons-material";
import { Button, FormControl, InputAdornment, InputLabel, MenuItem, Select, SelectChangeEvent, Stack, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import { DataGridPro, GridColDef, gridClasses } from "@mui/x-data-grid-pro";
import { useState } from "react";
import CostCenterModal from "../CostCenterModal/CostCenterModal";

export default function Table() {
  const COLUMNS: GridColDef[] = [
    {
      field: "descricao",
      headerName: "Descrição",
      width: 200,
    },
    {
      field: "codigo",
      headerName: "Código",
      width: 200,
    },
    {
      field: "codigoExterno",
      headerName: "Código Externo",
      width: 200,
    },
  ];
  const data = {
    rows: [
      {
        id: 1,
        descricao: "makevalue",
        codigo: 123,
        codigoExterno: 1234,
      },
      {
        id: 2,
        descricao: "makevalue",
        codigo: 3412,
        codigoExterno: 543,
      },
      {
        id: 3,
        descricao: "makevalue",
        codigo: 4123,
        codigoExterno: 431,
      },
      {
        id: 4,
        descricao: "makevalue",
        codigo: 4123,
        codigoExterno: 431,
      },
      {
        id: 5,
        descricao: "makevalue",
        codigo: 4123,
        codigoExterno: 431,
      },
      {
        id: 6,
        descricao: "makevalue",
        codigo: 4123,
        codigoExterno: 431,
      },
      {
        id: 7,
        descricao: "makevalue",
        codigo: 4123,
        codigoExterno: 431,
      },
    ],
  };
  // const [, setContent] = useState<string | null>(null);

  const [checked, setChecked] = useState(false);
  const [isEditable, setEditable] = useState(false);

    const [sort, setSort] = useState('');
  
    const handleChange = (event: SelectChangeEvent) => {
      setSort(event.target.value as string);
    };

  // const eventListener = useCallback((event: any) => {
  //   console.log("evento:", event);
  // }, []);

  return (
    <div>
      <Box
        sx={{
          height: 485,
          width: "100%",
          [`& .${gridClasses.row}.even`]: {
            backgroundColor:"#d4e0f0"
          },
          [`& .${gridClasses.row}.odd`]: {
            backgroundColor:"#dfecf5"
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "#f1f5f9",
            borderRadius: 0,
          },
          "& .MuiDataGrid": {
            borderRadius: 0,
          },
        }}
      >
        <div className="bg-white h-fit rounded-md border border-gray-200">
          <div className="flex justify-between items-center p-4">
            <TextField
              style={{ paddingLeft: 10 }}
              size="small"
              className="border "
              placeholder="Search"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search fontSize="small" />
                  </InputAdornment>
                ),
              }}
            />
            <Stack direction="row" className=" flex items-center justify-end w-full" spacing={2}>
              <FormControl size="small" className="w-60 align-center" >
                <InputLabel id="select">Sort by (User Info)</InputLabel>
                <Select
                
                  size="small"
                  labelId="select"
                  id="select"
                  value={sort}
                  label="Sort by (user info)"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
              {!checked && (
                <CostCenterModal />
              )}
              {isEditable && (
                <>
                  <Button
                    startIcon={<Edit />}
                    variant="contained"
                    color="primary"
                  >
                    Editar
                  </Button>
                  <button title="Visualizar" className="text-gray-500 hover:text-sky-500">
                    <Visibility />
                  </button>
                </>
              )}
              <div className="pr-4 flex gap-3 ">
                {checked && (
                  <button
                    className="text-gray-500 hover:text-red-500 "
                    title="Excluir"
                  >
                    {<Delete fontSize="medium" />}
                  </button>
                )}

                <button
                  className="text-gray-500 hover:text-sky-500"
                  title="Export Excel"
                >
                  {<Download fontSize="medium" />}
                </button>
                <button
                  className="text-gray-500 hover:text-sky-500"
                  title="Import CSV"
                >
                  {<Upload fontSize="medium" />}
                </button>
              </div>
            </Stack>
          </div>
          <DataGridPro
            {...data}
            density="compact"
            sx={{ borderRadius: 0 }}
            className="bg-white"
            columns={COLUMNS}
            loading={data.rows.length === 0}
            rowHeight={38}
            hideFooter
            checkboxSelection
            getRowClassName={(params) =>
              params.indexRelativeToCurrentPage % 2 === 0 && params.id != 'auto-generated-group-footer-root' ? 'even' : 'odd' 
            }
            onRowSelectionModelChange={(item) => {
              if (item.length > 0 && item.length < 2) {
                setChecked(true);
                setEditable(true);
              } else if (item.length > 1) {
                setEditable(false);
                setChecked(true);
              } else {
                setChecked(false);
                setEditable(false);
              }
            }}
            disableRowSelectionOnClick
          />
        </div>
      </Box>
      {/* <p>Content of the selected cell: {content || 'No cell selected!w'}</p> */}
    </div>
  );
}
