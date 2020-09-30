import React, { useMemo, useReducer } from 'react';
import {itemReducer} from '../reducers/ItemReducer';
import {Item} from '../models/Item';
import ReminderForm from '../components/ReminderForm/ReminderForm';
import ReminderList from '../components/ReminderList/ReminderList';



const ItemContainer = ():JSX.Element => {
    const initialState:Item[] = [];
    const [currentItems,dispatch] = useReducer(itemReducer, initialState);
    const idGenerator = ():string => {
        const s1 = Math.random().toString(36).substring(2,15);
        return s1.concat(s1);
    }
    const addItemHandler = (newItem:Item) => {
        const uniqueId = idGenerator();
        dispatch({type:"ADD", item:{id:uniqueId, ...newItem}});
    }
    const removeItemHandler = (reminderId:string) => {
        dispatch({type:"DELETE", id:reminderId});
    }
    const reminderList = useMemo(() => {
        return (
        <ReminderList allItems={currentItems} onRemoveItem={removeItemHandler} />
        );
}, [currentItems]);

    return(
        <div className="App">
            <ReminderForm onAddItem={addItemHandler} />
            <section>
            {reminderList}
            </section>
        </div>
    );
}

export default ItemContainer;