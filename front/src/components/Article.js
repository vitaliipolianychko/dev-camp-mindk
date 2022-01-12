import React from "react";

import { useParams } from 'react-router-dom'

const Article = () => {
  const { id } = useParams()

  const checkCorrectId = () => {
    const isNumberId = /^\d+$/.test(id);
    const isUpperCase = /^[A-Z]+$/.test(id)
    const isFile = /([\w\d]+\.(doc|pdf|jpeg)$)/.test(id)

    return isNumberId || isUpperCase || isFile
  }

  const routeIsValid = checkCorrectId()

  if (routeIsValid) {
    return (
      <div>
        Article By {id}
      </div>
    );
  }
  return (
    <h2>Invalid Route</h2>
  )
};

export default Article;
