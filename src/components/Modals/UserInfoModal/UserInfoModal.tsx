import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Close } from "@mui/icons-material";
import ProfilePicture from "../../../../public/8847137.png";
import { Button } from "@mui/material";


const style = {
  position: "fixed" as "fixed",
  top: "74px",
  right: "8px",
  
  width: 300,
  bgcolor: "background.paper",
  border: 0,
  borderRadius: 2,
  boxShadow: 24,
};

export default function UserInfoModal() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button onClick={handleOpen} className="rounded-full w-10 h-10 flex justify-center items-center">
        <img src={ProfilePicture} alt="" className="w-full" />
      </button>
      <Modal
        open={open}
        sx={{ '& .MuiBackdrop-root': { backgroundColor: 'transparent' } }}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="flex flex-col items-center justify-center">
            <Typography
              className=" p-4 text-center text-gray-500"
              id="modal-modal-title"
              variant="h6"
              component="h2"
            >
              dev@makevalue.com.br
            </Typography>
            <img src={ProfilePicture} alt="" className="w-24" />
            <Typography fontWeight={500} className="p-4 font-bold">
              Make Value
            </Typography>
          </div>
          <div className="m-3 flex justify-center">
          <Button variant="outlined">Logout</Button>
          </div>
          
        </Box>
      </Modal>
    </div>
  );
}
