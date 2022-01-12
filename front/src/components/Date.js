import React from "react";
import { useParams } from 'react-router-dom'

const Date = () => {
  const { date } = useParams();
  const isCorrectDate = /^\d{4}([./-])\d{2}\1\d{2}$/.test(date);
  if (!isCorrectDate) return (
    <h2>Incorrect date format</h2>
  )

  const today = new Date();
  const enteredDate = new Date(date);

  if (enteredDate.getTime() < today.getTime()) return (
    <h2>You are Welcome</h2>
  )

  return (
    <h2>It is future Date</h2>
  );
};

export default Date;
