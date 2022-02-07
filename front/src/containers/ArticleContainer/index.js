import React from "react";
import { useParams } from "react-router-dom";

// components
import ArticleForm from "../../Forms/ArticleForm";
import { useMutation, useQuery } from "react-query";
import { getCurrentArticle, updateArticle } from "../ArticlesContainer/api/crud";

const ArticleContainer = () => {
  const { id } = useParams();
  const { isLoading, error, data = {} } = useQuery("articles/:id", () => getCurrentArticle(id));
  const mutation = useMutation(article => updateArticle(id, article));

  const handleUpdateArticle = (values) => {
    mutation.mutate(values);
  }

  const { data: arrArticles = [] } = data;
  const [article] = arrArticles;


  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  const initialValues = {
    title: article.title,
    userid: article.userid
  }

  return (
    <ArticleForm
      initialValues={initialValues}
      handleClick={handleUpdateArticle}
      labelBtn="Update"
    />
  );
};

export default ArticleContainer;
