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
      popup: "success-alert__popup",
      title: "success-alert__title",
      htmlContainer: "success-alert__text",
      confirmButton: "success-alert__confirmBtn",
    },
  });
}
