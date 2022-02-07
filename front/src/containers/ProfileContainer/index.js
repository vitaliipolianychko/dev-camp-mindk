import React from 'react'
import { useParams } from "react-router-dom";

// components
import ProfileForm from '../../Forms/ProfileForm'
import { useQuery } from "react-query";
import { getCurrentUser } from "../UsersContainer/api/crud";

const ProfileContainer = () => {
  const { id } = useParams()
  const { isLoading, error, data = {} } = useQuery("users/:id", () => getCurrentUser(id));

  const { data: arrUser = [] } = data;
  const [user] = arrUser

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  const initialValues = {
    nickname: user.nickname,
    username: user.username,
    email: user.email
  }

  return (
    <ProfileForm
      userId={id}
      initialValues={initialValues}
    />
  )
}

export default ProfileContainer
