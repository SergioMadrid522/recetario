import { categories } from "./data.ts";
import type { category } from "./type.ts";

function Content() {
    return (
        <>
            <div className="search-wrap">
                <a className="show-search-link" href="#">
                    <span className="show-search-link__icon">
                        <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="16" 
                        height="16" 
                        fill="currentColor" 
                        className="bi bi-search"
                        viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                        </svg>
                    </span>
                    <span className="show-search-link__text">Buscar producto</span>
                </a>
                <SearchDish/>
            </div>
            <div className="logo-container">
                <Logo/>
            </div>
            <div className="categories">
                <Category category={categories}/>
            </div>
        </>
    );
}

function SearchDish() {
    return (
        <>
            <form action="">
                <input type="text" placeholder="Qué estás buscando? "/>
                <button>
                    <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="16" 
                    height="16" 
                    fill="currentColor" 
                    className="bi bi-search"
                    viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                    </svg>
                </button>
            </form>
            <button type="button" className="close-modal-button">
                <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="16" 
                height="16"
                fill="currentColor"
                className="bi bi-x-lg"
                viewBox="0 0 16 16">
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                </svg>
            </button>
        </> 
    );
}

function Logo() {
    return (
        <div className="logo">
            <a href="" className="logo-link">
                <span className="logo__brand">Glenda </span>
                <span className="logo__title">Recetario</span>
            </a>
        </div>
    );
}

function Category({ category } : category) {
    return (
        <ul>
            {category.map((item)=> (
                <a href={item.link} key={item.name}>
                    <li>{item.name}</li>
                </a>
            ))}
        </ul>        
    );
}
export default Content;