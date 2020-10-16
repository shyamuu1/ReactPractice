import { Food, FoodActionType } from "../util/types";




export const mealReducer = (currentMealItems:Food[] = [], action:FoodActionType) => {
    switch (action.type) {
        case "SET":
            return action.meals;
        default:
            return currentMealItems;
    }

};

