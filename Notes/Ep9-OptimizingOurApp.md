# Optimizing Our App

# Single Responsibility Principle

- If we have any function or class it shpuld have single responsibility
- Each of the components should have its own single responsibility --> it should do it work
- For each component it should have single responsibility
- Modular Fashion --> Break code into more modules
  - Becomes more Testable
  - Becomes more reusable
  - Becomes more maintainable
  - We can catch and fix bugs easily ,, if we have more small modules

# - Custom Hook

- special javascript function given to us by react
- Hooks are like --> Utility Function, They are like helper Functions
- Abstracting the logic to custom hook
- Best practice to create custom hook in UTILS
- File name name as use<functionname>.js --> react will know it is a hook if we write as "use" at start
- Using custom hooks will make more testable --> if there is any issue , like fetching ,we can directly fetch that logic

# How to make our app Good Performance

- Bundler --> Bundels all the js files(maps the js files) and makes a single js file and give it to browser
- Problem in developing large scale app :

  - The size of the JS file will increase a lot based on the number of components it holds
  - We should optimize this to make our app good performance

- Possible solution --
  - Break our app into multiple small pieces (into maultiple smaller javascript files) i.e, smaller bundels of these files
    - This process is know as **CHUNKING** or **CODE SPLITTING** OR **DYNAMIC BUNDLING** or **LAZY LOADING**
    - SO request for that js file will not get heavy
- **LazyLoading or OnDemandLoading** -- We will not load everything directly , but when we go to that page , then we will load that code when required
  - How to Achieve?
    - By importing components in different way
      - const component = lazy()
      - const Grocery = lazy(() => import("./components/Grocery"));
      - Above line makes a seperate bundle for the component
        - < Suspense fallback=>{} >< component/></ Suspense> //fallback is used when component code is missing , then fallback will be loaded
  - Use **lazy loading** to split the large scale app into multiple chunk of bundlers to increase the performance of the app --> all code will not load at once , code will be loaded on demand
