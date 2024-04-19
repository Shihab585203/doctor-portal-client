import doctorSmall from "../assets/images/doctor-small.png";
import appointment from "../assets/images/appointment.png";
import PrimaryButton from "../Components/PrimaryButton";

const MakeAppointment = () => {
  return (
    <section
      className="my-64 py-10"
      style={{
        background: `url(${appointment})`,
      }}
    >
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={doctorSmall}
            className="max-w-sm lg:block md:block hidden rounded-lg -mt-36 shadow-2xl"
          />
          <div>
            <h3 className="text-xl font-semibold text-[#19D3AE]">
              Appointment
            </h3>
            <h1 className="text-5xl font-bold text-white">
              Make an appointment Today
            </h1>
            <p className="py-6 text-white">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem that it has a more-or-less normal
              distribution of letters,as opposed to using Content here, content
              here, making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <PrimaryButton>Appointment</PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointment;
