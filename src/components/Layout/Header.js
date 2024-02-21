import React from "react";
import classes from "./Header.module.css";
import mealsImage from "../../assests/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>Maestro Fornai</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div>
        <img
          className={classes.mainimage}
          src={mealsImage}
          alt="Dining Table "
        />
      </div>
    </React.Fragment>
  );
};
export default Header;
