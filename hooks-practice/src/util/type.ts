export type Item = {
    ItemId?:string;
    description?:string;
}

export type ItemContextType = {
    item: Item;
    loading: boolean;
    error: boolean;
}