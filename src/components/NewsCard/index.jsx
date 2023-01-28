import { IconButton } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import MoreIcon from "@mui/icons-material/MoreVert";
import Popover from "@mui/material/Popover";
import { useState, useContext } from "react";
import { ReadLaterContext } from "../../Contexts/ReadLaterContext";

const cardActionStyles = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
};

const cardContainerStyles = {
  width: "96%",
  marginBottom: "2rem",
  marginLeft: 0,
  position: "relative"
};
const iconBtnStyle = {
  position: "absolute",
  top: ".5rem",
  right: "1.5rem",
  height: "2rem",
  width: "2rem",
  backgroundColor: "#fff"
};

export default function NewsCard({ article, onSelectArticle, isDetails }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const { readLater, setReadLater } = useContext(ReadLaterContext);

  const handleClick = (event) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleReadLaterClick = () => {
    setReadLater((prev) => [...prev, article]);
    alert("Item added to read later");
    handleClose();
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <Card
      sx={cardContainerStyles}
      onClick={() => (isDetails ? undefined : onSelectArticle(article))}
    >
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={article.urlToImage}
      />
      <CardContent>
        <Typography variant="h5" color="text.primary" gutterBottom>
          {`${article.title.substring(0, 75)}`}
          {article.title.length > 70 && (
            <span className="see-more">....See more</span>
          )}
        </Typography>

        {isDetails && (
          <>
            <br />
            <Typography variant="p" color="text.secondary">
              {article.description}
            </Typography>
          </>
        )}
      </CardContent>
      <CardActions sx={cardActionStyles}>
        <Typography variant="span" color="text.secondary">
          {new Date(article.publishedAt).toLocaleDateString()}
        </Typography>
        <Typography variant="span" color="text.secondary">
          {article?.source?.name}
        </Typography>
      </CardActions>
      {isDetails && (
        <>
          <IconButton
            aria-describedby={id}
            size="large"
            aria-label="display more actions"
            edge="end"
            color="inherit"
            sx={iconBtnStyle}
            onClick={handleClick}
          >
            <MoreIcon />
          </IconButton>
          <Popover
            sx={{ cursour: "pointer" }}
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            onClick={handleReadLaterClick}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left"
            }}
          >
            <Typography sx={{ p: 2 }}>Add to read later</Typography>
          </Popover>
        </>
      )}
    </Card>
  );
}
