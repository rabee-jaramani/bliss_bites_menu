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
  width: "95%",
  maxWidth: "500px",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 2,
  borderRadius: "10px",
};

export default function ModalPopUp({ itemDetails }: any) {
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
            sx={{ position: "absolute", top: 0, right: "10px" }}
          >
            <CloseIcon />
          </IconButton>
          <Typography
            className="popup-text"
            id="modal-modal-title"
            variant="h6"
            component="h2"
            fontSize={16}
            fontStyle="italic"
            fontWeight={700}
          >
            {itemDetails.itemName}
          </Typography>
          {itemDetails.description ? (
            <Typography
              className="popup-text"
              id="modal-modal-description"
              sx={{ mt: 2 }}
              fontSize={14}
            >
              <strong>Description:</strong>
              <br />
              {itemDetails.description}
            </Typography>
          ) : (
            ""
          )}

          <Typography
            className="popup-text"
            id="modal-modal-price"
            sx={{ mt: 2 }}
            fontSize={14}
          >
            <strong>Price</strong>
            <br />
            AED {itemDetails.price}
          </Typography>
          {itemDetails.addons[0] !== "" ? (
            <Typography
              className="popup-text"
              id="modal-modal-addon"
              sx={{ mt: 2 }}
              fontSize={14}
            >
              <strong>Add On:</strong>
              {itemDetails.addons.map((addon: any) => {
                return <p>{addon}</p>;
              })}
            </Typography>
          ) : (
            ""
          )}
        </Box>
      </Modal>
    </div>
  );
}
