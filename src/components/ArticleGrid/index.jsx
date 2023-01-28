import { Grid } from "@mui/material";
import NewsCard from "../NewsCard";
import NewsDetailsModal from "../Modal/NewsDetailsModal";
import { useState } from "react";

const ArticleGrid = ({ articles }) => {
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
      <Grid sx={{ marginTop: "1rem", marginLeft: 0 }} container spacing={2}>
        {articles &&
          articles.length > 0 &&
          articles.map((article) => (
            <Grid xs={12} sm={6} md={4} key={new Date().getMilliseconds()}>
              <NewsCard article={article} onSelectArticle={onSelectArticle} />
            </Grid>
          ))}
      </Grid>

      {selectedArticle && (
        <NewsDetailsModal
          article={selectedArticle}
          openNewsDetailsModal={openNewsDetailsModal}
          handleClose={handleClose}
        />
      )}
    </>
  );
};

export default ArticleGrid;
