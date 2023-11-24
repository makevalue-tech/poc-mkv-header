import { Box, Button, TextField } from "@mui/material";
import { useContext, useState } from "react";
import { CostCenterContext } from "../../context/CostCenterProvider/CostCenterContext";
import { ICostCenter } from "../../context/CostCenterProvider/types";

interface ErrorMessages {
  descricao?: string | undefined;
  centroDeCusto?: string | undefined;
  codigoExterno?: string | undefined;
}
interface AddFormProps {
  theRow: ICostCenter | null;
  handleClose: () => void; // Define the type for handleClose prop
}

const EditForm: React.FC<AddFormProps> = ({ handleClose , theRow}) => {

  const id = theRow?.id

  const [descricao, setDescricao] = useState(theRow?.descricao)
  const [centroDeCusto, setCentroDeCusto] = useState(theRow?.centroDeCusto)
  const [codigoExterno, setCodigoExterno] = useState(theRow?.codigoExterno)
  const { updateData } = useContext(CostCenterContext);

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
      updateData();
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
          name="descricao"
          size="small"
          variant="outlined"
          required
          value={descricao}
          id="outlined-required"
          label="Descrição"
        />
        <TextField
          error={errorMessages.centroDeCusto.length > 0}
          helperText={errorMessages.centroDeCusto}
          name="centroDeCusto"
          size="small"
          variant="outlined"
          required
          value={centroDeCusto}
          id="outlined-required"
          label="Centro de Custo"
        />
        <TextField
          error={errorMessages.codigoExterno.length > 0}
          helperText={errorMessages.codigoExterno}
          name="codigoExterno"
          size="small"
          variant="outlined"
          required
          value={codigoExterno}
          id="outlined-required"
          label="Código Externo"
        />
      </div>
      <div className="flex justify-end gap-2 p-10 pr-12">
        <Button type="submit" variant="contained">
          Salvar
        </Button>
        <Button onClick={handleClose} variant="text" color="warning">
          Cancel
        </Button>
      </div>
    </Box>
  );
};

export default EditForm;
