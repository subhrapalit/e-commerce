// import ActionItems from "../../components/ItemDetail/ActionItems";
import * as actionTypes from '../Constants/CartConstant';


export const cartReducer = (state = { cartItems: [] }, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:

            const item = action.payload;
            const exist = state.cartItems.find(product => product.id === item.id);
            if (exist) {
                return { ...state, cartItems: state.cartItems.map(x => x.product === exist.product ? item : x) }
            }
            return { ...state, cartItems: [...state.cartItems, item] }

        case actionTypes.REMOVE_FROM_CART:
            return { ...state, cartItems: state.cartItems.filter(product => product.id !== action.payload) }

        default:
            return state;
    }
}