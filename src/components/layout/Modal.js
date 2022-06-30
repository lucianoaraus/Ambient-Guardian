import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import SearchIcon from "@mui/icons-material/Search";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <div className="info-buton">
        <SearchIcon onClick={handleOpen} />
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            WORLD WILD FIRES IN REAL TIME
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Discover what are some of the forestry events that are happening
            anywhere in the world right now. Find the 🔥 that are you looking
            for and Click On it to get more detail about the event.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
