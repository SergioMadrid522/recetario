export async function deleteDishApi(id_platillo: number) {
  const apiUrl = import.meta.env.VITE_DELETE_DISH_URL;
  try {
    const res = await fetch(apiUrl, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id_platillo: id_platillo,
      }),
    });

    if (!res.ok) {
      const errorData = await res.json();
      const { message } = errorData;
      throw new Error(message);
    }

    return true;
  } catch (error) {
    console.error("Error en deleteDishApi:", error);
    return false;
  }
}
