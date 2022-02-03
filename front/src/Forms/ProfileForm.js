import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import PropTypes from "prop-types";
import { useMutation } from "react-query";

// material-ui
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import { updateUser } from "../containers/UsersContainer/api/crud";

const validationSchema = Yup.object({
  nickname: Yup.string()
    .min(8, "Must be 8 characters or more")
    .required("Required"),
  username: Yup.string()
    .max(30, "Must be 30 characters or less")
    .required("Required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Required")
});

const ProfileForm = ({ userId, initialValues }) => {
  const mutation = useMutation(user => updateUser(userId, user));

  const handleSubmit = (values, { setSubmitting }) => {
    mutation.mutate(values);
    setSubmitting(false);
  };

  const fields = [
    { name: "nickname", label: "Nickname" },
    { name: "username", label: "Username" },
    { name: "email", label: "Email" }
  ];

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {formik => (
        <form onSubmit={formik.handleSubmit}>
          {fields.map((field, index) => (
            <TextField
              id={field.name}
              type="text"
              name={field.name}
              label={field.label}
              {...formik.getFieldProps(field.name)}
              error={formik.touched[field.name] && Boolean(formik.errors[field.name])}
              helperText={formik.touched[field.name] && formik.errors[field.name]}
            />
          ))}
          <Button color="primary" variant="contained" type="submit">Submit</Button>
        </form>
      )}
    </Formik>
  );
};

ProfileForm.propTypes = {
  initialValues: PropTypes.object,
  userId: PropTypes.number
};

export default ProfileForm;
