//importing from React library
import React from "react";

//setting up header component
const Header = (props) => {
  return (
    //setting up header props
    <div>
      <h1 style={headerStyle}>{props.title}</h1>
    </div>
  );
};
//header props
const headerStyle = {
  fontSize: "40px",
  textDecoration: "underline",
};

//exporting header.js
export default Header;
