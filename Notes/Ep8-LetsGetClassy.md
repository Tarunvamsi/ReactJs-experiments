# Class Based Components

- We will have a render method --> it will return piece of jsx that will display ion dcreen

# Functional Component

- Javascript function that returns JSX that will display on screen

# Pass Props in class based components

- we need to use constructor to pass the props
- We need to write always super(props);
- The super() method calls the constructor of the parent class. This is important because it ensures that the parent class is properly initialized.
- the super() method can also be used to pass props to the parent class. Props are arguments that are passed to a component from its parent.
- we need to use this.props.name to get rendered
- This props can be accessed any where in the

- Creating a state variables in class based components

        this.state = {
      count: 0,
      count2: 1,
        };

        - How to use?
                <h1>Count = {this.state.count2}</h1>

# Lifecycle of React class based component

- How this class based component is mounted in react?

  - Basically Parent compoenent rendered or mounted on the webpahe, it start rendering jsx and then when it see a classcomponent, then it starts to load classComponent now
    - WHEN started a new instance of class is created
      - Then the constructor is called
        - After constructor , Then Render is called
        - Flow of calling :::
          - parentconstrucor
            - parentRender
              - child constructor
                - child Render

- **componentDidMount** :Methid given by class component::: Once the is loaded first constructor and render is called and once this class based component is there on DOM then this componentDidMount will be called --> Life cycle of react

- When parent is loaded , constructor is called and then render is called and it will go to class based component and it will trigger its life ccycle

  - now class based comp constructor is called
    - childern render will bne called
      - children mount will be called (once child mpunt is completed)
        - parent did mount will be called

- componentDidMount --> _is used to make api calls_
- React does not wait for the api call to give data back and thenn render
  - Insted react will load , render and make an api call and fill the data

# If there are multiple childs ?

- Order will change , because react will optimize
- parent constructor
  - parent render
    - first child constructor
    - first child render
    - second child constructor
    - second child render
  - < DIFF IS CALCULATED BETWEEN THE VIRTUAL DOMS-RECOINCILATION>
  - < DOM MANIPULATION - IN SINGLE BATCH>
    - first child component did mount
    - second child component did mount
- parent component did mount

# Why react is Faast?

[React Life cyclemethod Important Diagram](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

- React is fast because React has 2 Phases

  - Render phase
  - Commit Phase

- When component is called , constructor is called and render is called --> Render phase
- React will updates the DOM , then componentdidmount is called --> Commit phase
  - So we call apis here
- Mounting will happen for every child and every parent in react

- When there are multiple childs , react will optimize --> react will batch the render phase for the childs and then commit phase will happen
  - it will call render phase for child 1
  - it will call render phase for child 2
    - It will call the commit phase for child 1
    - commit phase for child 2
- Why react is doing batching up the render phase? that-->
- once the commit phase start , react dom manipulation will start
- Dom manipulation is one of the most costly operation which will take time
- Render phase is soo fast , so it will batch
- Then the commit phase will happen-> expensive operations(DOM manipulation)

- _Mounting cycle_ will finish once the component is renderred once with dummy data
- When we do the setState() updating phase will start
  - the state variable will be updated
    - react trigger the render once again (state variable will be changed with updated value)
      - Now react will update the DOM with new value
- Now UPDATE CYCLE Will call ComponentDidUpdate()

- ------Mounting cycle ---------
- Constructor(dummy data)
- Render (dummy)
  - < HTML (Dummy data)>
- Component Did mount
  - < API call>
  - <this.setstate>' --> satte variable is updated
- -------- Update Cycle ----------
  - Render method is called(API data)
  - < HTML is Loaded with new API data >
  - Componenet DidUpdate called
-

- **ComponentWillUnmount()** --> called before unmounting --> removinf from the UI --> we we navigate between the pages

- Earlier we were used all of these , now we are just using useEffect
