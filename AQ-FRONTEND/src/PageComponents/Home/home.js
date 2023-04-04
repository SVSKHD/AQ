import AquaProductCard from "../../components/cards/productCard";
import AquaLayout from "../../Layout/Layout";
import AquaHomeCarousel from "./AquaHomePageCarousel";
const AquaHomeComponent = () => {
  return (
    <>
      <AquaLayout>
        <AquaHomeCarousel/>
        <div className="container">
          <AquaProductCard />
        </div>
      </AquaLayout>
    </>
  );
};
export default AquaHomeComponent;
