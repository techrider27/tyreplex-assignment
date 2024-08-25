import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image from "../images/nasir.png";
import image2 from "../images/rohit.png";
import image3 from "../images/pradeep.png";
import image4 from "../images/surjit.png";

const MySwiper = () => {
  var settings = {
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
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
            <div className="testimonial-div">
              <div className="d-flex justify-content-start flex-column">
                <div className="d-flex justify-content-start align-items-center">
                  <img className="testimonial-img" src={image} />
                  <h6 className="mx-2 fw-bold">Md Nasir</h6>
                </div>
                <p>
                  Excellent service from start to finish. 100% satisfaction with
                  the job, professionalism and overall service.We were delighted
                  with your courteous , prompt and professional service. We
                  would plan to reuse your services and recommend these to
                  friends and family. You came to us as a recommendation and
                  this proved accurate.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 px-2">
            <div className="testimonial-div">
              <div className="d-flex justify-content-start flex-column">
                <div className="d-flex justify-content-start align-items-center">
                  <img className="testimonial-img" src={image2} />
                  <h6 className="mx-2 fw-bold">Rohit Bhati</h6>
                </div>
                <p>
                  Went for Tyre change . Ultimate service by shoppe boys. Owner
                  behavior very cool. Guide as per ur budget. Highly recommend
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 px-2">
            <div className="testimonial-div">
              <div className="d-flex justify-content-start flex-column">
                <div className="d-flex justify-content-start align-items-center">
                  <img className="testimonial-img" src={image3} />
                  <h6 className="mx-2 fw-bold">Pradeep Kumar</h6>
                </div>
                <p>
                  Best tyre shop in Indirapuram. Good dealing with customer. All
                  types tyre available here. Price also responsible. Overall
                  good experience
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 px-2">
            <div className="testimonial-div">
              <div className="d-flex justify-content-start flex-column">
                <div className="d-flex justify-content-start align-items-center">
                  <img className="testimonial-img" src={image3} />
                  <h6 className="mx-2 fw-bold">Pardeep Kumar</h6>
                </div>
                <p>
                  Best shoppe in Indirapuram. Good customer service. After sale
                  service amazing. Overall nice experience
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 px-2">
            <div className="testimonial-div">
              <div className="d-flex justify-content-start flex-column">
                <div className="d-flex justify-content-start align-items-center">
                  <img className="testimonial-img" src={image4} />
                  <h6 className="mx-2 fw-bold">Surjit Kumar</h6>
                </div>
                <p>
                  Genuine and Authorized Tyre shop in indirapuram having latest
                  manufactured stock. Well equipped workshop with professional
                  staff. I change my care Tyre there, highly satisfied with
                  service and lasted available stock.. Keep it up !!!
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 px-2">
            <div className="testimonial-div">
              <div className="d-flex justify-content-start flex-column">
                <div className="d-flex justify-content-start align-items-center">
                  <img className="testimonial-img" src={image2} />
                  <h6 className="mx-2 fw-bold">Rohit Bhati</h6>
                </div>
                <p>
                  Went for Tyre change . Ultimate service by shoppe boys. Owner
                  behavior very cool. Guide as per ur budget. Highly recommend
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 px-2">
            <div className="testimonial-div">
              <div className="d-flex justify-content-start flex-column">
                <div className="d-flex justify-content-start align-items-center">
                  <img className="testimonial-img" src={image4} />
                  <h6 className="mx-2 fw-bold">Surjit Kumar</h6>
                </div>
                <p>
                  Genuine and Authorized Tyre shop in indirapuram having latest
                  manufactured stock. Well equipped workshop with professional
                  staff. I change my care Tyre there, highly satisfied with
                  service and lasted available stock.. Keep it up !!!
                </p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default MySwiper;
