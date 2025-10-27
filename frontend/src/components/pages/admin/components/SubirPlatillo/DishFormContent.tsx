import type { UploadDishFormContentProps } from "../../../../Main/type.ts";

function DishFormContent({
  platillo,
  setPlatillo,
  options,
}: UploadDishFormContentProps) {
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
        value={platillo.nombre}
        onChange={handleChange}
        className="inputs"
        placeholder="¿Cómo se llama el platillo?"
      />
      <textarea
        name="ingredientes"
        value={platillo.ingredientes}
        onChange={handleChange}
        className="text-areas"
        placeholder="¿Cuáles son los ingredientes del platillo?"
      />
      <textarea
        name="instrucciones"
        value={platillo.instrucciones}
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
        <select
          name="categoria"
          value={platillo.id_categoria}
          onChange={handleChange}
        >
          {options.map((option) => (
            <option value={option.id} key={option.id}>
              {option.name}
            </option>
          ))}
        </select>
      </div>
      <div className="submit-button">
        <button type="submit">Subir Platillo</button>
      </div>
    </>
  );
}

export default DishFormContent;
