import React from 'react';

function TasksReducer(state, action) {
    switch (action.type) {
        case "add":
            return state = [...state, {task: action.text, id: Math.floor(Math.random() * 1000000)}]
        case "delete":
            return state =  state.filter(item=>item.id !== action.id);
    }
}

export default TasksReducer;