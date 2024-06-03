# Lets Get Hooked !!

- Any frame work out there we can do using html css js.. but why framework or lobarary?
- It makes dev experince easy
- Makes you write less code , Do More
- Makes code experince fast and optimize in web page

# Export and Import Components in React ..

# Export and import the components in React

- export syntax : export default < componentName > //default export (1st type)
- import syntax : import < componentName > from < fileLocation >

- We cant write default export more than once , we should write only one default export
- By default a file can export only one thing
- To export multiple things we use names exports
  - just write export infront of that things ( export const CON_URL="sdgfdg")
  - # How to import named export
    - import {CON_URL} from "../../utils/constants"; //example

* We should not keep any hardcoded data or anything in the component files
* We need to call in seperate files ( const.js or config.js or utils.js)

# To keep data layer and UI layer consistent and sync with each other , here comes REACT

- REACT can do faster , efficient DOM manipulation

# State Variable in React - super powerful variable

- useState - Hooks
  #### React Hook - A normal javascript function given to us by react , which is prebuilt ( utility function)
  ##### Hooks In react
  - useState() - Gives the Super Powerful react state variables
    - import {useState} from "react";
    - used to create State Variable
      - it maintains the state of the component
      - local state Variable scope is inside the component
      - const [restroList] = useState([//pass default value]); //Local state variable creation syntax by react
      - let restroList ; //noraml Js variable creation
    - To modify the restroList
      - by a function , the function comes as second parameter in the array
        - const [restroList , setRestroList]= useState([{Defaultdata}]);
  - useEffect()

### Whenever state varaible changes react render the components --> Quickly updates the UI

# How React work in Background ?

### React uses "RECONCILIATION ALGORITHM" (React fiber(from React16))

      - React fber is ongoing reimplemntation of Reacts core algorithm

- #### Incremental Rendering : Ability to split the rendering work into chunks and spread out over multiple frames (React makes application faster)
  - On the UI we have a DOM
    - Suppose we have 7 restaurant cards
      - After filtering our Ui changes to 3 restaurant cards
        -When we have 7 restaurants cards at beginning , react creates a _Virtual DOM (Represntation of an Actual DOM )_ --> Javascript Object (React Virtual Dom)

# Diff Algorithm

### Findss the differnce bewtween two Virtual DOMS (old Virtual dom and new virtual dom)

      - *ReactFiber* It will calculate the Differnce between the objects when any event happens and calculate the result and update the DOM at every render cycle

# UseEffect Hook();

- impoert {useEffect} from "react";
- useEffect will take two arguments
  - 1st Arrow function( Call back function) (mandatory)
  - 2nd Dependency Array (not mandatory)
- # When will useEffect call back function called?
  - this call backfunction is called After our component renders
  - If we want something to be called after our page renders we use UseEffect
- case1: If No dependency array => useEffect is called on every component Render
- case2: If dependency array is empty =[] => Then use effect is called on Initial render and Just once when component rendered for 1st time
- case3: If we put something in the dependecy array , then use effect is called every time dependecny is updated

# Important things about Hooks

- Never call the useState outside the component
- Usestate is used to create local state for the functional components
- Always call the hooks on the top , before the function start
- Beacuse is js sync single thread language , so it creats it state variable
- Never create useState inside if,else => create inconsistency program
- Never create state variables inside functions also
- Best pratcie -> create at top , at higher level
