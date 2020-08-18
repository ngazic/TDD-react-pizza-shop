import React, { Component } from "react";
import logo from "../../assets/images/logo.png";
import Navigation from "./Navigation";
import Cart from "./Cart";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { eventBus } from "../../helpers/eventBus";

export class Header extends Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = {
      showNavigation: false,
      showCart: false,
    };
    this.burgerBtn = this.burgerBtn.bind(this);
    this.closeNav = this.closeNav.bind(this);
    this.cartBtn = this.cartBtn.bind(this);
    this.animateCart = this.animateCart.bind(this);
  }
  componentDidMount() {
    eventBus.on("animateCart", this.animateCart);
  }
  componentWillUnmount() {
    console.log('========unmounting===========')
    eventBus.remove("animateCart", this.animateCart);
  }
  animateCart() {
    console.log('=========animate===========')
    this.setState({
      animate: true,
    });
    setTimeout(() => {
      this.setState({
        animate: false,
      });
    }, 600);
  }
  burgerBtn() {
    this.setState({
      showNavigation: !this.state.showNavigation,
    });
  }
  cartBtn() {
    this.setState({
      showCart: !this.state.showCart,
    });
  }
  closeNav(state) {
    switch (state) {
      case "cart": {
        this.setState({ showCart: false });
        break;
      }
      default: {
        this.setState({ showNavigation: false });
      }
    }

    this.setState({ state: false });
  }
  render() {
    return (
      <header className="header clearfix">
        <div className="header__wrap">
          <span className="sb-toggle-left">
            <i
              className="icon pe-7s-menu"
              onClick={() => {
                this.burgerBtn();
                this.closeNav("cart");
              }}
            ></i>
          </span>
          {/* <Link className="logo" to="/">
            <img className="img-responsive" src={logo} alt="Logo" />
          </Link> */}
          <span
            className="header-basket"
            onClick={() => {
              this.cartBtn();
              this.closeNav();
            }}
          >
            <i
              className={`icon pe-7s-cart ${
                this.state.animate ? "cart-run" : ""
              }`}
            ></i>
            <span
              className={`header-basket__number ${
                this.state.animate ? "bump" : ""
              }`}
            >
              {this.props.cart}
            </span>
          </span>
        </div>

        {this.state.showNavigation ? (
          <Navigation closeNav={this.closeNav} />
        ) : null}
        {this.state.showCart ? <Cart closeCart={this.cartBtn} /> : null}
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart.count,
});

export default connect(mapStateToProps, null)(Header);
