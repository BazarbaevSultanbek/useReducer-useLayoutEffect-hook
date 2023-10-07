import React from 'react';

function CountReducer(state, action) {
    switch (action.type) {
        case "increase":
            return {...state, count: state.count + 1};
        case "decrease":
            return {...state, count: state.count - 1};
        case "toggleHidden":
            return {...state, hidden: !state.hidden};
    }
}

export function DisplayReducer(status, action) {

}

export default CountReducer;