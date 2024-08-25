import IntroSection from "./IntroSection";
import ClientSection from "./ClientSection";
import ServicesSection from "./ServicesSection";
import TyreCards from "./TyreCards";
import PaymentMode from "./PaymentMode";
import Footer from "./Footer";
const Body = () => {
  return (
    <>
      <IntroSection />
      <ClientSection />
      <ServicesSection />
      <TyreCards />
      <PaymentMode />
      <Footer />
    </>
  );
};

export default Body;
