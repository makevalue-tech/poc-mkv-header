import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import { ICostCenter } from "../../context/CostCenterProvider/types";

interface AddFormProps {
  theRow: ICostCenter | null;
  handleClose: () => void; // Define the type for handleClose prop
}

const EditForm: React.FC<AddFormProps> = ({ handleClose , theRow}) => {

  const [descricao, ] = useState(theRow?.descricao)
  const [centroDeCusto, ] = useState(theRow?.centroDeCusto)
  const [codigoExterno, ] = useState(theRow?.codigoExterno)



  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "45ch" },
      }}
    >
      <div className="flex flex-col p-6 justify-center items-center">
        <TextField
          name="descricao"
          size="small"
          variant="outlined"
          required
          disabled
          value={descricao}
          id="outlined-required"
          label="Descrição"
        />
        <TextField
          name="centroDeCusto"
          size="small"
          disabled
          variant="outlined"
          required
          value={centroDeCusto}
          id="outlined-required"
          label="Centro de Custo"
        />
        <TextField
          name="codigoExterno"
          size="small"
          variant="outlined"
          required
          disabled
          value={codigoExterno}
          id="outlined-required"
          label="Código Externo"
        />
      </div>
      <div className="flex justify-end gap-2 p-10 pr-12">
        <Button onClick={handleClose} variant="text" color="warning">
          Fechar
        </Button>
      </div>
    </Box>
  );
};

export default EditForm;
