import RenderDish from "./content/RenderDish";

export default function Content() {
  return (
    <>
      <h2 className="menu-title" id="inicio">
        Los platillos más preparados
      </h2>

      <div className="dish-wrap">
        <RenderDish />
      </div>
    </>
  );
}
