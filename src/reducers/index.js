import { DATA_LOADED, API_ERRORED_MENU, DATA_LOADED_REVIEW, API_ERRORED_REVIEW, DATA_LOADED_CALCULATOR, API_ERRORED_CALCULATOR } from '../constants/constants-actions'

//STATE
const initialState = {
    menu: [],
    reviews: [],
    calculator: []
};

function rootReducer(state = initialState, action) {
    switch (action.type) {

        case DATA_LOADED:
            return Object.assign({}, state, {
                menu: [...action.payload]
            })
        case API_ERRORED_MENU:
            return console.log('error de conexion con lo datos del menu')
        case DATA_LOADED_REVIEW:
            if (state.reviews.length > 0) {
                return { ...state };
            } else {
                return Object.assign({}, state, {
                    reviews: state.reviews.concat(action.payload)
                });
            }
        case API_ERRORED_REVIEW:
            return console.log('error de conexion/api reviews')

        case DATA_LOADED_CALCULATOR:
            return { ...state, calculator: action.payload }
        case API_ERRORED_CALCULATOR:
            return console.log('error de conexion calculator')

        default:
            return state
    }
}

export default rootReducer;

