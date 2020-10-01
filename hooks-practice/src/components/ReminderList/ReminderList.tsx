import React from 'react';
import {Item} from 'util/type';
import './ReminderList.css';

const ReminderList = (props)=> {
    props.allItems.forEach((e) => console.log(e.ItemId, e.description));
    return(
        <section className="reminder-list">
            <h2>My Reminders</h2>
            <ul>
                {props.allItems.map((item:Item) => (
                    <li key={item.id} onClick={props.onRemoveItem.bind(this, item.id)}><span>{item.description}</span></li>
                ))}
            </ul>
        </section>
    )
}

export default ReminderList;