import store from "./store/store";
// import Home from "./components/home/Home";
// import Hero from "./components/Hero";
import { Provider } from "react-redux";
import React, { useEffect } from "react";
// import Footer from "./components/Foooter";
// import bodyScrollLock from "./scrollLock";
import Header from "./components/header/Header";
// import Menu from "./components/pizza-menu/Menu";
// import Checkout from "./components/checkout/Checkout";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import ShoppingCart from "./components/shopping-cart/ShoppingCart";

function App() {
  // useEffect(() => {
  //   window.addEventListener(
  //     "resize",
  //     bodyScrollLock.removeBodyFixedWidth.bind(bodyScrollLock)
  //   );
  // }, []);
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App layout-theme animated-css" id="wrapper">
          <Header />
          {/* <Hero />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/menu">
              <Menu />
            </Route>
            <Route path="/checkout">
              <Checkout />
            </Route>
            <Route path="/shopping-cart">
              <ShoppingCart />
            </Route>
          </Switch>
          <Footer /> */}
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
