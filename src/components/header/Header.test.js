import React from "react";
import { Header } from "./Header";
import { Navigation } from "./Navigation";
import { Cart } from "./Cart";
import { shallow } from "enzyme";

describe("<Header />", () => {
  const header = shallow(<Header />);
  it("should render component", () => {
    expect(header).toMatchSnapshot();
  });
  describe("burger menu", () => {
    beforeEach(() => {
      header.find(".icon.pe-7s-menu").simulate("click");
    });
    it("should open navigation", () => {
      expect(header.state("showNavigation")).toEqual(true);
      expect(header.find("Connect(Navigation)").length).toEqual(1);
    });
    it("shuld close cart menu", () => {
      expect(header.state().showCart).toEqual(false);
    });
  });
  describe("cart menu", () => {
    beforeEach(() => {
      header.find(".header-basket").simulate("click");
    });
    it("should open cart menu", () => {
      expect(header.state().showCart).toEqual(true);
      // console.log(header.debug())
      expect(header.find("Connect(Cart)").length).toEqual(1);
    });
    it("should close navigation menu", () => {
      expect(header.state().showNavigation).toEqual(false);
      expect(header.find("Connect(Navigation)").length).toEqual(0);
    });
  });
});
