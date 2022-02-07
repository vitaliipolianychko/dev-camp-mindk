import React from "react";

// material-ui
import Typography from "@mui/material/Typography";

import ArticleForm from "../Forms/ArticleForm";
import { useMutation } from "react-query";
import { createArticle } from "../containers/ArticlesContainer/api/crud";

const CreateArticle = () => {
  const { mutate } = useMutation(article => createArticle(article));

  const handleCreateArticle = (values) => {
    mutate(values);
  }

  return (
    <div style={{ margin: '20px' }}>
      <Typography variant="h4" style={{ marginBottom: '10px' }}>Add New Article</Typography>
      <ArticleForm
        handleClick={handleCreateArticle}
        labelBtn="Create"
      />
    </div>
  );
};

export default CreateArticle;
