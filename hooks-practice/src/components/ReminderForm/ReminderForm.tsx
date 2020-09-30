import React, {useState} from 'react';
import {Card} from '../../hoc/Card';
import './ReminderForm.css';
import {Item} from '../../models/Item';

interface Props {
    onAddItem:Function
}

const ReminderForm:React.FC<Props> = ():JSX.Element => {
    const[enteredTitle, setEnteredTitle] =  useState('');
    const submitHandler = (event):void => {
        event.preventDefault();
    }
    return (
        <section className="reminder-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">Name</label>
            <input
              type="text"
              id="title"
              value={enteredTitle}
              onChange={event => {
                setEnteredTitle(event.target.value);
              }}
            />
          </div>
          <div className="ingredient-form__actions">
            <button type="submit">Add Ingredient</button>
          </div>
        </form>
      </Card>
    </section>
    );
}
export default ReminderForm;