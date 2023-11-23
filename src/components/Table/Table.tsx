import {
  Delete,
  Edit,
  Search,
  Upload,
  Visibility,
} from "@mui/icons-material";
import { Button, InputAdornment, Stack, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import { DataGridPro, GridColDef, GridRowId, gridClasses } from "@mui/x-data-grid-pro";
import { useContext, useState } from "react";
import SplitButton from "../SplitButton/SplitButton";
import { CostCenterContext } from "../../context/CostCenterProvider/CostCenterContext";
import { PiMicrosoftExcelLogoFill } from "react-icons/pi"
export default function Table() {
  const {data} = useContext(CostCenterContext)
  const COLUMNS: GridColDef[] = [
    {
      field: "descricao",
      headerName: "Descrição",
      width: 200,
    },
    {
      field: "centroDeCusto",
      headerName: "Centro de Custo",
      width: 200,
    },
    {
      field: "codigoExterno",
      headerName: "Código Externo",
      width: 200,
    },
  ];

  // setData((data) => ({
  //   ...data,
  //   rows: [
  //     ...data.rows, 
  //     {
  //     id: 8,
  //     descricao: "makevalue",
  //     centroDeCusto: 41623,
  //     codigoExterno: 4351,
  //     }
  //   ]
  // }))

  
  


      
  // const [, setContent] = useState<string | null>(null);

  const [checked, setChecked] = useState(false);
  const [isEditable, setEditable] = useState(false);

  const {deleteRow} = useContext(CostCenterContext)

    const [checkedRows, setCheckedRows] = useState<GridRowId[]>([]);
  

  return (
    <div>
      <Box
        sx={{
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
              {!checked && (
                <SplitButton />
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
                    onClick={() => deleteRow(checkedRows.toString())}
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
                  {<PiMicrosoftExcelLogoFill size={22} />}
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

            rows={data}
            density="compact"
            sx={{ borderRadius: 0 }}
            className="bg-white"
            columns={COLUMNS}
            loading={data.length === 0}
            rowHeight={38}
            hideFooter
            onRowClick={(e) => console.log(e)}
            checkboxSelection
            getRowClassName={(params) =>
              params.indexRelativeToCurrentPage % 2 === 0 && params.id != 'auto-generated-group-footer-root' ? 'even' : 'odd' 
            }
            onRowSelectionModelChange={(item) => {
              setCheckedRows(item)
              if (item.length > 0 && item.length < 2) {
                setChecked(true);
                setEditable(true);
                console.log(item)
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
