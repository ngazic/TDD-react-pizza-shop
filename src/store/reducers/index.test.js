import rootReducer from "./index";

describe("root reducer", () => {
  it("should return default state", () => {
    expect(rootReducer({}, {})).toEqual({
      page: {
        page: "Get it while it's hot",
        link: "",
      },
      cart: {
        count: 0, 
        total: 0
      }
    });
  });
});
