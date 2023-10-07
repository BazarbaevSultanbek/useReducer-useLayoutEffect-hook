function ColorsReducer(state, action) {
    if (action.type === "decor") {
        const foundItem = state.find(item => item.id === action.id);
        if (foundItem) {
            const updatedItem = { ...foundItem, decor: !foundItem.decor };
            return state.map(item =>
                item.id === action.id ? updatedItem : item
            );
        }
    }
    else if(action.type === "reset"){
        return state.map((item) => ({...item,decor: false}))
    }
    return state;
}

export default ColorsReducer;