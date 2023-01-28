import { useState, useEffect } from "react";
import { fetchNewsActions } from "../../helpers/newsActions";
import { TABS } from "../../utils/config";
import Newstabs from "../NewsTabs";
import Loader from "../../helpers/Loader";
import ArticleGrid from "../ArticleGrid";

const HomePage = () => {
  const [tabValue, setTabValue] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [articles, setArticles] = useState([]);
  const [tabReload, setTabReload] = useState(false);

  useEffect(() => {
    fetchNews();
  }, [currentPage, tabValue]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleScroll() {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setCurrentPage((prev) => prev + 1);
    }
  }

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
      setTabReload(false);
    } catch (err) {
      setTabReload(false);
    }
  };

  const handleChangeTabs = (event, newValue) => {
    setTabReload(true);
    setCurrentPage(1);
    setTabValue(newValue);
  };

  return (
    <>
      <Newstabs tabValue={tabValue} handleChangeTabs={handleChangeTabs}>
        {tabReload && <Loader />}
        {!tabReload && (
          <ArticleGrid
            articles={articles}
            currentPage={currentPage}
            totalPages={totalPages}
          />
        )}
      </Newstabs>
    </>
  );
};

export default HomePage;
