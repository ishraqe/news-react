import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

type articleType = {
  urlToImage: string;
  author?: string;
  title: string;
  source: {
    name: string;
  };
};

type NewsCardProps = {
  article: articleType;
};

export default function NewsCard({ article }: NewsCardProps) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={article.urlToImage}
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          {article?.source?.name}
        </Typography>
        <Typography variant="h5" color="text.secondary">
          {article.title}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
