import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  maxWidth: "500px",
  bgcolor: "background.paper",
  boxShadow: 24,
  // p: 2,
  borderRadius: "25px",
  maxHeight: "85%",
  overflowY: "scroll",
};

export default function ModalPopUp({ img }: any) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="popup-div">
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <IconButton
            edge="end"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
            sx={{
              position: "absolute",
              top: "5px",
              right: "15px",
              background: "#045768",
              color: "#fff",
            }}
          >
            <CloseIcon />
          </IconButton>
          <div className="image-div">
            <img src={img} alt={img} />
          </div>
        </Box>
      </Modal>
    </div>
  );
}
