export type Dish = {
  id_platillo: number;
  nombre: string;
  description: string;
  link: string;
  id_categoria: number;
};

export type dishDetails = {
  nombre: string;
  ingredientes: string;
  instrucciones: string;
};

type Category = {
  id: number;
  name: string;
};

export type UploadDishFormContentProps = {
  platillo: {
    nombre: string;
    ingredientes: string;
    instrucciones: string;
    imagen: File | null;
    id_categoria: number;
  };
  setPlatillo: React.Dispatch<
    React.SetStateAction<{
      nombre: string;
      ingredientes: string;
      instrucciones: string;
      imagen: File | null;
      id_categoria: number;
    }>
  >;
  options: Category[];
};

export type AdminBtnsProps = {
  dishName: string;
  dishId: number;
  onDeleted?: () => void;
};

export type deleteBtnProps = {
  dishName: string;
  dishId: number;
  onDeleted?: () => void;
};
