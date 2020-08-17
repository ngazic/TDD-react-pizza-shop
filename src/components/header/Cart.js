import React, { useEffect } from "react";
// import CartItem from "./CartItem";
import { connect } from "react-redux";
// import { Link } from "react-router-dom";
// import bodyScrollLock from "../../scrollLock";

export function extractCartItems(allItems) {
  let cartItems = [];
  Object.getOwnPropertyNames(allItems).forEach((item, index) => {
    if (typeof allItems[item] === "object") {
      Object.getOwnPropertyNames(allItems[item]).forEach((size, ind) => {
        if (typeof allItems[item][size] === "object") {
          let temp = {
            title: item,
            image: allItems[item].image,
            size,
            count: allItems[item][size].count,
            price: allItems[item][size].price,
          };
          cartItems.push(temp);
        }
      });
    }
  });
  return cartItems;
}

export function Cart(props) {
  // useEffect(() => {
  //   bodyScrollLock.disableBodyScroll();
  //   return () => bodyScrollLock.enableBodyScrolling();
  // }, []);
  let cartItems = extractCartItems(props.items);
  return (
    <div className="sb-slidebar sb-right sb-active">
      {/* <section className="section-list-cart">
        <h2 className="ui-title-inner">Cart Totals</h2>
        <span className="sb-toggle-right">
          <i className="icon pe-7s-close" onClick={props.closeCart}></i>
        </span>
        <ul className="list-cart list-unstyled">
          {cartItems.map((item, key) => {
            return <CartItem pizza={item} key={key} />;
          })}
        </ul>
        <div className="total-price clearfix">
          Order Total
          <span className="total-price__number">${props.items.total}</span>
        </div>
        <Link
          onClick={props.closeCart}
          to="shopping-cart"
          className="total-price__btn ui-btn ui-btn_mod-a btn-effect btn-block"
        >
          view shopping cart
        </Link>
        <Link
          to="checkout"
          className="total-price__btn ui-btn ui-btn-primary btn-effect btn-block"
          onClick={props.closeCart}
        >
          checkout
        </Link>
      </section> */}
    </div>
  );
}

const mapStateToProps = (state) => ({
  items: state.cart,
});

export default connect(mapStateToProps, null)(Cart);
