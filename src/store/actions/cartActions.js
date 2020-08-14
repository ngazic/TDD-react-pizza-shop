import {ADD_TO_CART, REMOVE_FROM_CART, INCREASE_QUANTITY, DECREASE_QUANTITY} from './types';


export function addItemToCart(payload) {
  return (dispatch) => {
    dispatch({
      type: ADD_TO_CART,
      payload
    })
  }
}

export function removeItemFromCart(payload) {
  return(dispatch)=>{
    dispatch({
      type: REMOVE_FROM_CART,
      payload
    })
  }
}

export function increaseQuantity(payload) {
  return (dispatch)=>{
    dispatch({
      type: INCREASE_QUANTITY,
      payload
    })
  }
}
export function decreaseQuantity(payload) {
  return (dispatch)=>{
    dispatch({
      type: DECREASE_QUANTITY,
      payload
    })
  }
}