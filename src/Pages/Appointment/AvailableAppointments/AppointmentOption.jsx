const AppointmentOption = ({ appointmentOption, setTreatment }) => {
  const { name, slots } = appointmentOption;

  return (
    <section>
      <div className="card w-96 bg-base-100 text-center shadow-xl">
        <div className="card-body">
          <h2 className="text-2xl font-bold">{name}</h2>
          <p className="font-semibold">
            {slots.length > 0 ? slots[0] : "Try Another Day"}
          </p>
          <p className="font-semibold">
            {slots.length} {slots.length > 1 ? "Spaces" : "Space"} Available
          </p>
          <div className="card-actions justify-center">
            <label
              disabled={slots.length === 0}
              htmlFor="booking-modal"
              className="btn btn-primary text-white"
              onClick={() => setTreatment(appointmentOption)}
            >
              Book Appointment
            </label>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentOption;
