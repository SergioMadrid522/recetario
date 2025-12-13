export async function deleteDishApi(id_platillo: number) {
  console.log(id_platillo);
  try {
    const res = await fetch(`http://192.168.0.10:3001/api/deleteDish`, {
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
