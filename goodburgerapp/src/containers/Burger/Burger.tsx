import React, {useState, useReducer, useEffect, useMemo} from 'react';
import {Food} from '../../util/types';
import BurgerList from '../../components/BurgerList/BurgerList';
import { mealReducer } from '../../reducers/mealReducer'; 
import "./Burger.css";


const Burger:React.FC = () => {
    const [error, setError] = useState(null);
    const initialState:Food[] = [];
    const [currentBurgers, dispatch] = useReducer(mealReducer, initialState);
    const [currentDrinks, setDrinks] = useState(initialState);
    useEffect(() => {
        const fetchData = async() => {
            fetch('http://localhost:8080/food/', {
                method: "GET",
                headers: {"Content-Type":"application/json"}
            })
            .then(res => res.json())
            .then(resData => dispatch({type:"SET", meals:resData}))
            .catch(err => {
                setError(err.message);
            })
        };
        fetchData()
    }, []);

    const foods = useMemo(() => {
        if(currentBurgers.length){
            const drinks = currentBurgers.filter(f => f.foodType === "Beverage");
            const burgers = currentBurgers.filter(f => f.foodType === "Burger");
            return (
                <div>
                <BurgerList allFood={burgers}/>
                <BurgerList allFood={drinks} />
                </div>
            );
        }
        
    }, [currentBurgers]);
    //const clear = useMemo(() => {setError(null)}, [])
    return(
        <div className="burger-container">
            <section>
            {foods}
            </section>
        </div> 
    );
}

export default Burger;