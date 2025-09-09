import { useLocation } from "react-router-dom";
import { dishes } from "../../../components/Main/data";

import "./Home.css";

function Home() {
    const location = useLocation();
    const hideHome = location.pathname === "/admin/home";
    return(
        <>
            {hideHome && (
                <div className="home-wrap"> 
                    <h2 className="main-titles">Platillos en el recetario</h2>
                    <div className="item-container">
                        {dishes.map((dish, idx) => (
                            <div className="item" key={idx}>
                                <div className="item__img">
                                    <img src={dish.img} alt={dish.description} />
                                </div>
                                <div className="item__title">{dish.nombre}</div>
                                <div className="item__category">
                                    <div className="title">Categoria</div>
                                    <p className="name">{dish.category}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
}
export default Home;