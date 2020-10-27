import { Food,Order,  FoodActionType, OrderActionType } from "../util/types";




export const mealReducer = (currentMealItems:Food[] = [], action:FoodActionType) => {
    switch (action.type) {
        case "SET":
            return action.meals;
        case "DELETE":
            return currentMealItems.filter((item) => item.id!== action.id);
        default:
            return currentMealItems;
    }

};

export const orderReducer = (currentOrder:Order, action:OrderActionType) => {
    switch(action.type){
        case "SET":
            return {...currentOrder, 
                id:action.id,
                orders: action.orders,
                totalPrice:action.totalPrice
            };
        default:
            return currentOrder;
    }

};
