/* <div id="parent">
    <div id="child">
        <h1>i am from nested sibling h1</h1>
        <h2>i am from nested sibling h2</h2>
    </div>
</div> */

//creating siblings in the tags 

//we need to pass the  sibling react elemnts as an array to the argument of the parent element

const parent1 = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "i am sibling and h1"),
    React.createElement("h2", {}, "i am sibling and h2"),
  ])
);

const nestedSiblings = ReactDOM.createRoot(
  document.getElementById("nestedSiblings")
);
nestedSiblings.render(parent1);
