import React from "react";
import ReactDOM from "react-dom/client";
// createElement takes 3 args - 1)tag we want to create 2)object 3) what we want to put in tag
//object : give attribute to our tags
const heading = React.createElement("h1", { id: "heading" }, "Hello react !!"); //heading is an react elemnt which is js object

console.log(heading); //returns the java script

//putting the heading to the root in html to render the heading
const root = ReactDOM.createRoot(document.getElementById("root")); //creating root inside react is job of DOM to render the content in the browser to put content

root.render(heading); //take object and convert the heading tag and put in the DOM - rendering

//everything will be replaced even if we have something in html file when we pass to render 

