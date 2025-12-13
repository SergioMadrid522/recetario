export interface Dish {
  id_platillo: number;
  nombre: string;
  ingredientes: string;
  instrucciones: string;
  imagen: string | File | null;
  id_categoria: number;
}

export type dishDetails = {
  nombre: string;
  ingredientes: string;
  instrucciones: string;
};

export type Category = {
  id: number;
  name: string;
};

export type UploadDishFormContentProps = {
  platillo: {
    nombre: string;
    ingredientes: string;
    instrucciones: string;
    imagen: string | File | null;
    id_categoria: number;
  };
  setPlatillo: React.Dispatch<
    React.SetStateAction<{
      nombre: string;
      ingredientes: string;
      instrucciones: string;
      imagen: string | File | null;
      id_categoria: number;
    }>
  >;
  options: Category[];
  loading: boolean;
};

export interface AdminBtnsProps {
  onDeleted?: () => void;
  dish: Dish;
}

export type DeleteBtnProps = {
  nombre: string;
  id_platillo: number;
  onDeleted?: () => void;
};

export type EditModalProps = {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  dish: Dish;
};

export type UploadDishProps = {
  dishesData: Dish;
};

export type EditDishModalProps = {
  dish: Dish;
};
