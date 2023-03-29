import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AquaHome from "./Pages/HomeIndex";

function AquaRouter() {
  let AquaRoutes = [
    {
      name: "Home",
      path: "/",
      component: <AquaHome />,
    },
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