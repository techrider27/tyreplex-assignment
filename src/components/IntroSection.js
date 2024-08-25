import ImageCarousel from "./ImageCarousel";
import MySwiper from "./MySwiper";
import { reviewNumber } from "../utils/constant";

const IntroSection = () => {
  return (
    <section className="py-4 px-4">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 box-shadow">
            <div className="row">
              <div className="col-lg-7 mb-3">
                <h4>
                  Shree Hemkunt Tyres & Services
                  <i className="fas fa-check-circle"></i>
                  <span className="badge">Verified</span>
                </h4>
                <div className="d-flex justify-content-start align-items-baseline">
                  <p className="green-rating">4.9</p>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <p className="px-2 text-decoration-underline">
                    {reviewNumber} Reviews
                  </p>
                  <button className="rate">Rate</button>
                </div>
                <p>
                  <i class="fa-solid fa-location-dot"></i> PLOT NUMBER-09 GROUND
                  FLOOR CISF CAMPUS ROAD, AHINSA <br />
                  KHAND-02 INDIRAPURAM, Ghaziabad, Uttar Pradesh, 201014
                </p>
                <p>
                  <i class="fa-solid fa-clock"></i> Open - Monday to Sunday -
                  10:00AM to 8:00PM
                </p>
                <button className="direction-btn">Get Directions</button>
              </div>
              <div className="col-lg-5">
                <ImageCarousel />
              </div>
              <p><b>{reviewNumber} Google Reviews</b></p>
              <MySwiper />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
