import React, { useState, useEffect } from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from '../../components/tileList/TileList';

export const ContactsPage = (props) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [isDuplicate, setIsDuplicate] = useState(false);

  const contacts = props.contacts;

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!isDuplicate){
      props.addContact(name, phone, email);
    }
    else console.log('Duplicate!');

    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
  };

  useEffect(() => {
    if(contacts && contacts.find((contact) => contact.name === name)){
      setIsDuplicate(true);
    }
    else {
      setIsDuplicate(false);
    }
  },[name, contacts])

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm 
            userName={ name }
            setName={ setName }
            phone={ phone }
            setPhone={ setPhone }
            email={ email }
            setEmail={ setEmail }
            handleSubmit={ handleSubmit }
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList contacts={ props.contacts }/>
      </section>
    </div>
  );
};
