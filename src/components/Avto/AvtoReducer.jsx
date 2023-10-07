function AvtoReducer(state, action) {
    switch (action.type) {
        case "addFeatures":
            return {
                ...state,
                features: state.features.map((item) => {
                    if (item.id === action.id) {
                        item.status = true
                    }
                    return item;
                }),
                totalPrice:state.amountPrice + state.features.reduce((acc, item) => {
                    return acc + (item.status ? item.price : 0);
                }, 0)
            }
        case "delFeatures":
            return {
                ...state,
                features:  state.features.map(item => {
                    if (item.id === action.id) {
                        item.status = false
                    }
                    return item;
                }),
                totalPrice: state.amountPrice - state.features.reduce((acc, item) => {
                    return acc + (item.status ? item.price : 0);
                }, 0)

            }
        default:
            return state;
    }

}

export default AvtoReducer;