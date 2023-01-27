import { useState } from "react";

import NewsDeatilsModal from "../components/Modal/NewsDetailsModal";
import Newstabs from "../components/NewsTabs";

export default function Home() {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [openNewsDetailsModal, setOpenNewsDetailsModal] = useState(false);

  const onSelectArticle = (article) => {
    setOpenNewsDetailsModal(true);
    setSelectedArticle(article);
  };

  const handleClose = () => {
    setOpenNewsDetailsModal(false);
    setSelectedArticle(null);
  };
  return (
    <>
      <Newstabs onSelectArticle={onSelectArticle} />

      {selectedArticle && (
        <NewsDeatilsModal
          article={selectedArticle}
          openNewsDetailsModal={openNewsDetailsModal}
          handleClose={handleClose}
        />
      )}
    </>
  );
}
