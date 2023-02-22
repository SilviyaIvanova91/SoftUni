import React from "react";

export const Header = (props) => {
  //  return React.createElement("h1", {}, "Hello React!");
  const reactElement = <h1>{props.children}</h1>;

  return reactElement;
};
