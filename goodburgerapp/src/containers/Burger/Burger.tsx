import React, {useState, useReducer, useEffect, useMemo, useCallback} from 'react';
import {useLocation} from 'react-router-dom';
import {Food, Order} from '../../util/types';
import BurgerList from '../../components/BurgerList/BurgerList';
import { mealReducer, orderReducer } from '../../reducers/mealReducer';
import {sendGetRequest} from "../../util/http-service";
import Loader from '../../lib/Loader/Loader';
import Modal from "../../lib/Modal/Modal";
import BackDrop from "../../lib/BackDrop/Backdrop";
import OrderModal from '../../containers/Orders/OrderModal/OrderModal';
import "./Burger.css";

const DEFUALT_ORDER:Order = {
    id: "",
    orders: [],
    totalPrice: ""
};
const Burger:React.FC = () => {
    // const [error, setError] = useState(null);
    const initalState:Food[]=[];
    const [guestId, setGuestId]= useState("");
    const [checkoutItems, setCheckoutItems] = useState(initalState);
    const [isMounted, setMounted] = useState<Boolean>(true);
    const [isLoading, setLoading] = useState<Boolean>(false)
    const [purchasing, setPurchasing] = useState(false);
    const [orders, setOrders] = useState<Food[]>(DEFUALT_ORDER.orders);
    const [currentOrder, setCurrentOrder] = useReducer(orderReducer, DEFUALT_ORDER);
    const [currentBurgers, dispatch] = useReducer(mealReducer, initalState);

    useEffect(() => {
        try{
            if (isMounted){
                getMenu();
                // getOrder();
                getGuestOrder();
                
            }
            return () => {setMounted(false)};
        }catch(err){
            console.log(err.message);
        }
    }, [isMounted]);

    console.log(guestId, checkoutItems, currentOrder);

    const getMenu = () => {
        setLoading(true)
        sendGetRequest('http://localhost:8080/food/')
            .then(resData =>{
                setLoading(false);
                dispatch({type:"SET", meals:resData})
            }
            );
    }

    const getGuestOrder = () => {
        setLoading(true);
        sendGetRequest('http://localhost:8080/customers/')
        .then(response => {
            setLoading(false);
            setGuestId(response.customerId);
            setCheckoutItems(response.myOrder.orders);
            setCurrentOrder({type:"SET", id:response.myOrder.id, orders:response.myOrder.orders, totalPrice:response.myOrder.totalPrice})
        })
    }

    const getOrder = () => {
        setLoading(true);
        sendGetRequest('http://localhost:8080/orders/')
            .then(resData => {
                setLoading(false);
                setCurrentOrder({type:"SET", id:resData[0].id, orders:resData[0].orders, totalPrice:resData[0].totalPrice});
            });
    }
    const onAddFoodHandler = useCallback((allOrders:Food) =>{
        try{
            setPurchasing(true);
            setLoading(true);
            fetch(`http://localhost:8080/orders/addFood/${currentOrder.id}`, {
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body: JSON.stringify(allOrders)
            })
            .then(res => res)
            .then(resData => {
                setLoading(false);
                console.log(resData)
            });
        }catch(err){
            console.log(err.message);
        }
        
    }, [currentOrder]);

    const addFoodToListHandler = useCallback((food:Food) => {
        setOrders([...orders,food]);
        setPurchasing(true)
    },[orders]);


    const purchaseCancelHandler = () => {
        setPurchasing(false);
    }
    

    const foods = useMemo(() => {
        if(currentBurgers.length){
            const drinks = currentBurgers.filter(f => f.foodType === "Beverage");
            const burgers = currentBurgers.filter(f => f.foodType === "Burger");
            return (
                <div>
                <BurgerList allFood={burgers} drinks={drinks} getFood={addFoodToListHandler}/>
                </div>
            );
        }
    }, [currentBurgers, addFoodToListHandler]);

    let orderSummary = (orders.length)?<OrderModal order={orders[0]} addOrder={onAddFoodHandler} CloseModal={purchaseCancelHandler} />:<Loader />;
    return(
            <div className="Burger">
                <BackDrop isVisible={purchasing} clicked={purchaseCancelHandler}/>
                <Modal show={purchasing}>
                {orderSummary}
                </Modal>
            {foods}
            </div>
    );
}

export default Burger;