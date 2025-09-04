import { useState, useEffect } from "react";

function HandleClick() {
    const [openModal, setOpenModal] = useState(false);
    const modal = () => setOpenModal(!openModal)
    useEffect(() => {
        
    }, [openModal])
    return [modal];
}

export default HandleClick;