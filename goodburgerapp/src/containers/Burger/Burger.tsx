import React, {useState, useReducer, useEffect, useMemo, useCallback} from 'react';
import {Food, Order} from '../../util/types';
import BurgerList from '../../components/BurgerList/BurgerList';
import { mealReducer, orderReducer } from '../../reducers/mealReducer';
import {sendGetRequest} from "../../util/http-service";
import Loader from '../../lib/Loader/Loader';
import Modal from "../../lib/Modal/Modal";
import BackDrop from "../../lib/BackDrop/Backdrop";
import OrderModal from '../../containers/Orders/OrderModal/OrderModal';


const DEFUALT_ORDER:Order = {
    id: "",
    orders: [],
    totalPrice: ""
};
const DEFAULT_MENUITEM:Food = {
        id:  "",
        name: "",
        foodType:"",
        decription:"",
        price:"",
}
const Burger:React.FC = () => {
    // const [error, setError] = useState(null);
    const initalState:Food[]=[];
    const [guestId, setGuestId]= useState("");
    const [isMounted, setMounted] = useState<Boolean>(true);
    const [isLoading, setLoading] = useState<Boolean>(false)
    const [purchasing, setPurchasing] = useState(false);
    const [menuItem, setMenutItem] = useState<Food>(DEFAULT_MENUITEM);
    const [orders, setOrders] = useState<Food[]>(DEFUALT_ORDER.orders);
    const [currentOrder, setCurrentOrder] = useReducer(orderReducer, DEFUALT_ORDER);
    const [currentBurgers, dispatch] = useReducer(mealReducer, initalState);


    useEffect(() => {
        try{
            if (isMounted){
                getMenu();
                getGuestOrder();
                
            }
            return () => {setMounted(false)};
        }catch(err){
            console.log(err.message);
        }
    }, [isMounted]);

    

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
            setCurrentOrder({type:"SET", id:response.myOrder.id, orders:response.myOrder.orders, totalPrice:response.myOrder.totalPrice})
        })
    }

    const onAddFoodHandler = useCallback((allOrders:Food) =>{
        try{
            setPurchasing(true);
            setLoading(true);
            fetch(`http://localhost:8080/customers/addFood/${guestId}`, {
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
        
    }, [ guestId]);

    const selectMenuItemHandler = useCallback((food:Food) => {
        setMenutItem(food);
        //setOrders([...orders,food]);
        setPurchasing(true)
    },[]);


    const purchaseCancelHandler = () => {
        setPurchasing(false);
    }
    

    const foods = useMemo(() => {
        if(currentBurgers.length){
            const drinks = currentBurgers.filter(f => f.foodType === "Beverage");
            const burgers = currentBurgers.filter(f => f.foodType === "Burger");
            return (
                <div>
                <BurgerList allFood={burgers} drinks={drinks} getFood={selectMenuItemHandler}/>
                </div>
            );
        }
    }, [currentBurgers, selectMenuItemHandler]);

    // let orderSummary = (orders.length)?<OrderModal order={menuItem} addOrder={onAddFoodHandler} CloseModal={purchaseCancelHandler} />:<Loader />;

    return(
            <div className="Burger">
                <BackDrop isVisible={purchasing} clicked={purchaseCancelHandler}/>
                <Modal show={purchasing}>
                <OrderModal order={menuItem} addOrder={onAddFoodHandler} CloseModal={purchaseCancelHandler}/>
                </Modal>
            {(!isLoading)?foods:<Loader/>}
            </div>
    );
}

export default Burger;