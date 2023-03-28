import AquaFooter from "./Footer";
import AquaHeader from "./Header";

const AquaLayout = (porps) => {
  return (
    <>
      <AquaHeader />
      {porps.children}
      <AquaFooter />
    </>
  );
};
export default AquaLayout;
