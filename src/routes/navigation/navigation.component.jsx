import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as BrandLogo } from "../../assets/crown.svg";

import "./navigation.styles.scss";

const NavigationBar = () => {
  return (
    <Fragment>
      <div className="navigation-bar">
        <Link className="logo-container" to="/">
          <BrandLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link" to="/auth">
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default NavigationBar;
