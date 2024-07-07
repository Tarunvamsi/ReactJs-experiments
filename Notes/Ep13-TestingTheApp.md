# Types of Testing (Developer)

- Unit Testing
- Integration Testing
- End to End Testing

- **unit Testing** --> Test the react components in isolation

  - Example : Test header component - We Will just try to render only header
  - Testing a small component otr 1 unit of the react application

- **Integration Testing** --> Testing the integration of the components

  - Multiple components talk to each other
  - we develop a flow ..that we test
  - Example :: Searching
    - when we search anything , we need to display cards

- **End to end testing** --> start frm user landing into page and till user leaving the page
- We will test the full flow of the app
- End to end required tools like cypress, puppiter, selenium

- Developers are responsible for Unit and Integration testing

# React Testing Library

- Built on top of DOM testing Library
- Integrate React Testing Library: npm install -D @testing-library/react
- React testing Library uses **JEST**
- Jest - delightful javascript testing framework :: DOM testing library or react testing library use JEST behind the scenes

# Setting UP Testing in our app

- Install react testing Library
- Installed JEST
- Installed Babel Dependenices from JEST website docs
- Configure Babel (babel.config.js)
- Parcel already uses babel by default .. parcel has its own config for babel
- Now we are trying to add extra config .. so parcel will get confused..so we need to change parcel behaviour to accomodate the babel

- create .parcelrc and make comfiguration (refer parcel docs)

- Install @babel/preset-react --> to make JSX default babel transpilation
- Include @babel/preset-react inside babel config and runtime as automatic

           [("@babel/preset-react", { runtime: "automatic" })],

- Install @testing-library/jest-dom --> toBeInTheDocument

##### Jest configuration

- npx jest --init
- √ Would you like to use Typescript for the configuration file? ... no
- √ Choose the test environment that will be used for testing » jsdom (browser-like)
- √ Do you want Jest to add coverage reports? ... yes
- √ Which provider should be used to instrument code for coverage? » babel
- √ Automatically clear mock calls, instances, contexts and results before every test? ... yes

- Install JSDOM library
- testing file name convention --> header.test.js
- Test folder \_\_ tests \_\_
- Test Case :
-           test("descriptiom" , ()=>{
                    const result = sum(3,4);
                    expect(result).toBe(7)      //Assertion

                    })

- Beauty of the JEST is it will show you whatever is rendered when the test case failes

- Use Describe to group the test cases
