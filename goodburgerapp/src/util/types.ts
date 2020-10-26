export type Food = {
    id:string;
    name:string;
    foodType:string;
    decription:string;
    price:string;

}

export type Order = {
    id:string;
    orders:Food[];
    totalPrice:string;
}

export interface FoodSETAction {
    type: "SET";
    meals: Food[];
}

export interface FoodDeleteAction{
    type:"DELETE";
    id:string;
}

export interface OrderAddAction{
    type:"ADD";
    order:Order;
}

export type OrderActionType = OrderAddAction;

export type FoodActionType = FoodSETAction | FoodDeleteAction;