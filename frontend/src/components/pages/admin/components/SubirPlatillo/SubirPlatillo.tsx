import { useLocation } from "react-router-dom";
import SideMenu from "./SideMenu.tsx";

/* Firebase */
/* import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../../../../firebase.config.ts"; */

import "./styles/SubirPlatillo.css";
import Home from "../Home/Home.tsx";
import { useMenu } from "../../../../utils/MenuProvider.tsx";

import UploadDish from "../../../../Main/UploadDish.tsx";
import { useEditModal } from "../../../../utils/ModalProvider.tsx";
//import { categories } from "../../../components/Header/data.ts";

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
