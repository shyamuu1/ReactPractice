import React, { useReducer } from 'react';
import {itemReducer} from '../reducers/ItemReducer';
import {Item} from '../models/Item';





const ItemContainer:React.FC = ():JSX.Element => {
    const initialState:Item[] = [];
    const [state,dispatch] = useReducer(itemReducer, initialState);
    return(
        <div className="App">
            <p>Reminder Form</p>
            <section>
                <p>Reminder List</p>
            </section>
        </div>
    );
}

export default ItemContainer;