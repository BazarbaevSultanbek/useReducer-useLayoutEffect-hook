import React, { useReducer } from 'react';
import './colors.scss'
import ColorsReducer from "./ColorsReducer.jsx";

function Colors() {
    const [state, dispatch] = useReducer(ColorsReducer, [
        {
            color: "Red",
            id: "1",
            decor: false
        },
        {
            color: "Blue",
            id: "2",
            decor: false
        },
        {
            color: "Purple",
            id: "3",
            decor: false
        },
        {
            color: "Green",
            id: "4",
            decor: false
        },
        {
            color: "White",
            id: "5",
            decor: false
        },
        {
            color: "" +
                "Pink",
            id: "6",
            decor: false
        },
        {
            color: "Orange",
            id: "7",
            decor: false
        }


    ]);
    const kill = (id) => {
        dispatch({type: "decor", id: id})
    };
    const reset = ()=>{
        dispatch({type: "reset"})
    };

    return (
        <div className="Colors">
            <div className="Colors-in">
                <div className="Colors-all">
                    {state.map(item => (
                        <div key={item.id}>
                            <p
                                style={{ textDecoration: item.decor ? "line-through" : "none" }}
                            >
                                {item.color}
                            </p>
                            <button onClick={() => kill(item.id)}>
                                { item.decor ? "Revised" : "Kill"}
                            </button>
                        </div>
                    ))}
                </div>
                <button className="reset" onClick={reset}>Reset</button>
            </div>
        </div>
    );
}

export default Colors;