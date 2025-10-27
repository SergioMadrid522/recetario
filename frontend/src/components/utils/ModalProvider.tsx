import type { ReactNode } from "react";
import { createContext, useContext, useState } from "react";

interface ModalContextType {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <ModalContext.Provider value={{ openModal, setOpenModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useEditModal = () => {
  const context = useContext(ModalContext);
  if (!context) throw new Error("useMenu debe estar dentro de MenuProvider");
  return context;
};
