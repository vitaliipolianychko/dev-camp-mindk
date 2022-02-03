import React from "react";
import PropTypes from "prop-types";

const Profile = ({ user }) => {

  const { username } = user
  return (
    <div>
      My name is {username}
    </div>
  );
};

Profile.propTypes = {
  user: PropTypes.object.isRequired
};

export default Profile;
