type item = {
  id: number;
  name: string;
};

export type category = {
  category: item[];
  onSelect: () => void;
};

export type showDish = {
  query: string;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export type searchModalProps = {
  open: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
};
