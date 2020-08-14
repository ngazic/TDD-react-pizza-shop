import * as constants from "./types";
import * as actions from "./cartActions";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

describe("cartActions tests:", () => {
  const mockStore = configureStore([thunk]);
  const store = mockStore();
  const actionPayload = {
    title: {
      image: "img.png",
      size: {
        price: 10,
        count: 10,
      },
    },
  };
  beforeEach(() => {
    store.clearActions();
  });
  it("should create an action to add item to cart", () => {
    const expectedAction = [
      {
        type: constants.ADD_TO_CART,
        payload: actionPayload,
      }
    ];
    store.dispatch(actions.addItemToCart(actionPayload));
    expect(store.getActions()).toEqual(expectedAction);
    // console.log(store.getActions());
  });

  it('should create an action to remove item from cart', () => {
    const expectedAction = [
      {
        type: constants.REMOVE_FROM_CART,
        payload: actionPayload
      }
    ]
    store.dispatch(actions.removeItemFromCart(actionPayload));
    expect(store.getActions()).toEqual(expectedAction);
  });

  it('should create an action to increase quantity to item in cart', () => {
    const expectedAction = [
      {
        type: constants.INCREASE_QUANTITY,
        payload: actionPayload
      }
    ]

    store.dispatch(actions.increaseQuantity(actionPayload));
    expect(store.getActions()).toEqual(expectedAction);
  });

  it('should create an action to decrease quantity to item in cart', () => {
    const expectedAction = [
      {
        type: constants.DECREASE_QUANTITY,
        payload: actionPayload
      }
    ]

    store.dispatch(actions.decreaseQuantity(actionPayload));
    expect(store.getActions()).toEqual(expectedAction);
  });
});
