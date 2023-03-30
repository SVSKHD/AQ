import {useState} from "react"
import AquaSideBar from "../components/SideBar";
import AquaFooter from "./Footer";
import AquaHeader from "./Header";
import { useDrawerStore } from "../Store/drawerStore";


const AquaLayout = (porps) => {
  const Drawer = useDrawerStore(state=>state.show)
  const closeDrawer=useDrawerStore(state=>state.closeDrawer)
  const [AuthName , setAuthName] = useState("Login")
  return (
    <>
      <AquaHeader />
      <AquaSideBar show={Drawer} handleClose={closeDrawer}>
      <h2 className="text-center">{AuthName}</h2>
      <hr/>
      </AquaSideBar>
      {porps.children}
      <AquaFooter />
    </>
  );
};
export default AquaLayout;
