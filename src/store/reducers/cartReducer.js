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
  function deepCopyObject(sourceObject) {
    return JSON.parse(JSON.stringify(sourceObject));
  }
  function decreasePizzaQuantity(payload, oldState) {
    const oldStateCopy = deepCopyObject(oldState);
    if (oldStateCopy[payload.title][payload.size].count > 1) {
      oldStateCopy[payload.title][payload.size].count -= 1;
      oldStateCopy.count -= 1;
      oldStateCopy.total -= payload.price;
    }
    return oldStateCopy;
  }
  function increasePizzaQuantity(payload, oldState) {
    const oldStateCopy = deepCopyObject(oldState);
    oldStateCopy[payload.title][payload.size].count += 1;
    oldStateCopy.count += 1;
    oldStateCopy.total += payload.price;
    return oldStateCopy;
  }
  function removePizzaFromCart(payload, oldState) {
    const oldStateCopy = deepCopyObject(oldState);
    const removedCount = oldStateCopy[payload.title][payload.size].count;
    delete oldStateCopy[payload.title][payload.size];
    if (Object.keys(oldStateCopy[payload.title]).length === 1) {
      delete oldStateCopy[payload.title];
    }
    oldStateCopy.count -= removedCount;
    oldStateCopy.total -= removedCount * payload.price;
    return oldStateCopy;
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
      : (newPizza.total = payload.price);

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
