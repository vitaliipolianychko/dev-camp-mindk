import React from 'react'
import { Link, useParams } from "react-router-dom";

// components
import Profile from '../../components/Profile'
import { useQuery } from "react-query";
import { getCurrentUser } from "../UsersContainer/api/crud";

const ProfileContainer = () => {
  const { id } = useParams()
  const { isLoading, error, data = {} } = useQuery("users/id", () => getCurrentUser(id));

  const { data: arrUser = [] } = data;
  const [user] = arrUser

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <Profile user={user}/>
  )
}

export default ProfileContainer
