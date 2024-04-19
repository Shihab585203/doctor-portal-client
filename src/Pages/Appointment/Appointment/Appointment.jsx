import { useState } from "react";
import AppointmentBanner from "../AppointmentBanner.jsx/AppointmentBanner";
import AvailableAppointments from "../AvailableAppointments/AvailableAppointments";

const Appointment = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  return (
    <section className="w-11/12 mx-auto">
      <AppointmentBanner 
      selectedDate={selectedDate}
      setSelectedDate={setSelectedDate}
      />
      <AvailableAppointments
      selectedDate={selectedDate}
      />
    </section>
  );
};

export default Appointment;
