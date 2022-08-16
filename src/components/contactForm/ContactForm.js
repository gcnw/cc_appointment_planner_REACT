import React from "react";

export const ContactForm = (props) => {
  return (
    <form onSubmit={ props.handleSubmit }>
      <label htmlFor="userName">Name:</label>
      <input type="text" name="userName" 
        onChange={ (e) => props.setName(e.target.value)}></input>
      <label htmlFor="phoneNumber">Phone Number:</label>
      <input type="text" name="phoneNumber" pattern="^[2-9]\d{2}-\d{3}-\d{4}$"
        onChange={ (e) => props.setPhone(e.target.value)}></input>
      <label htmlFor="email">Email:</label>
      <input type="text" name="email"
        onChange={ (e) => props.setEmail(e.target.value)}></input>
      <input type="submit" value="Submit"></input>
    </form>
  );
};
