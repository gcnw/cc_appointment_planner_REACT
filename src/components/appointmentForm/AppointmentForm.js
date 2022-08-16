import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  return (
    <form onSubmit={ handleSubmit }>
      <label htmlFor="titleInput">Title:</label>
      <input type="text" name="titleInput"
        onChange={ (e) => setTitle(e.target.value) }></input>
      <label htmlFor="dateInput">Date:</label>
      <input type="date" name="dateInput" min={ getTodayString() }
        onChange={ (e) => setDate(e.target.value) }></input>
      <label htmlFor="timeInput">Time:</label>
      <input type="text" name="timeInput"
        onChange={ (e) => setTime(e.target.value) }></input>
      <ContactPicker contacts={ contacts }/>
      <input type="submit" value="Submit"></input>
    </form>
  );
};
