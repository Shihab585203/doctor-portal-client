import clock from "../assets/icons/clock.svg";
import phone from "../assets/icons/phone.svg";
import marker from "../assets/icons/marker.svg";

const Landing = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 w-11/12 mx-auto gap-3 my-10 justify-center items-center">
        <div className="flex px-4 py-8 bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC] rounded-md">
          <div className="icon pr-3">
            <img src={clock} alt="" />
          </div>
          <div className="text ">
            <h2 className="text-lg font-semibold">Opening Hours</h2>
            <p>Lorem Ipsum is simply dummy text of the pri</p>
          </div>
        </div>
        <div className="flex px-4 py-8 bg-[#3A4256] text-white rounded-md">
          <div className="icon pr-3">
            <img src={marker} alt="" />
          </div>
          <div className="text ">
            <h2 className="text-lg font-semibold">Visit our location</h2>
            <p>Brooklyn, NY 10036, United States</p>
          </div>
        </div>
        <div className="flex px-4 py-8 bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC] rounded-md">
          <div className="icon pr-3">
            <img src={phone} alt="" />
          </div>
          <div className="text ">
            <h2 className="text-lg font-semibold">Contact us now</h2>
            <p>+000 123 456789</p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Landing;
