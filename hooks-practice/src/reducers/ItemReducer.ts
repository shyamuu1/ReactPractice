

export const itemReducer = (currentItems, action) => {
    switch (action.type) {
        case 'SET':
          return action.items;
        case 'ADD':
          return [...currentItems, action.item];
        case 'DELETE':
          return currentItems.filter(reminderItem => reminderItem.ItemId !== action.id);
        default:
          throw new Error('Should not get there!');
    }

}