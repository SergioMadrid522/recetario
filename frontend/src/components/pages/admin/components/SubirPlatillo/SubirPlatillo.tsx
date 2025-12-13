import { useLocation } from "react-router-dom";
import { useMenu } from "../../../../utils/MenuProvider";
import { useEditModal } from "../../../../utils/ModalProvider";
import SideMenu from "./SideMenu";
import Home from "../../Home";
import UploadDish from "../../../../Main/content/UploadDish";
import "./styles/SubirPlatillo.css";

function SubirPlatillo() {
  const location = useLocation();
  const HIDDEN_PATHS = ["/admin/subir-platillo"];
  const uploadDishPaths = HIDDEN_PATHS.includes(location.pathname);

  const { open, setOpen } = useMenu();
  const { openModal } = useEditModal();

  const handleClick = () => setOpen((prev) => !prev);
  return (
    <div className={`upload-dish-menu ${openModal ? "modal-active" : ""}`}>
      <SideMenu open={open} toggleOpen={handleClick} />

      {uploadDishPaths && <UploadDish />}
      <Home />
    </div>
  );
}

export default SubirPlatillo;
