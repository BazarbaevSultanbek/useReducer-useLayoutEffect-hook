import React, {useReducer, useRef} from 'react';
import './connect.scss'
import ConnectReducer from "./ConnectReducer.jsx";

function Connect() {
    const [status, dispatch] = useReducer(ConnectReducer, 'Disconnect');
    const text = useRef(null)
    const connect = () => {
        if (status === 'Disconnect') {
            text.current.innerHTML = "Please wait..."
            setTimeout(() => {
                dispatch({type: "connect"})
                text.current.innerHTML = "Disconnect"
            }, 5000)

        } else {
            dispatch({type: "disconnect"})
            text.current.innerHTML = "Connect"
        }
    }

    return (
        <div className="Connect">
            <h2>{status}</h2>
            <button onClick={connect} ref={text}>Connect</button>
        </div>
    );
}

export default Connect;