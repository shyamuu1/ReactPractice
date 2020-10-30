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

export type httpState ={
    data:any;
    loading:Boolean;
    error:string | null;
}


export interface FoodSETAction {
    type: "SET";
    meals: Food[];
}

export interface FoodDeleteAction{
    type:"DELETE";
    id:string;
}

export interface updateOrderAction{
    type:"UPDATE"
    orders:Food[];
}
export interface OrderSetAction{
    type:"SET",
    id:string;
    orders:Food[];
    totalPrice:string;
}

export type OrderActionType = updateOrderAction|OrderSetAction;

export type FoodActionType = FoodSETAction | FoodDeleteAction;