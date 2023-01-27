import { memo } from "react";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import NewsCard from "../NewsCard";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4
};

function NewsDeatilsModal({ article, openNewsDetailsModal, handleClose }) {
  return (
    <div>
      <Modal
        open={openNewsDetailsModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <NewsCard article={article} isDetails />
        </Box>
      </Modal>
    </div>
  );
}

export default memo(NewsDeatilsModal);
