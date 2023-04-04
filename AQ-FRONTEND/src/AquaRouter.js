import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AquaHome from "./Pages/HomeIndex";
import About from "./Pages/AboutIndex";
import AquaShop from "./Pages/ShopIndex"
import AquaCompare from "./Pages/CompareIndex"
//not found
import NotFound from "./Pages/NotFound";


function AquaRouter() {
  let AquaRoutes = [
    {
      name: "Home",
      path: "/",
      component: <AquaHome />,
    },
    {
      name:"Not-Found",
      path:"*",
      component:<NotFound/>
    },
    {
      name:"About",
      path:"/about",
      component:<About/>
    },
    {
      name:"Shop",
      path:"/shop",
      component:<AquaShop/>
    },
    {
      name:"Compare",
      path:"/compare",
      component:<AquaCompare/>
    }
  ];
  return (
    <>
      <Router>
        <Routes>
          {AquaRoutes.map((r) => (
            <Route key={r.name} path={r.path} element={r.component} />
          ))}
        </Routes>
      </Router>
    </>
  );
}

export default AquaRouter