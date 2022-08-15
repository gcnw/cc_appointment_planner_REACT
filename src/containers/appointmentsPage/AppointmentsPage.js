import React, { useState } from "react";
import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = ({appointments, contacts, addAppointment}) => {
  const [appointmentTitle, setAppointmentTitle] = useState('');
  const [appointmentContact, setAppointmentContact] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');
  const [appointmentTime, setAppointmentTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addAppointment(
      appointmentTitle,
      appointmentContact,
      appointmentDate,
      appointmentTime); 
      console.log('submit handled')  
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm 
          contacts={ contacts }
          title={ appointmentTitle }
          setTitle={ setAppointmentTitle }
          contact={ appointmentContact }
          setContact={ setAppointmentContact }
          date={ appointmentDate }
          setDate={ setAppointmentDate }
          time={ appointmentTime }
          setTime={ setAppointmentTime }
          onSubmit={ handleSubmit }
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList displayItems={ appointments } />
      </section>
    </div>
  );
};
