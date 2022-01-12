import React from "react";
import PropTypes from "prop-types";

const Profile = ({ user }) => {
  const { firstName, lastName, bDay } = user
  return (
    <div>
      My name is {firstName} last name - {lastName}, i was born {bDay}
    </div>
  );
};

Profile.propTypes = {
  user: PropTypes.object.isRequired
};

export default Profile;
