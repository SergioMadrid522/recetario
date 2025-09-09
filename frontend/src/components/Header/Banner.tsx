import banner from "../../assets/pictures/banner.webp"
function Banner() {
    return (
        <div className="banner">
            <img 
            src={banner} 
            alt="Vista superior de diferentes verduras con condimentos en fondo oscuro ensalada comida de verduras de salud" 
            loading="lazy"/>
            <div className="blog-title">
                <h1>Recetario de Glenda</h1>
            </div>
        </div>
    );
}

export default Banner;