import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Add } from "@mui/icons-material";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "background.paper",
  border:0,
  borderRadius:2,
  boxShadow: 24,
  p: 4,
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
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Novo Centro de Custo
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat perspiciatis quisquam autem placeat aspernatur saepe veritatis, omnis dolorem eligendi officiis maiores sequi culpa neque labore ab, facilis unde excepturi, rerum eum soluta consequuntur? Distinctio, ducimus eum reiciendis ex repellat molestias?commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
