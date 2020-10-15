

export const mealReducer = (currentMealItems:any[], action:any) => {
    switch (action.type) {
        case "SET":
            return action.meals;
        default:
            throw new Error("Should not hit here")
    }

};

