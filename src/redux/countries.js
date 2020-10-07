import { countriesApi } from "../api/api";

const inintialState = {
    items: [
        
    ],
}

const countries = (state = inintialState, action) => {
    switch(action.type) {
        case SET_COUNTRIES:
            return {
                ...state,
                items: action.countries,
            }
        default:
            return state;
    }
}

// types
const SET_COUNTRIES = "SET_COUNTRIES";

// actionCreators
const setCountries = (countries) => {
    return{
        type: SET_COUNTRIES,
        countries: countries
    }
}


export const fetchCountries = () => async (dispatch) => {
    let res = await countriesApi.getCountries()
    dispatch(setCountries(res.data))
}

export default countries;