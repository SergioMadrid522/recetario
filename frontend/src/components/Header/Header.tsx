import { useLocation } from "react-router-dom";
import { categories } from "./data.ts";

import Content from "./Content";
import Category from "./Categories";


function Header() {
    const location = useLocation();
    const hideCategoryPaths = ["/admin/subir-platillo", "/admin/home"];
    const hideCategories = hideCategoryPaths.includes(location.pathname);

    return (
        <>
            <header>
                <nav className={hideCategories ? 'onlyLogo': ''}>
                    <Content/>
                </nav>
                {!hideCategories && (
                    <div className='categories-container'>
                        <Category category={categories}/>
                    </div>
                )}
            </header>
        </>
    );
}

export default Header;