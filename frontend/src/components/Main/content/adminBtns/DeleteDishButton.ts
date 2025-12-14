import Swal from "sweetalert2";
import type { DeleteBtnProps } from "../../../../data.type";
import { deleteDishApi } from "./Apis";

export function DeleteDishButton({
  nombre,
  id_platillo,
  onDeleted,
}: DeleteBtnProps) {
  Swal.fire({
    title: "¿Estás seguro?",
    html: `Estás a punto de borrar el platillo <strong>${nombre}</strong>`,
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Sí, lo quiero borrar",
    cancelButtonText: "Cancelar",
    customClass: {
      popup: "delete-alert__popup",
      title: "delete-alert__title",
      htmlContainer: "delete-alert__text",
      confirmButton: "delete-alert__deleteBtn",
      cancelButton: "delete-alert__cancelBtn",
    },
    buttonsStyling: false,
  }).then(async (result) => {
    if (result.isConfirmed) {
      const success = await deleteDishApi(id_platillo);
      if (success) {
        onDeleted?.();
        Swal.fire({
          icon: "success",
          html: `El platillo <strong>${nombre}</strong> se eliminó correctamente`,
          timer: 1500,
          showConfirmButton: false,
          customClass: {
            popup: "success-alert__popup",
            title: "success-alert__title",
            htmlContainer: "success-alert__text",
          },
          buttonsStyling: false,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          html: "No se pudo eliminar el platillo",
          customClass: {
            popup: "error-alert__popup",
            title: "error-alert__title",
            htmlContainer: "error-alert__text",
            confirmButton: "error-alert__confirmBtn",
          },
          buttonsStyling: false,
        });
      }
    }
  });
}
