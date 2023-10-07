import {useReducer} from 'react';
import './avto.scss'
import car from "./img/nexia3.png"
import AvtoReducer from "./AvtoReducer.jsx";

function Avto() {
    const [items, dispatch] = useReducer(AvtoReducer, {
        name: "Nexia",
        amountPrice: 26395,
        totalPrice: 26395,
        features: [
            {name: "Premium sound system", price: 500, status: false, id: 1},
            {name: "V-6 engine", price: 1500, status: false, id: 2},
            {name: "Rear spoiler", price: 250, status: false, id: 3},
            {name: "Racing detail package", price: 1500, status: false, id: 4},
        ]
    });

    const addFeatures = (id) => {
        dispatch({type: "addFeatures", id: id});

    }
    console.log(items)
    const delFeatures = (id) => {
        dispatch({type: "delFeatures", id: id});
    }
    return (
        <div className="Avto">
            <div className="Avto-car">
                <img src={car} alt="nexia3"/>
                <p>Amount: ${items.amountPrice}</p>
                <h2>Added features:</h2>
                <ul>
                    {
                        items.features.map((item,index) => {
                            if (item.status) {
                                return (<li id={item.id} key={item.id}>
                                    <button onClick={() => delFeatures(item.id)}>X</button>
                                    {item.name} (+{item.price})</li>)
                            }
                        })
                    }
                </ul>
            </div>
            <div className="Avto-add">
                <h2>Additional Features</h2>
                <ul>{
                    items.features.map((item) => {
                        if (!item.status) return (<li id={item.id} key={item.id}>
                            <button onClick={() => addFeatures(item.id)}>Add</button>
                            {item.name} (+{item.price})</li>)
                    })
                }
                </ul>
                <h2>Total amount:${items.totalPrice}</h2>
            </div>
        </div>
    )
        ;
}

export default Avto;