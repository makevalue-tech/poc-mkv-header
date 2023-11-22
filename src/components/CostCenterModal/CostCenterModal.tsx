import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Add } from "@mui/icons-material";
import { Divider, TextField } from "@mui/material";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border:0,
  borderRadius:2,
  boxShadow: 24,
};

export default function CostCenterModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} startIcon={<Add />} variant="contained" color="primary">
        Criar
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography className=" p-4 text-gray-700" id="modal-modal-title" variant="h6" component="h2">
            Novo Centro de Custo
          </Typography>
          <Divider className="w-full" />
          <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '45ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div className="flex flex-col p-6 justify-center items-center">
        <TextField
          size="small"
          variant="standard"
          required
          id="outlined-required"
          label="Descrição"
          defaultValue=""
          helperText="Código externo obrigatório!"
        />
        <TextField
        size="small"
          variant="filled"
          required
          id="outlined-required"
          label="Código"
          defaultValue=""
        />
        <TextField
          size="small"
          variant="outlined"
          required
          id="outlined-required"
          label="Código Externo"
          defaultValue=""
          
        />
        
        
      </div>
      <div className="flex justify-end gap-2 p-10">
          <Button variant="contained">
            Criar
          </Button>
          <Button color="warning">
            Cancel
          </Button>
      </div>
      
      
      </Box>
        </Box>
      </Modal>
    </div>
  );
}
