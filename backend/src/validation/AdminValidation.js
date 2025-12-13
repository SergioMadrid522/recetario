export function AdminValidation(data) {
  const errors = [];
  //Indidual validation
  if (!data.nombre || data.nombre.trim() === "") {
    errors.push("No puedes dejar el nombre del platillo vacia");
  }
  if (!data.ingredientes || data.ingredientes === "") {
    errors.push(" No puedes dejar la lista de ingredientes vacia");
  }
  if (!data.id_categoria || data.id_categoria === "") {
    errors.push(" No puedes dejar la categoria del platillo vacia");
  }

  return errors;
}
