import React, {useState, useReducer, useEffect, useMemo} from 'react';
import {Food} from '../../util/types';
import BurgerList from '../../components/BurgerList/BurgerList';
import { mealReducer } from '../../reducers/mealReducer'; 

const Burger:React.FC = () => {
    const [error, setError] = useState(null);
    const initialState:Food[] = [];
    const [currentBurgers, dispatch] = useReducer(mealReducer, initialState);
    
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

    const burgers = useMemo(() => {
        return (
            <BurgerList allFood={currentBurgers}/>
        );
    }, [currentBurgers]);
    //const clear = useMemo(() => {setError(null)}, [])
    return(
        <div>
            
            <section>
            {burgers}
            </section>
        </div> 
    );
}

export default Burger;