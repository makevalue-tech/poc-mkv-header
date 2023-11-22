import {
  Add,
  Delete,
  Download,
  Edit,
  Upload,
  Visibility,
} from "@mui/icons-material";
import { Button, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import { DataGridPro, GridColDef } from "@mui/x-data-grid-pro";
import { useState } from "react";

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
    ],
  };
  // const [, setContent] = useState<string | null>(null);
  
  const [checked, setChecked] = useState(false);
  const [isEditable, setEditable] = useState(false);

  // const eventListener = useCallback((event: any) => {
  //   console.log("evento:", event);
  // }, []);

  return (
    <div>
      <Box sx={{ height: 485, width: "100%" }}>
        <div className="mb-4 flex gap-x-2">
          <Stack direction="row" spacing={2}>
            {!checked && (
              <Button startIcon={<Add />} variant="contained" color="primary">
                Criar
              </Button>
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
                <Button
                  startIcon={<Visibility />}
                  variant="contained"
                  color="primary"
                >
                  Visualizar
                </Button>
              </>
            )}

            {checked && (
              <Button
                startIcon={<Delete />}
                variant="contained"
                color="warning"
              >
                Excluir
              </Button>
            )}

            <Button
              startIcon={<Download />}
              variant="contained"
              color="primary"
            >
              Exportar Excel
            </Button>
            <Button startIcon={<Upload />} variant="contained" color="primary">
              Importar Carga
            </Button>
          </Stack>
        </div>
        <DataGridPro
          {...data}
          columns={COLUMNS}
          loading={data.rows.length === 0}
          rowHeight={38}
          hideFooter
          checkboxSelection
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
      </Box>
      {/* <p>Content of the selected cell: {content || 'No cell selected!w'}</p> */}
    </div>
  );
}
