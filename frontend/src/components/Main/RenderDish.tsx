import type { Dish } from "./type.ts";
import { useEffect, useState } from "react";
import { dishImages } from "./data.ts"; 

function RenderDish() {
    const [data, setData] = useState<Dish[] | null>(null);
    const apiUrl = 'http://localhost:3000/getDishes';

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch(apiUrl);
                const result = await res.json();
                setData(result.dishes);
            } catch (error) {
                console.log("Error: ", error);
            }
        }
        fetchData();
    }, []);

    if (!data) return <p>Cargando...</p>;
    if (data.length === 0) return <p>No tienes ningún platillo para mostrar :(</p>;

    return (
        <>
            {data.map((dish, idx) => {
                const image = dishImages[idx % dishImages.length]; 
                return (
                    <article className="dish-container" key={idx}>
                        <div className="dish-container__card">
                            <a href="#" rel="noopener noreferrer">
                                <div className="image-container">
                                    <img src={image.img} alt={dish.nombre} />
                                </div>
                                <h2>{dish.nombre}</h2>
                            </a>
                        </div>
                    </article>
                );
            })}
        </>
    );
}

export default RenderDish;
