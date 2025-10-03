import { useLocation } from "react-router-dom";
//import { dishes } from "../../../components/Main/data";

import "./Home.css";
import RenderDish from "../../../components/Main/RenderDish";

function Home() {
  const location = useLocation();
  const hideHome = location.pathname === "/admin/home";
  return (
    <>
      {hideHome && (
        <div className="home-wrap">
          <h2 className="main-titles">Platillos en el recetario</h2>
          <div className="item-container">
            <RenderDish />
          </div>
        </div>
      )}
    </>
  );
}
export default Home;
