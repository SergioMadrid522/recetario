import Swal from "sweetalert2";
import "./Alerts.css";

export function ErrorAlert(message: string | Error) {
  Swal.fire({
    title: "Error",
    text: message instanceof Error ? message.message : message,
    showConfirmButton: true,
    customClass: {
      popup: "error-alert",
      title: "error-alert__title",
      htmlContainer: "error-alert__text",
      confirmButton: "error-alert__confirmBtn",
    },
  });
}

export function SuccessAlert(message: string) {
  Swal.fire({
    icon: "success",
    text: message,
    timer: 1500,
    showConfirmButton: false,
    customClass: {
      popup: "success-alert_popup",
      title: "success-alert__title",
      htmlContainer: "success-alert__text",
      confirmButton: "success-alert__confirmBtn",
    },
  });
}

export function DeleteDish(dishName: string) {
  Swal.fire({
    title: "Estás seguro?",
    html: `Estás a punto de borrar el platillo <strong>${dishName}</strong>`,
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Sí, lo quiero borrar",
    customClass: {
      popup: "delete-alert",
      title: "delete-alert__title",
      htmlContainer: "delete-alert__text",
      confirmButton: "delete-alert__deleteBtn",
      cancelButton: "delete-alert__cancelBtn",
    },
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        icon: "success",
        text: "El platillo se elimino correctamente",
        timer: 1500,
        showConfirmButton: false,
        customClass: {
          popup: "success-alert",
          title: "success-alert__title",
          htmlContainer: "success-alert__text",
          confirmButton: "success-alert__confirmBtn",
        },
      });
    }
  });
}
