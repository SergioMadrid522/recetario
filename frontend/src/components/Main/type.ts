export type Dish = {
    id_platillo: number
    nombre: string;
    description: string;
    link: string;
    id_categoria: number
}

export type UploadDishFormContentProps = {
    platillo: {
        nombre: string;
        ingredientes: string;
        instrucciones: string;
        imagen: File | null;
        id_categoria: number;
    };
    setPlatillo: React.Dispatch<React.SetStateAction<{
        nombre: string;
        ingredientes: string;
        instrucciones: string;
        imagen: File | null;
        id_categoria: number
    }>>;
};
