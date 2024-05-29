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




//React functional component

const Heading= () =>{
    return <h1> This a React functional component heading</h1>
};

const Title = () => {
    return <h2> React Title Component</h2>
};
const number = 1000;
//otherway of writing above code , simple syntax
const Heading1= () => (
    <div id="container">
      
    {/* Amazing super power of jsx- {}; */} 
    {/* we can write any javascript code inside and we can compute any value or any js code*/} 
    <h1>{100+505}</h1>
    <h2>{number}</h2>  
    {jsxHeading}   {/*react element inside a react component*/}
<h1> This a React functional component heading</h1>
<Title />
<Title></Title>
{Title()}
</div>);

const root = ReactDOM.createRoot(document.getElementById("root"));

//rendering react element
root.render(heading); //takes the react element object and  converts to html and push it to browser i.e, replace everything inside the root

//rendering react component

root.render(<Heading1 />);