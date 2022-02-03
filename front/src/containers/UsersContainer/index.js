import React from "react";
// import PropTypes from "prop-types"

import { useQuery } from "react-query";

// helpers
import { getUsers } from "../UsersContainer/api/crud";
import { Link } from "react-router-dom";

const UsersContainer = () => {
  const { isLoading, error, data = {} } = useQuery("users", getUsers);

  const { data: users = [] } = data;

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  return (
    <div>
      {users.map((item, index) => (
        <li key={index}>
          <Link to={`/users/${item.id}`}>{item.username}</Link>
        </li>
      ))}
    </div>
  );
};

UsersContainer.propTypes = {};

export default UsersContainer;
