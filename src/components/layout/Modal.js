import { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import SearchIcon from "@mui/icons-material/Search";

// pasar a un archivo aparte
const style = {
  // modal
  position: "absolute",
  top: "50%",
  left: "50%",

  width: 567,
  height: 310,

  textAlign: "center",
  fontFamily: "Poppins, sans-serif",

  p: 4,
  borderRadius: 8,
  background: "#F4F4F4",
  transform: "translate(-50%, -50%)",
  border: "0px solid",
};

export default function BasicModal() {
  const [open, setOpen] = useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <div className="info-buton">
        <SearchIcon onClick={handleOpen} />
      </div>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <h2 className="modal-title">WORLD WILD FIRES IN REAL TIME</h2>
          <br />
          <p className="modal-description">
            Discover what are some of the forestry events that are happening
            anywhere in the world <u>right now</u>.
            <br />
            Find the 🔥 that are you looking for and Click On it to get more
            detail about the event.
          </p>
        </Box>
      </Modal>
    </div>
  );
}
