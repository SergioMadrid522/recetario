import type { Dish } from "./type.ts";
import { dishes } from "./data.ts";

function Content() {
    return (
        <>
            <h2 
            className="menu-title">
                Recetas del momento
            </h2>
            <div className="dish-wrap">
                <RenderDish/>
            </div>
        </>
    );
}

function RenderDish() {
    return (
        <>
            {dishes.map((dish: Dish) => (
                <article className="dish-container" key={dish.nombre}>
                    <div className="dish-container__image">
                        <a 
                        href={dish.link}
                        target="_blank" 
                        rel="noopener noreferrer"
                        >
                            <img src={dish.img} alt={dish.nombre} loading="lazy"/>
                        </a>
                    </div>
                    <div className="dish-container__title">
                        <a
                        href={dish.link}
                        target="_blank" 
                        rel="noopener noreferrer"
                        >
                            <h2 >{dish.nombre}</h2>
                        </a>
                    </div>
                    <div className="dish-container__description">
                        <p>{dish.description}</p>
                    </div>
                    </article>
            ))}
        </>
    );
}

export default Content;