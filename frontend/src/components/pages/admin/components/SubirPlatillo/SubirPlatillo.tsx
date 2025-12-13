import { useLocation } from "react-router-dom";
import "./styles/SubirPlatillo.css";

import SideMenu from "./SideMenu";
import Home from "../Home/Home";
import { useMenu } from "../../../../utils/MenuProvider";
import UploadDish from "../../../../Main/UploadDish";
import { useEditModal } from "../../../../utils/ModalProvider";

function SubirPlatillo() {
  const location = useLocation();
  const hideUploadDish = location.pathname === "/admin/subir-platillo";
  const { open, setOpen } = useMenu();
  const { openModal } = useEditModal();

  const handleClick = () => setOpen(!open);

  return (
    <div className={`upload-dish-menu ${openModal ? "modal-active" : ""}`}>
      <SideMenu open={open} toggleOpen={handleClick} />

      {hideUploadDish && <UploadDish />}
      <Home />
    </div>
  );
}

export default SubirPlatillo;
