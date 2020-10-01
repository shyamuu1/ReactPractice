import { Item } from "util/type";


export const itemReducer = (currentItems:Item[], action:any) => {
    switch (action.type) {
        case 'SET':
          return action.items;
        case 'ADD':
          return [...currentItems, action.item];
        case 'DELETE':
          return currentItems.filter((reminderItem:Item) => reminderItem.id !== action.id);
        default:
          throw new Error('Should not get there!');
    }

}