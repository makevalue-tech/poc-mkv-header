import { Box, Button, TextField } from "@mui/material";
import { useContext, useState } from "react";
import { CostCenterContext } from "../../context/CostCenterProvider/CostCenterContext";

interface ErrorMessages {
  descricao?: string | undefined;
  centroDeCusto?: string | undefined;
  codigoExterno?: string | undefined;
}
interface AddFormProps {
  handleClose: () => void; // Define the type for handleClose prop
}

const AddForm: React.FC<AddFormProps> = ({ handleClose }) => {

  const [errorMessages, setErrorMessages] = useState({
    descricao: "",
    centroDeCusto: "",
    codigoExterno: "",
  });
  const [newCostCenter, setNewCostCenter] = useState({
    descricao: "",
    centroDeCusto: "",
    codigoExterno: "",
  });

  const { addRow } = useContext(CostCenterContext);
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
        <Button onClick={handleClose} variant="text" color="warning">
          Cancel
        </Button>
      </div>
    </Box>
  );
};

export default AddForm;
