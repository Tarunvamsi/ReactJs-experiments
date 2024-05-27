
/* <div id="parent">
    <div id="child">
        <h1>i am from nested h1 tag </h1>

    </div>

</div> */

//creating the nested tags from html in react for above html code

const parent = React.createElement(
    "div",                             //first div
    { id: "parent" },                  //passing the second div as children for the parent object 
    React.createElement(
      "div",
      { id: "child" },
      React.createElement("h1", {}, "i am from nested h1 tag")   //passing the h1 tag as a child for the previous object 
    )
  );

  const nestedTags = ReactDOM.createRoot(document.getElementById("nestedTags")); //creating root inside react is job of DOM to render the content in the browser to put content

  //to view both the react elements , we need to pass both js objects to render , need to include both heading and parent in a single render call.
const container = React.createElement("div",{},heading,parent);
nestedTags.render(container);