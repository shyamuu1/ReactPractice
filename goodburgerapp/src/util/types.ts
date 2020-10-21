export type Food = {
    id:string;
    name:string;
    foodType:string;
    decription:string;
    price:string;

}

export interface FoodAction {
    type: "SET";
    meals: Food[];
}

export type FoodActionType = FoodAction;