## EP3 - Laying the foundation

npx parcel <sourcefile>   - to execute the project - this will create a development build for us and host in localhost:1234

These commands are diff for dev and prod build 
To make simpler , we will write a script that will build the dev or prod build 

We can create a script in package.json - we can create script in sucha a way that we can create dev build , prod ready script

    *package.json*
    
    "scripts": {

        "start": "parcel index.html", 

        "build": "parcel build index.html",

        "test": "jest"
    },

From now we dont need to do npx parcel sourcefile 
we can just give **npm run start**      //it wll call parcel index.hmtl 

**npm run build** - it will build our project for production 

**npm run start** -- shortcut **npm start**

## React Element 
Same like DOM elements , in react we have react elements 

*JSX - Javascript synatx to create react elements*

JSX is not a part of react , they are totally different 
JSX makes devellopers lifes easy 

Before react and other frameworks - we used html to write skeletoon css to style up , javascript to functions 

After React , these three merged into a single file 

**❌JSX is not html inside javascript**

**✔ JSX is HTMl or XML like syntax**

- Core of React we create react elements in this way , but this is not user read friendly
  
        const heading = React.createElement(
        "h1",
        { id: "heading_start" },
        "start"
        );

- to make user read friendly we use jsx syntax
- jsx - JSX IS JUST A SYNTAX , at the end it is a react element which is js objext
- 
        const jsxHeading = <h1 id="heading">I am heading from the JSX , makes your life easy </h1>

- javascript doesnt not provide jsx inbuilt
- javascript engine wont understand jsx syntax code , JS engine only understadn ECMA Script(ES6)

- JSX is not a pure valid javascript, it wont understand by browers 

  *How jsx syntax is executing and displayed in browser*

  - The job is doing by **Parcel Bundler**
  - Before The code goes to js engine code  is transpiled by Parcel bundler and then JS engine recievs the code that browsers can understand 
  - *Transpile* - code is converted to the code that browsers, react  can understand
  -  Parcel is like a manager , it will have their own repsective handlers or packages , so to **TRanspile the code** parcel will assign the work to **Babel** , Babel will transpile our code 
  -  Babel will take the jsx code and convert or transpile to the code that browser adn react will undertsand 
-  [babelDocumentation official and open source](http://babeljs.io) Babel is a javascript compiler 
# How react element code executes?
- React.createElement => ReactElement-JS object =>HTMLElement(render)
- React.createElement at the end is an Javascript object - and when rendering it will render as an Html element
# How jsx code executes?
- jsx code is transpiled and converted to React.createElement and the background work will happen as detailed above 

- If we want to give attributes in JSX we need to give camelcase (className, tabIndex)

- # Single Line jsx 

        const heading = <h1> this is JSX </h1>;

- # Multiple Line jsx syntax
                const heading = ( <h1> 
                this is jsx multiple line syntax 
                </h1>);                
- *We need to wrap the jsx code in paranthesis() to make babel understand where the jsx code starts and where the code ends*


## React Components🚀💻

- Everything is a component in React
- Heading , footer , title , button , nav bar , text box etc bla bla ...

  **Two types of components in React**
  - class based component ( old way of writing code , nobody uses)
  - Functional Component (New way of writing code)

## React Functional Component 
- React functional component is just a Javascript Function 
- When Creating a component in React start with  a captial letter oterwise error , this the way of understaing react 

- Function which is returning a react element it will become a functional component 
- Function returing a jsx code element is a functional component 


- React functional component

        const Heading= () =>{
            return <h1> This a React functional component heading</h1>
        };

- otherway of writing above code , simple syntax

        const Heading1= () =>( 
            <h1> This a React functional component heading</h1>);

# Rendering syntax for react elements and react components

- rendering react element
root.render(heading); 
  - takes the react element object and  converts to html and push it to browser i.e, replace everything inside the root

- rendering react component

  - root.render(<Heading />);

# component composition? 
- composing 2 components into a single component

        const Heading1= () => (
            <div id="container">
            <h1> This a React functional component head
            <Title /> //composition
            </div>);

# Amazing super power of jsx- {};

{} - using these bracktes , we can write any javascript code inside and we can compute any value or any js code

        const number = 1000;
        const Heading1= () => (
            <div id="container">
            <h2>{number}</h2>
            <h1>{100+300}</h1>
            <h1> This a React functional component head
            <Title /> //composition
            </div>);

# how to put react element inside react component            

        const Heading1= () => (
        <div id="container">
      
        {/* Amazing super power of jsx- {}; */} 
        {/* we can write any javascript code inside and we can compute any value or any js code*/} 
        <h1>{100+505}</h1>
        <h2>{number}</h2>  
        {jsxHeading}   {/*react element inside a react component*/}
        <h1> This a React functional component heading</h1>
        <Title />
        </div>);

    *con: Cross site scripting*
    Attacker can send any malacious code and get the access to the information of our laptop if we run javascript in our browser 

    But this will he gandled by jsx {} - these braces will sanitize everything we Pass in , so that no body can do anything using loop hole , react and JSX will handle this situation


    





    






