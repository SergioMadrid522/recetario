import { NavLink } from 'react-router-dom';

function Content() {
    return (
        <div className="footer-content">
            <div className="first-section">
                <About/>
                <Sections/>
            </div>
            <Rights/>
        </div>
    );
}

function About() {
    return (
        <div className="section_about">
            <h3 className="section_about__title">Sobre este recetario</h3>
            <p className="section_about__quote">Recopilamos todas las recetas de mamá para que puedas disfrutarlas en casa, con cariño y facilidad.</p>
        </div>

    );
}

function Sections() {
    return (
        <div className="section-menu">
            <h3>Menú</h3>
            <ul className="section-menu__list">
                <li><a href="#inicio">Inicio</a></li>
                <li><NavLink 
                    to="/subir-platillo"
                    className={({ isActive }) => isActive ? "uploadDish" : ""}
                    >
                    Subir platillo
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to="/recetario">
                        Recetario
                    </NavLink>
                </li>
            </ul>
        </div>
        
    );
}

function Rights() {
    return (
        <div className="section-rights">
        <h3 className="section-rights__title">Créditos</h3>
            <p className="section-rights__text">© 2025 Recetario de Mamá. Creado con cariño. ❤️</p>
        </div>
    );
}
export default Content;