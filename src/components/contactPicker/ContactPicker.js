import React from "react";

export const ContactPicker = ({ contacts, handleSelection }) => {
  return (
    <div>
      <label for="contactInput">Choose Contact:</label>
      <select name="contactInput" id="contactInput">
      <option selected="selected">no contact selected</option>
        {
        contacts.map((contact) => {
          return (
            <option value={ contact }>{ contact }</option>
          )
        })}
      </select>
    </div>
  );
};
