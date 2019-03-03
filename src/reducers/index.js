import { DATA_LOADED, API_ERRORED_MENU, DATA_LOADED_REVIEW, API_ERRORED_REVIEW } from '../constants/constants-actions'

//STATE
const initialState = {
    menu: [],
    reviews: [],
};

function rootReducer(state = initialState, action) {
    ////consumir api menu
    if (action.type === DATA_LOADED) {
        return Object.assign({}, state, {
            menu: state.menu.concat(action.payload)
        });
    }
    if (action.type == API_ERRORED_MENU) {
        return console.log('error de conexion con lo datos del menu')
    }



    ////consumir api slider/reviews
    if (action.type === DATA_LOADED_REVIEW) {
        if (state.reviews.length > 0) {
            return state;
        } else {
            return Object.assign({}, state, {
                reviews: state.reviews.concat(action.payload)
            });
        }

    }
    if (action.type == API_ERRORED_REVIEW) {
        return console.log('error de conexion/api reviews')
    }
    return state;
}

export default rootReducer;