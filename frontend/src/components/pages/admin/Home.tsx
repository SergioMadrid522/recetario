import { useLocation } from "react-router-dom";
import RenderDish from "../../Main/content/RenderDish";
import "./Home.css";

function Home() {
  const location = useLocation();
  const HIDDEN_PATHS = ["/admin/home"];
  const hideHome = HIDDEN_PATHS.includes(location.pathname);

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
