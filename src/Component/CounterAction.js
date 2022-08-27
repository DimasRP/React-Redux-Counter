import React from "react";
import "./style.css"
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { useSelector } from "react-redux/es/hooks/useSelector";
import TYPES from "../Redux/type";
const CounterAction = () => {
    const dispatch = useDispatch()
    const {countReducer} = useSelector((state) => state)
    const handlePlus = () =>{
        const result =countReducer.total +1
        dispatch({
            type: TYPES.INCREMENT
            
        })
    }
    const handleMinus = () =>{
        const result =countReducer.total -1
        dispatch({
            type: TYPES.DECREMENT
        })
    }
    const handleReset = () =>{
        dispatch({
            type: TYPES.RESET
        })
    }

    return(
        <div >
            <div className="count">
                <button onClick={handlePlus}>Plus</button>
                <button onClick={handleMinus}>Minus</button>
            </div>
            <div>
                <button onClick={handleReset}>Reset</button>     
            </div>
        </div>
    )
}

export default CounterAction