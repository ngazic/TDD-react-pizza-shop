import React from "react";
import { Header } from "./Header";
import { shallow } from "enzyme";

describe("<Header />", () => {
  let header = shallow(<Header />);
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
    it("should close navigation when navigation link is clicked", () => {
      const { closeNav } = header.find("Connect(Navigation)").props();
      closeNav();
      expect(header.state().showNavigation).toEqual(false);
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

    it("should close cart when close button is clicked", () => {
      const close = header.find("Connect(Cart)").props().closeCart;
      close();
      expect(header.state().showCart).toEqual(false);
    });
  });
  describe("bounded global events", () => {
    const intance = header.instance();
    it("should animate cart on `animateCart` event", () => {
      const spy = jest
        .spyOn(document, "addEventListener")
        .mockImplementation(jest.fn());
      intance.componentDidMount();
      document.dispatchEvent(new Event("animateCart"));
      expect(spy).toHaveBeenCalled();
    });
    it("shuld remove event listener `animateCart` after being unmounted", () => {
      const intance2 = header.instance();
      const spy2 = jest
        .spyOn(document, "removeEventListener")
        .mockImplementation(
          jest.fn(() => console.log("mock unmount function"))
        );
      intance2.componentWillUnmount();

      document.dispatchEvent(new Event("animateCart"));
      expect(spy2).toBeCalled();
    });
  });
});
