import { ADD } from "../actions/actions"


export const todoReducer = (state = { items: [] }, action) => {
    switch (action.type) {
        case ADD:
            return {
                ...state,
                items: [...state.items, action.payload]
            }
    }

    return state
}