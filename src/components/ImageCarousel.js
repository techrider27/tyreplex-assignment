import img1 from "../images/img-1.jpg";
import img2 from "../images/img-2.jpg";
import Carousel from "react-bootstrap/Carousel";

const ImageCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100 img-border" src={img1} alt="TyrePlex" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 img-border" src={img2} alt="TyrePlex" />
      </Carousel.Item>
    </Carousel>
  );
};
export default ImageCarousel;
