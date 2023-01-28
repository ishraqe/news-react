import { useContext } from "react";
import { ReadLaterContext } from "../../Contexts/ReadLaterContext";
import { Typography } from "@mui/material";
import ArticleGrid from "../../components/ArticleGrid";

const ReadLater = () => {
  const { readLater } = useContext(ReadLaterContext);

  let content;

  if (readLater && readLater.length > 0) {
    content = <ArticleGrid articles={readLater} />;
  } else {
    content = (
      <div className="not-found-read-later">
        <Typography variant="span" color="CaptionText">
          No item added in read later
        </Typography>
      </div>
    );
  }

  return <div classNam="read-later-main-content">{content}</div>;
};

export default ReadLater;
