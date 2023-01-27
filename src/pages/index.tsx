import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import { useEffect, useState } from "react";
import NewsCard from "@/components/NewsCard";

import styles from "../styles/HomePage.module.scss";

export default function Home() {
  const [news, setNews] = useState(null);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    const res = await fetch("http://localhost:8080/get/news/bitcoin", {
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    });
    const data = await res.json();
    setNews(data);
  };

  return (
    <>
      <Container fixed className={styles["main-container"]}>
        <Box sx={{ height: "100vh" }}>
          <Grid container spacing={2}>
            {news &&
              news.articles.length > 0 &&
              news.articles.map((article) => (
                <Grid xs={12} sm={6} md={4} key={article.id}>
                  <NewsCard article={article} />
                </Grid>
              ))}
          </Grid>
        </Box>
      </Container>
    </>
  );
}
