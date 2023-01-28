import { useContext } from "react";
import { ReadLaterContext } from "../../Contexts/ReadLaterContext";
import { Grid } from "@mui/material";
import NewsCard from "../../components/NewsCard";

const ReadLater = () => {
  const { readLater } = useContext(ReadLaterContext);

  console.log("readLater", readLater);

  const onSelectArticle = () => {};

  if (readLater && readLater.length > 0) {
    return (
      <Grid sx={{ marginTop: "1rem", marginLeft: 0 }} container spacing={2}>
        {readLater &&
          readLater.length > 0 &&
          readLater.map((article) => (
            <Grid xs={12} sm={6} md={4} key={new Date().getMilliseconds()}>
              <NewsCard article={readLater} onSelectArticle={onSelectArticle} />
            </Grid>
          ))}
      </Grid>
    );
  }

  return <div>Nothing Found</div>;
};

export default ReadLater;
