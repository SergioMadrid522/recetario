// Apis.ts
export async function deleteDishApi(id_platillo: number) {
  try {
    const res = await fetch(
      `http://localhost:3000/deleteDish/${id_platillo}`, // 👈 Asegúrate de que el puerto y ruta coincidan
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!res.ok) {
      // Si no es 200 o 201, lanzo error
      const errorData = await res.json();
      throw new Error(errorData.error || "No se pudo eliminar el platillo");
    }

    return true; // Eliminación exitosa
  } catch (error) {
    console.error("Error en deleteDishApi:", error);
    return false; // Para que tu Swal dispare el "No se pudo eliminar"
  }
}
