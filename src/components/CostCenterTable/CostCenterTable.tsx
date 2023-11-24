import { Delete, Search, Upload } from "@mui/icons-material";
import { InputAdornment, Stack, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import {
  DataGridPro,
  GridColDef,
  GridRowId,
  GridRowSelectionModel,
} from "@mui/x-data-grid-pro";
import { useContext, useState } from "react";
import SplitButton from "../SplitButton/SplitButton";
import { CostCenterContext } from "../../context/CostCenterProvider/CostCenterContext";
import { PiMicrosoftExcelLogoFill } from "react-icons/pi";
import { gridStyle } from "../../styles/muiGridStyles";
import EditCostCenterModal from "../Modals/CostCenterModals/EditCostCenterModal";
import { ICostCenter } from "../../context/CostCenterProvider/types";
import ViewCostCenterModal from "../Modals/CostCenterModals/ViewCostCenterModal";
export default function CostCenterTable() {
  const { data } = useContext(CostCenterContext);
  const { deleteRow } = useContext(CostCenterContext);

  const [checked, setChecked] = useState(false);
  const [isEditable, setEditable] = useState(false);
  const [checkedRows, setCheckedRows] = useState<GridRowId[]>([]);
  const [row, setRow] = useState<ICostCenter | null>(null);

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

  const handleSelection = (item: GridRowSelectionModel) => {
    setCheckedRows(item);
    if (item.length > 0 && item.length < 2) {
      setChecked(true);
      setEditable(true);
      console.log(item);
    } else if (item.length > 1) {
      setEditable(false);
      setChecked(true);
    } else {
      setChecked(false);
      setEditable(false);
    }
  };

  return (
    <div>
      <Box sx={gridStyle}>
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
            <Stack
              direction="row"
              className=" flex items-center justify-end w-full"
              spacing={2}
            >
              {!checked && <SplitButton />}
              {isEditable && (
                <>
                  <EditCostCenterModal theRow={row} />
                  <ViewCostCenterModal theRow={row} />
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
              params.indexRelativeToCurrentPage % 2 === 0 &&
              params.id != "auto-generated-group-footer-root"
                ? "even"
                : "odd"
            }
            onRowSelectionModelChange={(item) => {
              handleSelection(item);
              const selectedRowId = item[0]; // Assuming single selection
              const selectedRow = data.find(
                (row) => row.id.toString() === selectedRowId
              );
                setRow(selectedRow || null);
            }}
          />
        </div>
      </Box>
      {/* <p>Content of the selected cell: {content || 'No cell selected!w'}</p> */}
    </div>
  );
}
