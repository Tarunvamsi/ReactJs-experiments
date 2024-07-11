# DidYouKnow

1.  **What is Emmet?** 
   Emmet is a plugin for text editors that enables quick HTML and CSS code writing using shortcuts and abbreviations. It significantly speeds up the coding process by expanding simple abbreviations into complex code snippets.
    
2.  **Difference between a Library and Framework?** 
   A library is a collection of pre-written code that you can call upon to perform specific tasks. A framework provides a structured foundation for building applications, dictating architecture and flow, and often includes libraries within it.
    
3.  **What is CDN? Why do we use it?** 
   A Content Delivery Network (CDN) is a network of distributed servers that deliver web content to users based on their geographic location. We use CDNs to improve load times, reduce latency, and enhance the availability and reliability of content.
    
4.  **Why is React known as React?**
    React is named "React" because it efficiently reacts to changes in data by updating and rendering components accordingly. This reactivity is key to creating dynamic and interactive user interfaces.
    
5.  **What is crossorigin in script tag?**
    The `crossorigin` attribute in a script tag specifies how the browser should handle cross-origin requests for the script. It enables the inclusion of appropriate CORS headers, allowing for detailed error information and usage of subresource integrity.
    
6.  **What is the difference between React and ReactDOM?** 
   React is a JavaScript library for building user interfaces, primarily handling the component logic and state management. ReactDOM is a package that provides DOM-specific methods, enabling the rendering of React components to the web's DOM.
    
7.  **What is the difference between react.development.js and react.production.js files via CDN?**
    `react.development.js` is the development version of React, which includes helpful warnings and debugging tools. `react.production.js` is the optimized production version, which omits these extras to improve performance and reduce file size.


### Question 8: What is JSX?
**Answer:** JSX stands for JavaScript XML. It is a syntax extension for JavaScript used with React to describe what the UI should look like. JSX produces React "elements" which are then rendered to the DOM. It allows you to write HTML-like code within JavaScript, making the code more readable and easier to write.

### Question 9: What are props in React?
**Answer:** Props (short for properties) are read-only attributes used to pass data from a parent component to a child component. They allow components to be dynamic and reusable by providing a way to configure or customize them. Props are immutable, meaning they should not be modified within the child component.

### Question 10: What is the difference between state and props in React?
**Answer:** 
- **State:** State is a local data storage that is mutable (can be changed) and is managed within the component. State can change over time and is used to manage dynamic data.
- **Props:** Props are immutable and used to pass data from parent components to child components. Props cannot be changed within the child component.

### Question 11: What are the lifecycle methods in React?
**Answer:** React components have lifecycle methods that are called at different stages of the component's life. The main lifecycle methods are:
- **Mounting:** `componentDidMount()`
- **Updating:** `shouldComponentUpdate()`, `componentDidUpdate()`
- **Unmounting:** `componentWillUnmount()`

### Question 12: What is the virtual DOM and how does it work in React?
**Answer:** The virtual DOM is a lightweight copy of the actual DOM created by React. React keeps this virtual DOM in memory and syncs it with the real DOM using a process called reconciliation. When the state of a component changes, React updates the virtual DOM, compares it with the previous version, and efficiently updates the real DOM to reflect the changes.

### Question 13: What is the purpose of `key` in React lists?
**Answer:** Keys help React identify which items have changed, are added, or are removed in a list. They should be unique among siblings and are used to optimize rendering performance. Using keys makes it easier for React to keep track of elements and update the DOM more efficiently.

### Question 14: How do you handle forms in React?
**Answer:** Forms in React can be handled using controlled components or uncontrolled components:
- **Controlled Components:** Form data is handled by the state within the component. The input value is controlled by React, and changes are managed using event handlers.
- **Uncontrolled Components:** Form data is handled by the DOM itself. React refs are used to access form values.

### Question 15: What are hooks in React?
**Answer:** Hooks are functions that let you use state and other React features in functional components. They were introduced in React 16.8. Commonly used hooks include:
- `useState()`: Allows you to add state to functional components.
- `useEffect()`: Lets you perform side effects in functional components (e.g., data fetching, subscriptions).
- `useContext()`: Provides a way to access context values in functional components.

### Question 16: What is the Context API in React?
**Answer:** The Context API is a way to pass data through the component tree without having to pass props down manually at every level. It is used to create global variables that can be shared across the entire application, making it easier to manage state for deeply nested components.



