/* components */
import About from "./content/About";
import Rights from "./content/Rights";
import Sections from "./content/Sections";

export default function Content() {
  return (
    <div className="footer-content">
      <div className="first-section">
        <About />
        <Sections />
      </div>

      <Rights />
    </div>
  );
}
