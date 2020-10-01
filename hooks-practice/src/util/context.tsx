import React, { createContext, FC } from 'react';
import {ItemContextType, Item} from './type';


export const ITEM_DEFAULT:ItemContextType = {
    allItems: [],
    loading: false,
    error: false,
};

export const ItemContext = createContext(ITEM_DEFAULT);

export const ItemProvider:FC = ({children}) => {
    const [reminder, setReminder] = React.useState<Item[]>([]);
    const [isLoading, setLoading] = React.useState<boolean>(false);
    const [isErr, setErr] = React.useState<boolean>(false);

    return (
        <ItemContext.Provider value={{allItems:reminder, loading: isLoading, error:isErr}}>
            {children}
        </ItemContext.Provider>
    );
}