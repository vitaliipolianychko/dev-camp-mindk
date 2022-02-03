import React from "react";
import { useQuery } from "react-query";

// helpers
import { getArticles } from "./api/crud";

const ArticlesContainer = () => {
  const { isLoading, error, data = {} } = useQuery("articles", getArticles);

  const { data: articles = [] } = data;

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  return (
    <div>
      {articles.map((item, index) => (
        <p key={index}>{item.title}</p>
      ))}
    </div>
  );
};

ArticlesContainer.propTypes = {};

export default ArticlesContainer;
