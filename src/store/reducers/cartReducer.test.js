import * as constants from "../actions/types";
import cartReducer from "./cartReducer";

describe("cart reducer", () => {
  const initialState = {
    count: 0,
    total: 0,
  };

  const stateWithAnItem = {
    count: 1,
    total: 10,
    testItem: {
      image: "4.png",
      small: {
        price: 10,
        count: 1,
      },
    },
  };
  const stateWithAnItemIncreased = {
    count: 2,
    total: 20,
    testItem: {
      image: "4.png",
      small: {
        price: 10,
        count: 2,
      },
    },
  };

  const actionPayloadNewItem = {
    title: "testItem",
    size: "small",
    price: 10,
  };

  it("should return default state", () => {
    expect(cartReducer(undefined, {})).toEqual(initialState);
  });

  it("should add item to cart", () => {
    const newItem = {
      title: "testItem",
      size: "small",
      price: 10,
      image: "4.png",
    };

    expect(
      cartReducer(undefined, { type: constants.ADD_TO_CART, payload: newItem })
    ).toEqual(stateWithAnItem);
  });

  it("should remove item from the cart", () => {
    expect(
      cartReducer(stateWithAnItem, {
        type: constants.REMOVE_FROM_CART,
        payload: actionPayloadNewItem,
      })
    ).toEqual(initialState);
  });

  it("should increase quantity of an existing item in the cart", () => {
    expect(
      cartReducer(stateWithAnItem, {
        type: constants.INCREASE_QUANTITY,
        payload: actionPayloadNewItem,
      })
    ).toEqual(stateWithAnItemIncreased);
  });
  it("should decrease quantity of the item", () => {
    expect(
      cartReducer(stateWithAnItemIncreased, {
        type: constants.DECREASE_QUANTITY,
        payload: actionPayloadNewItem,
      })
    ).toEqual(stateWithAnItem);
  });
});
