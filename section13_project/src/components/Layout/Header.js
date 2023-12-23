import React, { Fragment } from "react";

import mealsImage from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

import styled from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={styled.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart}/>
      </header>
      <div className={styled["main-image"]}>
        <img src={mealsImage} alt="A table full of delicion food!" />
      </div>
    </Fragment>
  );
};

export default Header;
