import React from "react";

export const ContactPicker = ({ contacts, handleSelection }) => {
  return (
    <div>
      <label htmlFor="contactInput">Choose Contact:</label>
      <select 
        name="contactInput" 
        id="contactInput"
        defaultValue="no contact selected">
        {
        contacts.map((contact) => {
          return (
            <option key={contact.name} value={ contact.name }>{ contact.name }</option>
          )
        })}
      </select>
    </div>
  );
};
