import { useLocation } from "react-router-dom";

import Content from "./Content";
import Category from "./Categories";
import { options } from "../../admin/components/data.ts";


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
                        <Category category={options}/>
                    </div>
                )}
            </header>
        </>
    );
}

export default Header;