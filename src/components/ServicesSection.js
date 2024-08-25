import serviceImage from "../images/wheel.webp";
import serviceImage2 from "../images/wheel-2.webp";
import BookNowBtn from "./BookNowBtn";
const ServicesSection = () => {
  return (
    <section className="py-4 px-4">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 box-shadow">
            <p className="px-2">
              <b>Services Offered by this dealer</b>
            </p>
            <div className="row">
              <div className="col-lg-3 text-center mb-3">
                <div className="service-div">
                  <img src={serviceImage} />
                  <h6 className="fw-bold my-3">Wheel Balancing</h6>
                  <BookNowBtn />
                </div>
              </div>
              <div className="col-lg-3 text-center mb-3">
                <div className="service-div">
                  <img src={serviceImage2} />
                  <h6 className="fw-bold my-3">Wheel Balancing</h6>
                  <BookNowBtn />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
