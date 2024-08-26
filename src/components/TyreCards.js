import TyreCard from "./TyreCard";
const TyreCards = () => {
  return (
    <section className="py-4 px-4">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <p>
              <b>Tyres Sold by Dealer</b>
            </p>
          </div>
          <TyreCard />
          <button className="view-more">
            View More <i class="fa-solid fa-chevron-down"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TyreCards;
