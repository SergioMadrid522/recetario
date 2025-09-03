import type { category } from "./type.ts";

function Category({ category } : category) {
    return (
        <ul className="category-list">
            {category.map((item)=> (
                <a href={item.link} className="category-list__item" key={item.name}>
                    <li>{item.name}</li>
                </a>
            ))}
        </ul>        
    );
}

export default Category;