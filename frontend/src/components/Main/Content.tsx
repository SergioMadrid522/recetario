import RenderDish from "./RenderDish";

function Content() {
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

export default Content;
