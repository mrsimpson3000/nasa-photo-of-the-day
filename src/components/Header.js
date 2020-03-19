import React from "react";

const Header = props => {
  return (
    <div>
      <h1>NASA Picture of the Day</h1>
      <h2>{props.title} </h2>
      <h3>Today's Date: {props.date} </h3>
    </div>
  );
};

export default Header;
