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
  maxHeight: "80%",
  overflowY: "scroll",
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
            <img src={itemDetails.image} alt={itemDetails.itemName} />
          </div>
          <div className="details-div">
            {itemDetails.allergies[0]!==""?
             itemDetails.allergies[0].allergyName.toLowerCase().includes(`chef`) ? (
              <>
               <div className="popup-icon-name-div"><img alt={itemDetails.allergies[0].allergyName} width={25} src={itemDetails.allergies[0].allergySrc}/><span>{itemDetails.allergies[0].allergyName}</span></div>
              </>
            ) : (
              ""
            )
            :
            ""
            }
           
            <div className="under-image-div">
              <Typography
                className="popup-title"
                id="modal-modal-title"
                variant="h6"
                component="h2"
                fontSize={16}
                fontWeight={700}
                lineHeight={2}
                // display="flex"
                // alignItems="center"
                // gap="3px"
              >
                {itemDetails.itemName}
              </Typography>

              <Typography
                className="popup-title"
                id="modal-modal-price"
                // sx={{ mt: 0.3 }}
                fontSize={14}
              >
                <span style={{ fontSize: "12px" }}>AED</span>
                <strong
                  style={{
                    fontSize: "22px",
                    fontFamily: "'Libre Caslon Text', serif",
                  }}
                >
                  {itemDetails.price}
                </strong>
              </Typography>
            </div>
            {itemDetails.description ? (
              <Typography
                id="modal-modal-description"
                sx={{ mt: 2 }}
                fontSize={14}
                color="#2c2c2c"
              >
                {itemDetails.description}

              {/* If the item is Pasta add the below */}
                {itemDetails.itemName==="Al Pomodoro"||itemDetails.itemName==="Alfredo"||itemDetails.itemName==="Bliss"?
                <>
                <br/>
                <strong style={{color:'#045768'}}>A choice of penne or fettuccine</strong>
                </>
                :''
              }
              {/* END If the item is Pasta add the below */}
              </Typography>
            ) : (
              ""
            )}
          {/* allergies */}
                {
                itemDetails.allergies[0]!==""?
                <div className="allergies-icons-div">
                  {itemDetails.allergies.map((allergy:any)=>{
                  
                  return <>
                    {
                      allergy.allergyName.toLowerCase().includes(`chef`)?'':<div className="popup-icon-name-div" key={allergy.allergyName}><img alt={allergy.allergyName} width={25} src={allergy.allergySrc}/><span>{allergy.allergyName}</span> </div>
                    }
                    </>
                   
                  })}
                  </div>:
                ""
                }
                {/* below check if te item is for Chef Must Have to remove the add on */}
                {
                !itemDetails.serve1?
                itemDetails.addons[0] !== "" ? (
                  <div className="add-on-div">
                    <Typography
                      className="popup-text"
                      id="modal-modal-addon"
                      sx={{ mt: 2 }}
                      fontSize={14}
                    >
                      <strong
                        style={{
                          color: "#045768",
                          fontFamily: "'Libre Caslon Text', serif",
                        }}
                      >
                        Add On:
                      </strong>
                    </Typography>
                    {itemDetails.addons.map((addon: any, index: any) => {
                      return <span key={index}>{addon}</span>;
                    })}
                  </div>
                ) : (
                  ""
                ):
                <div className="add-on-div">
                    <Typography
                      className="popup-text"
                      id="modal-modal-addon"
                      sx={{ mt: 2 }}
                      fontSize={14}
                    >
                      <strong
                        style={{
                          color: "#045768",
                          fontFamily: "'Libre Caslon Text', serif",
                        }}
                      >
                        Serves 1
                      </strong>
                    </Typography>
                  </div>
                }
          {/* END check if te item is for Chef Must Have to remove the add on */}

            <Typography
              className="no-added"
              id="modal-info-bottom"
              sx={{ mt: 2 }}
              fontSize={14}
              component="div"
            >
              <strong style={{fontSize:'12px'}}>No added emulsifiers and preservatives:</strong>
              <ul style={{ listStyleType: "none" }}>
                <li style={{fontSize:'11px'}}>*Kindly inquire for plant-based alternatives</li>
                <li style={{fontSize:'11px'}}>*Kindly ask for Nut free and Dairy free option</li>
                <li style={{fontSize:'11px'}}>*All our dishes are made with millets</li>
                <li style={{fontSize:'11px'}}>*All our dishes contain coconut and date sugar</li>
              </ul>
              <br />
            </Typography>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
