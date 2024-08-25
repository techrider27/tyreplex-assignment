import ClientsCarousel from "./ClientsCarousel";
const ClientSection = () => {
  return (
    <section className="py-4 px-4">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 box-shadow">
            <p className="px-2"><b>Deals in</b></p>
            <ClientsCarousel />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientSection;
