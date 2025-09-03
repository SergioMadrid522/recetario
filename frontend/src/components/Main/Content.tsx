import type { Dish } from "./type.ts";
import { dishes } from "./data.ts";

function Content() {
    return (
        <div className="dish-wrap">
            <RenderDish/>
        </div>
    );
}

function RenderDish() {
    return (
        <>
        {dishes.map((dish: Dish) => (
                <article className="dish-container">
                    <div className="dish-container__image">
                        <a href={dish.link} key={dish.nombre}>
                            <img src={dish.img} alt={dish.nombre} loading="lazy"/>
                        </a>
                    </div>
                    <div className="dish-container__title">
                        <a href={dish.link} key={dish.nombre}>
                            <h2 >{dish.nombre}</h2>
                        </a>
                    </div>
                    <div className="dish-container__description">
                        <p key={dish.nombre}>{dish.description}</p>
                    </div>
                    </article>
            ))}
            </>
    );
}

export default Content;