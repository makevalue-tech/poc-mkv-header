import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Add, Close } from "@mui/icons-material";

import { Divider, TextField } from "@mui/material";
import { CostCenterContext } from "../../context/CostCenterProvider/CostCenterContext";
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: 0,
  borderRadius: 2,
  boxShadow: 24,
};

interface ErrorMessages {
  descricao?: string | undefined;
  centroDeCusto?: string | undefined;
  codigoExterno?: string | undefined;
}

export default function CostCenterModal() {
  const [open, setOpen] = React.useState(false);
  const [errorMessages, setErrorMessages] = React.useState({
    descricao: "",
    centroDeCusto: "",
    codigoExterno: "",
  });
  const [newCostCenter, setNewCostCenter] = React.useState({
    descricao: "",
    centroDeCusto: "",
    codigoExterno: "",
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setNewCostCenter({
      descricao: "",
      centroDeCusto: "",
      codigoExterno: "",
    });
    setErrorMessages({
      descricao: "",
      centroDeCusto: "",
      codigoExterno: "",
    });
    setOpen(false);
  };

  const { addRow } = React.useContext(CostCenterContext);
  const onInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setNewCostCenter({ ...newCostCenter, [e.target.name]: e.target.value });
    setErrorMessages({
      ...errorMessages,
      [e.target.name]: "",
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const errors: ErrorMessages = {};

    // Validation for "descricao"
    if (newCostCenter.descricao.trim() === "") {
      errors.descricao = "Required Field(*)";
    }

    // Validation for "centroDeCusto"
    if (newCostCenter.centroDeCusto.trim() === "") {
      errors.centroDeCusto = "Required Field(*)";
    }

    // Validation for "codigoExterno"
    if (newCostCenter.codigoExterno.trim() === "") {
      errors.codigoExterno = "Required Field(*)";
    }
    const errorsToSet = {
      descricao: errors.descricao ?? '',
      centroDeCusto: errors.centroDeCusto ?? '',
      codigoExterno: errors.codigoExterno ?? '',
    };
  
    // Check if any errors exist
    if (
      errorsToSet.descricao !== '' ||
      errorsToSet.centroDeCusto !== '' ||
      errorsToSet.codigoExterno !== ''
    ) {
      setErrorMessages(errorsToSet);
    } else {
      addRow(
        newCostCenter.descricao,
        newCostCenter.centroDeCusto,
        newCostCenter.codigoExterno
      );
      handleClose();
    }
  };

  return (
    <div>
      <Button
        onClick={handleOpen}
        startIcon={<Add />}
        variant="contained"
        color="primary"
      >
        Criar
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="flex items-center justify-between">
            <Typography
              className=" p-4 text-gray-500"
              id="modal-modal-title"
              variant="h6"
              component="h2"
            >
              Novo Centro de Custo
            </Typography>
            <button onClick={handleClose}>
              <Close className="m-4 text-gray-400 hover:text-gray-500 cursor-pointer" />
            </button>
          </div>

          <Divider className="w-full" />
          <Box
            onSubmit={handleSubmit}
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "45ch" },
            }}
            noValidate
            autoComplete="on"
          >
            <div className="flex flex-col p-6 justify-center items-center">
              <TextField
                error={errorMessages.descricao.length > 0}
                helperText={errorMessages.descricao}
                value={newCostCenter.descricao}
                onChange={onInputChange}
                name="descricao"
                size="small"
                variant="outlined"
                required
                id="outlined-required"
                label="Descrição"
              />
              <TextField
              error={errorMessages.centroDeCusto.length > 0}
              helperText={errorMessages.centroDeCusto}
                onChange={onInputChange}
                name="centroDeCusto"
                size="small"
                variant="outlined"
                required
                id="outlined-required"
                label="Centro de Custo"
              />
              <TextField
              error={errorMessages.codigoExterno.length > 0}
              helperText={errorMessages.codigoExterno}
                onChange={onInputChange}
                name="codigoExterno"
                size="small"
                variant="outlined"
                required
                id="outlined-required"
                label="Código Externo"
              />
            </div>
            <div className="flex justify-end gap-2 p-10 pr-12">
              <Button type="submit" variant="contained">
                Criar
              </Button>
              <Button
                onClick={handleClose}
                variant="text"
                color="warning"
              >
                Cancel
              </Button>
            </div>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
