import AquaSideBar from "../components/SideBar";
import AquaFooter from "./Footer";
import AquaHeader from "./Header";
import { useDrawerStore } from "../Store/drawerStore";

const AquaLayout = (porps) => {
  const Drawer = useDrawerStore(state=>state.show)
  const closeDrawer=useDrawerStore(state=>state.closeDrawer)
  return (
    <>
      <AquaHeader />
      <AquaSideBar show={Drawer} handleClose={closeDrawer}/>
      {porps.children}
      <AquaFooter />
    </>
  );
};
export default AquaLayout;
