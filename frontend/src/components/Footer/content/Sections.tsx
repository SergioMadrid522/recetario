/* components */
import MenuContent from "./MenuContent";

export default function Sections() {
  return (
    <div className="section-menu">
      <h3>Menú</h3>

      <ul className="section-menu__list">
        <MenuContent />
      </ul>
    </div>
  );
}
