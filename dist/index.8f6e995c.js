/* <div id="parent">
    <div id="child">
        <h1>i am from nested sibling h1</h1>
        <h2>i am from nested sibling h2</h2>
    </div>
</div> */ //creating siblings in the tags 
//we need to pass the  sibling react elemnts as an array to the argument of the parent element
const parent1 = React.createElement("div", {
    id: "parent"
}, React.createElement("div", {
    id: "child"
}, [
    React.createElement("h1", {}, "i am sibling and h1"),
    React.createElement("h2", {}, "i am sibling and h2")
]));
const nestedSiblings = ReactDOM.createRoot(document.getElementById("nestedSiblings"));
nestedSiblings.render(parent1);
// nested siblings more complex
/*<div id="parent">
    <div id="child">
        <h1>i am from nested sibling h1 child</h1>
        <h2>i am from nested sibling h2 child</h2>
    </div>

    <div id="child2">
        <h1>i am from nested sibling h1 child2</h1>
        <h2>i am from nested sibling h2 child2</h2>
    </div>
</div> */ const parent2 = React.createElement("div", {
    id: "parent"
}, [
    React.createElement("div", {
        id: "child"
    }, [
        React.createElement("h1", {
            id: "child1"
        }, "i am sibling and h1 child1"),
        React.createElement("h2", {
            id: "child1"
        }, "i am sibling and h2 child1")
    ]),
    React.createElement("div", {
        id: "child2"
    }, [
        React.createElement("h1", {
            id: "child2"
        }, "i am sibling and h1 child2"),
        React.createElement("h2", {
            id: "child2"
        }, "i am sibling and h2 child2")
    ])
]);
nestedSiblings.render(parent2); // above code looks soo complex and tidy
 // JSX -- makes easy when we want to create tags  , no need of React.createElement()

//# sourceMappingURL=index.8f6e995c.js.map
