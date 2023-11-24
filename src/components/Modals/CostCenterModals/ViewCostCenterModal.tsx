import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Close, Visibility } from "@mui/icons-material";
import { Divider } from "@mui/material";
import { ICostCenter } from "../../../context/CostCenterProvider/types";
import ViewForm from "../../Forms/ViewForm";

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

export default function ViewCostCenterModal({
  theRow,
}: {
  theRow: ICostCenter | null;
}) {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button onClick={handleOpen} title="Visualizar" className="text-gray-500 hover:text-sky-500">
        <Visibility />
      </button>
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
          <ViewForm theRow={theRow} handleClose={handleClose} />
        </Box>
      </Modal>
    </div>
  );
}
