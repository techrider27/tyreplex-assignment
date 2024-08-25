import TyreCard from "./TyreCard";
const TyreCards = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <p>
            <b>Tyres Sold by Dealer</b>
          </p>
        </div>
        <div className="row">
          <TyreCard />
          <button className="view-more">
            View More <i class="fa-solid fa-chevron-down"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TyreCards;
