type item = {
    link: string;
    name: string
}

export type category = {
    category: item[];
}


export type searchModalProps = {
    open: boolean;
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}
