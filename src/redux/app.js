const inintialState = {
    initialized: false,
}

const app = (state = inintialState, action) => {
    switch(action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true,
            }
        default:
            return state;
    }
}

// types
const SET_INITIALIZED = "SET_INITIALIZED";

// actionCreators
export const setInitialized = () => {
    return{
        type: SET_INITIALIZED
    }
}

export default app;