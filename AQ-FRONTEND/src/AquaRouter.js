import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Pages/AboutIndex";
import AquaHome from "./Pages/HomeIndex";
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
    }
  ];
  return (
    <>
      <Router>
        <Routes>
          {AquaRoutes.map((r, i) => (
            <Route key={r.name} path={r.path} element={r.component} />
          ))}
        </Routes>
      </Router>
    </>
  );
}

export default AquaRouter