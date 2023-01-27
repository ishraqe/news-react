import { useEffect, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";

import NewsCard from "../NewsCard";
import Loader from "../Loader";
import { fetchNewsActions } from "../../actions/newsActions";
import TabPanel, { a11yProps } from "./TabPanel";

const TABS = ["General", "Business", "Sports", "Entertainment"];

const tabsStyles = {
  position: "fixed",
  top: 64,
  backgroundColor: "#fff",
  width: "100%"
};

export default function Newstabs({ onSelectArticle }) {
  const [tabValue, setTabValue] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const [articles, setArticles] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchNews();
  }, [currentPage, tabValue]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fetchNews = async () => {
    try {
      const selectedCategory = TABS[tabValue].toLowerCase();
      const newsData = await fetchNewsActions(selectedCategory, currentPage);
      setTotalPages(newsData.totalResults);
      if (currentPage > 1) {
        setArticles((prev) => [...prev, ...newsData.articles]);
      } else {
        setArticles(newsData.articles);
      }

      setIsLoading(false);
    } catch (err) {
      console.log("err", err);
      setIsLoading(false);
    }
  };

  const handleChange = (event, newValue) => {
    setIsLoading(true);
    setCurrentPage(0);
    setTabValue(newValue);
  };

  function handleScroll() {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      if (currentPage >= !totalPages) {
        setCurrentPage((prev) => prev + 1);
      }
    }
  }

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider"
        }}
      >
        <Tabs
          value={tabValue}
          onChange={handleChange}
          aria-label="basic tabs example"
          sx={tabsStyles}
        >
          {TABS.map((tab, index) => (
            <Tab
              sx={{
                fontSize: "2rem"
              }}
              key={tab}
              label={tab}
              {...a11yProps(index)}
            />
          ))}
        </Tabs>
      </Box>
      {TABS.map((tab, index) => (
        <TabPanel key={tab} value={tabValue} index={index}>
          {isLoading && <Loader />}
          {!isLoading && articles && articles.length > 0 && (
            <Grid container spacing={2}>
              {articles.map((article) => (
                <Grid xs={12} sm={6} md={4} key={article.id}>
                  <NewsCard
                    article={article}
                    onSelectArticle={onSelectArticle}
                  />
                </Grid>
              ))}
            </Grid>
          )}
        </TabPanel>
      ))}
    </Box>
  );
}
