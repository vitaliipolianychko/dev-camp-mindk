import React from "react";
import { useQuery } from "react-query";

// helpers
import { getArticles } from "./api/crud";
import { Link } from "react-router-dom";

const ArticlesContainer = () => {
  const { isLoading, error, data = {} } = useQuery("articles", getArticles);

  const { data: articles = [] } = data;

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  return (
    <div>
      {articles.map((item, index) => (
        <li key={index}>
          <Link to={`/posts/${item.id}`}>{item.title}</Link>
        </li>
      ))}
    </div>
  );
};

ArticlesContainer.propTypes = {};

export default ArticlesContainer;
