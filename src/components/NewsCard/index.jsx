import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const cardActionStyles = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
};

export default function NewsCard({ article, onSelectArticle, isDetails }) {
  console.log(article);
  return (
    <Card onClick={() => (isDetails ? undefined : onSelectArticle(article))}>
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
    </Card>
  );
}
