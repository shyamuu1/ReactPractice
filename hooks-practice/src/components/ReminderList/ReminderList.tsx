import React from 'react';
import {Item} from '../../models/Item';
import './ReminderList.css';

const ReminderList = (props)=> {
    
    return(
        <section className="reminder-list">
            <ul>
                {props.allItems.map((item:Item) => (
                    <li key={item.ItemId} onClick={props.onRemoveItem.bind(this, item.ItemId)}><span>{item.description}</span></li>
                ))}
            </ul>
        </section>
    )
}

export default ReminderList;