import fluoride from "../assets/images/fluoride.png";
import cavity from "../assets/images/cavity.png";
import whitening from "../assets/images/whitening.png";
import treatment from "../assets/images/treatment.png";

const servicesCardsData = [
  {
    id: 1,
    img: fluoride,
    title: "Fluoride Treatment",
    desc: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
  },
  {
    id: 2,
    img: cavity,
    title: "Cavity Filling",
    desc: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
  },
  {
    id: 3,
    img: whitening,
    title: "Teeth Whitening",
    desc: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
  },
];

const Services = () => {
  return (
    <div className="w-11/12 mx-auto my-8">
      <div className="text-center font-semibold">
        <h4 className="text-lg text-[#44DBBD]">OUR SERVICES</h4>
        <h2 className="text-xl">Services We Provide</h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 p-8  ">
        {servicesCardsData.map((serviceCard) => (
          <div key={serviceCard.id}>
            <div className="flex flex-col items-center text-center shadow-xl rounded-md p-8">
              <img className="w-16 mb-6" src={serviceCard.img} alt="" />
              <h3 className="text-lg font-semibold">{serviceCard.title}</h3>
              <p>{serviceCard.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="my-12">
        <div className="hero">
          <div className="hero-content flex-col lg:flex-row">
            <img src={treatment} className="lg:ml-20 lg:w-4/12 sm:8/12" />
            <div className="lg:ml-8 font-semibold">
              <h1 className="text-5xl font-bold">
                Exceptional Dental Care, on Your Terms
              </h1>
              <p className="py-6">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsumis that it has a more-or-less
                normal distribution of letters,as opposed to using Content here,
                content here, making it look like readable English. Many desktop
                publishing packages and web page
              </p>
              <button className="btn bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC] font-semibold text-white uppercase">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
