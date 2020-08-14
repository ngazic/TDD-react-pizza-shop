import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
} from "../actions/types";

const initialState = {
  count: 0,
  total: 0,
};

export default function (state = initialState, action) {
  function decreasePizzaQuantity(payload, oldState) {
    if (oldState[payload.title][payload.size].count > 1) {
      oldState[payload.title][payload.size].count -= 1;
      oldState.count -= 1;
      oldState.total -= payload.price;
    }
    return oldState;
  }
  function increasePizzaQuantity(payload, oldState) {
    oldState[payload.title][payload.size].count += 1;
    oldState.count += 1;
    oldState.total += payload.price;
    return oldState;
  }
  function removePizzaFromCart(payload, oldState) {
    const removedCount = oldState[payload.title][payload.size].count;
    delete oldState[payload.title][payload.size];
    if (Object.keys(oldState[payload.title]).length === 1) {
      delete oldState[payload.title];
    }
    oldState.count -= removedCount;
    oldState.total -= removedCount * payload.price;
    return oldState;
  }
  function addPizzaToCart(payload, oldState) {
    let newPizza = {};
    newPizza[payload.title] = {};
    newPizza[payload.title].image = payload.image;
    if (oldState.hasOwnProperty(payload.title)) {
      newPizza[payload.title] = oldState[payload.title];
      if (oldState[payload.title].hasOwnProperty(payload.size)) {
        newPizza[payload.title][payload.size].count += 1;
      } else {
        newPizza[payload.title][payload.size] = {
          price: payload.price,
          count: 1,
        };
      }
    } else {
      newPizza[payload.title][payload.size] = {
        price: payload.price,
        count: 1,
      };
    }

    oldState.hasOwnProperty("total")
      ? (newPizza.total = oldState.total + payload.price)
      : (newPizza.total = oldState.total = payload.price);

    return newPizza;
  }
  switch (action.type) {
    case ADD_TO_CART: {
      let newState = {
        ...state,
        count: state.count + 1,
        ...addPizzaToCart(action.payload, state),
      };
      return newState;
    }
    case REMOVE_FROM_CART: {
      let newState = { ...removePizzaFromCart(action.payload, state) };
      return newState;
    }
    case INCREASE_QUANTITY: {
      let newState = { ...increasePizzaQuantity(action.payload, state) };
      return newState;
    }
    case DECREASE_QUANTITY: {
      let newState = { ...decreasePizzaQuantity(action.payload, state) };
      return newState;
    }
    default: {
      return state;
    }
  }
}
