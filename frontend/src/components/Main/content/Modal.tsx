import type { ModalProps } from "../../../data.type";
import EditDish from "./EditDish";

export default function Modal({ setOpenModal, dish }: ModalProps) {
  return (
    <div className="edit-dish-modal">
      <EditDish dish={dish} />

      <button
        className="close-modal"
        type="button"
        onClick={() => setOpenModal(false)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="bi bi-x-lg"
          viewBox="0 0 16 16"
        >
          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
        </svg>
      </button>
    </div>
  );
}
