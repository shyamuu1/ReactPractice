export type Item = {
    id?:string;
    description?:string;
}

export type ItemContextType = {
    allItems: Item[];
    loading: boolean;
    error: boolean;
}