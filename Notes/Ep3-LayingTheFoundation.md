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
- const heading = <h1> this is JSX </h1>;

- # Multiple Line jsx syntax
- const heading = ( <h1> 
- this is jsx multiple line syntax 
- </h1>);                
- *We need to wrap the jsx code in paranthesis() to make babel understand where the jsx code starts and where the code ends*


## React Components🚀💻




    






