import type { Dish } from "./type.ts";
import { dishes } from "./data.ts";

function Content() {
    return (
        <div className="dish-wrap">
            <div className="dish-container">
                <RenderDish/>
            </div>
        </div>
    );
}

function RenderDish() {
    return (
        <>
            <div className="dish-container__imagen">
                {dishes.map((dish: Dish) => (
                    <>
                        <a href={dish.link} key={dish.nombre}>
                            <img src={dish.img} alt={dish.nombre} loading="lazy"/>
                        </a>
                        <div className="dish-container__title">
                            <a href={dish.link}>
                                <h2 key={dish.nombre}>{dish.nombre}</h2>
                            </a>
                        </div>
                        <div className="dish-container__description">
                            <p key={dish.nombre}>{dish.description}</p>
                        </div>
                    </>
                ))}
            </div>
        </>
    );
}

export default Content;