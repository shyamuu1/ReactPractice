import React, { ReactNode, useReducer, useState } from 'react';
import { mealReducer, orderReducer } from '../reducers/mealReducer';
import {Food, Order} from '../util/types'

interface GuestResponse{
    customerId:string;
    myOrder:Order;
}

interface Props{
    children:ReactNode;
}

const initialState:GuestResponse = {
    customerId: "",
    myOrder:{
        id: "",
        orders: [],
        totalPrice: ""
    }
}

export const GuestContext = React.createContext(initialState);

const GuestProvider = ({children}:Props) => {
    const selectedMenuItems:Food[] = [];
    const [data, dispatch] =  useReducer(mealReducer, initialState.myOrder.orders);
    const [currentOrder, orderDispatch]=useReducer(orderReducer, initialState.myOrder);
    
    return (
        <div></div>
    )
}

export default GuestProvider;