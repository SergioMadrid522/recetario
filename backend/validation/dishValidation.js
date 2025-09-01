export function dishValidation(id_platillo) {
    const errors = [];
    if(!id_platillo || isNaN(Number(id_platillo))){
        errors.push("No se encontro el producto que buscas :(")
    }
    return errors;
}