import React, {useReducer} from 'react';
import './counter.scss'
import CountReducer from "./CountReducer.jsx";
import DisplayReducer from "./CountReducer.jsx";
function Counter() {
    const [state, dispatch] = useReducer(CountReducer,{count:0,hidden:true});
    const inc = ()=>{
        dispatch({type:"increase"});
    };
    const dec = ()=>{
        dispatch({type:"decrease"});
    }
    const display = () => {
        dispatch({type: "toggleHidden"});
    };
    return (
        <div className="Counter">
            <div className="Counter-in">
                <button onClick={display}>Toggle hidden</button>
                <div className="Counter-num" style={{
                    display:state.hidden?"block":"none"
                }}>
                    <button onClick={inc}>Increment</button>
                    <h2>{state.count}</h2>
                    <button onClick={dec}>Decrement</button>
                </div>
            </div>
        </div>
    );
}

export default Counter;