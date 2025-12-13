import { useState, useEffect } from "react";

export default function HandleClick() {
  const [openModal, setOpenModal] = useState(false);
  const modal = () => setOpenModal(!openModal);
  useEffect(() => {}, [openModal]);
  return [modal];
}
