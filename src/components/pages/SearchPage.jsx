import { useState, useEffect } from "react";
import { fetchNewsActions } from "../../helpers/newsActions";
import Loader from "../Loader";
import ArticleGrid from "../ArticleGrid";
import { useRouter } from "next/router";

const SearchPage = () => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchKeyword, setSearchKeyWord] = useState("");

  useEffect(() => {
    if (router?.query?.keyword) {
      console.log("here i am");
      setIsLoading(true);
      setCurrentPage(1);
      setTotalPages(0);
      setSearchKeyWord(router?.query?.keyword);
    } else {
      fetchNews();
    }
  }, [router]);

  useEffect(() => {
    fetchNews(searchKeyword);
  }, [searchKeyword, currentPage]);

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

  const fetchNews = async (selectedCategory = "general") => {
    try {
      const newsData = await fetchNewsActions(selectedCategory, currentPage);
      setTotalPages(newsData.totalResults);
      console.log(newsData);
      if (newsData && newsData.status === "ok") {
        if (currentPage > 1) {
          setArticles((prev) => [...prev, ...newsData.articles]);
        } else {
          setArticles(newsData.articles);
        }
      }

      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
    }
  };

  const onChangeCurrentPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && (
        <ArticleGrid
          totalPages={totalPages}
          articles={articles}
          currentPage={currentPage}
          onChangeCurrentPage={onChangeCurrentPage}
        />
      )}
    </>
  );
};

export default SearchPage;
