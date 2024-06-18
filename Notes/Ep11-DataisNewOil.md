# Data Is New Oil

### Higher order components

- Function that takes component and returns a component (At the end normal js function)
- **Theory behind** : Takes component as input , enhance it and add extra features and returns it back
- Lets build promoted feature in swiggy app

# Controlled and uncontrolled components

- Important part of react app is managing its data
- Ui is very static , it doesnt have logic of its own
- UI and data are different layers --> UI layer is powered by Data Layer
- Datalayer contains --> states , props, local variables
- UI layer --> JSX code which is changed by data layer

# How do we manage the whole data properly ?

-

### Controlled Components -

    - If the parent component have full controll to the child components i.e, child should not have its own state, it should depend on the parent component
    - we can controll via props

## Uncontrolled components -

    - When it have its own state then its is an uncontrolled components
    - If it manage it self it isuncontrolled

- **WE NEED TO LIFT THE STATE UP , TO CONTROLL THE CHILD COMPONENTS**

# PROPS DRILLING

- WHEN REACT APP GROWS big, there will be multiple components , and nested components
- passing data btw components is very challenge
- React has one way data flow (Top to bottom
-
- Suppose if we have to pass the data from parent to some 10th children , then it will be very difficult to pass data from parent to childer
- To overcome this we have **PROPS DRILLING**

- We will drill the props directly from parent to the Child whereever needed

# React context

- when we use react context we can avoid props React (Randomly passing the props everywhere)
- _context_ - Place where we place global amd anywhere we can access that data

  - Global data examples - Logged in user, Theme(light or dark--we need every where in our app)

        - const UserContext = createContext({
            loggedInUser: "Default User",
                });

        -   const { loggedInUser } = useContext(UserContext);

- can we keep all the data in context?

  - if we feel that we use that data in multiple places , then we can keep in context

- Any where in the app , we can use context provider , we can override the default value (if we wrapped the whole app in context provider , then every where the value changes)

- **Context is a global space , we can provide for the whhole app or a part of the app , and we can override the default data**
