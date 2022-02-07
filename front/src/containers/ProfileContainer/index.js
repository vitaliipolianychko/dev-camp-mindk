import React from "react";
import { useParams } from "react-router-dom";

// components
import ProfileForm from "../../Forms/ProfileForm";
import { useQuery } from "react-query";
import { getCurrentUser } from "../UsersContainer/api/crud";

const ProfileContainer = () => {
  const { id } = useParams();
  const { isLoading, error, data = {} } = useQuery("users/:id", () => getCurrentUser(id));

  const { data: arrUser = [] } = data;
  const [user] = arrUser;

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  const initialValues = {
    nickname: user.nickname,
    username: user.username,
    email: user.email
  };

  return (
    <div>
      <ProfileForm
        userId={id}
        initialValues={initialValues}
      />
      <form
        action={`http://localhost:4000/users/${id}/avatar`}
        method='POST'
        encType='multipart/form-data'
      >
        <input type='file' name='avatar'/>
        <button type='submit'>SEND</button>
      </form>
      {user.avatar && (
        <img src={`http://localhost:4000/${user.avatar}`}/>
      )}
    </div>
  );
};

export default ProfileContainer;
