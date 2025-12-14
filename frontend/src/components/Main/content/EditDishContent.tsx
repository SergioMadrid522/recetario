import type { UploadDishFormContentProps } from "../../../data.type";

export default function EditDishContent({
  platillo,
  setPlatillo,
  options,
  loading,
}: UploadDishFormContentProps) {
  const { nombre, ingredientes, instrucciones, id_categoria } = platillo;
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, files } = e.target as HTMLInputElement;

    if (name === "imagen" && files) {
      setPlatillo((prev) => ({ ...prev, imagen: files[0] }));
    } else if (name === "categoria") {
      setPlatillo((prev) => ({ ...prev, id_categoria: Number(value) }));
    } else {
      setPlatillo((prev) => ({ ...prev, [name]: value }));
    }
  };

  return (
    <>
      <input
        type="text"
        name="nombre"
        value={nombre}
        onChange={handleChange}
        className="inputs"
        placeholder="¿Cómo se llama el platillo?"
      />

      <textarea
        name="ingredientes"
        value={ingredientes}
        onChange={handleChange}
        className="text-areas"
        placeholder="¿Cuáles son los ingredientes del platillo?"
      />

      <textarea
        name="instrucciones"
        value={instrucciones}
        onChange={handleChange}
        className="text-areas"
        placeholder="Escribe aquí las instrucciones del platillo"
      />

      <div className="file-category">
        <input
          type="file"
          name="imagen"
          accept="image/*"
          onChange={handleChange}
        />

        <select name="categoria" value={id_categoria} onChange={handleChange}>
          {options.map(({ id, name }) => (
            <option value={id} key={id}>
              {name}
            </option>
          ))}
        </select>
      </div>

      <div className="submit-button">
        <button type="submit">
          {loading ? "Actualizando platillo..." : "Actualizar Platillo"}
        </button>
      </div>
    </>
  );
}
