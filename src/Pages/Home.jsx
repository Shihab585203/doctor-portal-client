import Banner from "./Banner/Banner";
import Landing from "./Landing";
import MakeAppointment from "./MakeAppointment";
import Services from "./Services";

const Home = () => {
  return (
    <div>
      <Banner />
      <Landing />
      <Services />
      <MakeAppointment />
    </div>
  );
};

export default Home;
