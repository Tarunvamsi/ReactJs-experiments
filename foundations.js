import React from "react";
import ReactDOM from "react-dom/client";

//react elements

// Core of React we create react elements in this way , but this is not user read friendly
//to make user read friendly we use jsx syntax
const heading = React.createElement(
  "h1",
  { id: "heading_start" },
  "start"
);
console.log(heading);

//jsx - JSX IS JUST A SYNTAX , at the end it is a react element which is js objext
const jsxHeading = <h1 id="heading" tabIndex="5">I am heading from the JSX , makes your life easy </h1>
console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading); //takes the react element object and  converts to html and push it to browser i.e, replace everything inside the root