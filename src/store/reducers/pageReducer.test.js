import pageReducer from "./pageReducer";
import * as constants from "../actions/types";

describe("page reducers", () => {
  const initialState = {
    page: "Get it while it's hot",
    link: "",
  };

  it("should return default state", () => {
    expect(pageReducer(undefined, {})).toEqual(initialState);
  });
  it("should set page title", () => {
    const newPage = {
      page: "new page title",
      link: "http://new-link",
    };
    const setTitleAction = {
      type: constants.SET_PAGE_TITLE,
      payload: newPage,
    };
    expect(pageReducer(undefined, setTitleAction)).toEqual(newPage);
  });
});
