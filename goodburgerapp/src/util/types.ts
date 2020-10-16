export type Food = {
    id:string;
    name:string;
    foodType:string;
    decription:string;
    price:Number;

}

export interface FoodAction {
    type: "SET";
    meals: Food[];
}

export type FoodActionType = FoodAction;