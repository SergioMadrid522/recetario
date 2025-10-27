function DishIngredients({ dishIngredients, dishInstructions }) {
  return (
    <>
      <ul>
        {dishIngredients
          .replace(/^"|"$/g, "") // quita comillas al inicio y fin
          .replace(/\\n/g, "\n") // convierte \n en saltos reales
          .split("\n") // separa por líneas
          .map((linea, i) =>
            linea.trim() ? <li key={i}>{linea.trim()}</li> : null
          )}
      </ul>

      <div className="dish-details__instructions">
        <h2>Instrucciones de preparación</h2>
        <ol>
          {dishInstructions
            .replace(/^"|"$/g, "")
            .replace(/\\n/g, "\n")
            .split("\n")
            .map((linea, index) =>
              linea.trim() ? <li key={index}>{linea.trim()}</li> : null
            )}
        </ol>
      </div>
    </>
  );
}

export default DishIngredients;
