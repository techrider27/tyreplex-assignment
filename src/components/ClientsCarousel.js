import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import apollo from "../images/apollo-tyres-brand-logo.png";
import mrf from "../images/mrf-logo.png";
import ceat from "../images/ceat.jpg";
import jk from "../images/jk.jpg";
import goodyear from "../images/goodyear.png";
import euro from "../images/eurogrip.webp";
import bridge from "../images/bridgestone.jpg";

const ClientsCarousel = () => {
  var settings = {
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    slidesToShow: 5,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="container mb-4">
      <div className="row">
        <Slider {...settings}>
          <div className="col-lg-3 px-2">
            <div className="client-div">
              <img src={mrf} />
              <p>MRF</p>
            </div>
          </div>
          <div className="col-lg-3 px-2">
            <div className="client-div">
              <img src={ceat} />
              <p>CEAT</p>
            </div>
          </div>
          <div className="col-lg-3 px-2">
            <div className="client-div">
              <img src={goodyear} />
              <p>Goodyear</p>
            </div>
          </div>
          <div className="col-lg-3 px-2">
            <div className="client-div">
              <img src={apollo} />
              <p>Apollo</p>
            </div>
          </div>
          <div className="col-lg-3 px-2">
            <div className="client-div">
              <img src={jk} />
              <p>JK Tyre</p>
            </div>
          </div>
          <div className="col-lg-3 px-2">
            <div className="client-div">
              <img src={euro} />
              <p>TVS Eurogrip</p>
            </div>
          </div>
          <div className="col-lg-3 px-2">
            <div className="client-div">
              <img src={bridge} />
              <p>Bridgestone</p>
            </div>
          </div>
          <div className="col-lg-3 px-2">
            <div className="client-div">
              <img src={euro} />
              <p>TVS Eurogrip</p>
            </div>
          </div>
          <div className="col-lg-3 px-2">
            <div className="client-div">
              <img src={bridge} />
              <p>Bridgestone</p>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default ClientsCarousel;
