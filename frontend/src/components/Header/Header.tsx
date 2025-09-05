import { useLocation } from "react-router-dom";
import { categories } from "./data.ts";
//import banner from "../../assets/pictures/banner.webp";

import Content from "./Content.tsx";
import Category from "./Categories.tsx";
function Header() {
    const location = useLocation();
    const onlyLogo = location.pathname === "/subir-platillo";
    return (
        <>
            <header>
                <nav className={onlyLogo ? 'onlyLogo': ''}>
                    <Content/>
                </nav>
                {!onlyLogo && (
                <div className='categories-container'>
                    <Category category={categories}/>
                </div>
                )}
            </header>
            {/* <div className="banner">
                <img 
                src={banner} 
                alt="Vista superior de diferentes verduras con condimentos en fondo oscuro ensalada comida de verduras de salud" 
                loading="lazy"/>
                <div className="blog-title">
                    <h1>Recetario de Glenda</h1>
                </div>
            </div> */}
        </>
    );
}

export default Header;