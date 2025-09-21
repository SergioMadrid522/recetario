export type Dish = {
    nombre: string;
    description: string;
    link: string;
    category: string;
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
