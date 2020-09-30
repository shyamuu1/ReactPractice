import React from 'react';
import {Item} from 'util/type';
import './ReminderList.css';

const ReminderList = (props)=> {
    return(
        <section className="reminder-list">
            <h2>My Reminders</h2>
            <ul>
                {props.allItems.map((item:Item) => (
                    <li key={item.ItemId} onClick={props.onRemoveItem.bind(this, item.ItemId)}><span>{item.description}</span></li>
                ))}
            </ul>
        </section>
    )
}

export default ReminderList;