import React from 'react';
import {Item} from '../models/Item';

export const itemReducer = (state:Item[], action):Item[] => {
    switch (action.type) {
        case 'SET':
          return action.items;
        case 'ADD':
          return [...state, action.item];
        case 'DELETE':
          return state.filter(reminderItem => reminderItem.id !== action.id);
        default:
          throw new Error('Should not get there!');
    }

}