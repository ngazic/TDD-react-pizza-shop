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
    const actionPayload = {
      title: "testItem",
      size: "small",
      price: 10
    };
    expect(
      cartReducer(stateWithAnItem, {
        type: constants.REMOVE_FROM_CART,
        payload: actionPayload,
      })
    ).toEqual(initialState);
  });
});
