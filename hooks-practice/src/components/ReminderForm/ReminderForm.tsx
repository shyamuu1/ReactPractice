import React, {useState} from 'react';
import {Card} from '../../hoc/Card';
import './ReminderForm.css';


const ReminderForm = (props):JSX.Element => {
    const[enteredDescription, setDescription] =  useState('');
    const submitHandler = (event) => {
        event.preventDefault();
        props.onAddItem({description:enteredDescription});
    }
    return (
        <section className="reminder-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              id="description"
              value={enteredDescription}
              onChange={event => {
                setDescription(event.target.value);
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