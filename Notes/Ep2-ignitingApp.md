# Episode 2 : igniting our application
- Is the code from Ep1 ready to push to production? NO
- The code is really not an optimised code 
- we dont want to put comments , consolo logs etc in production 
- we want to compress codes , minfy codes, code split , bundle code  etc..

## This episode we will ignite or fire our app to make the production ready code 

- create Reactapp  - already ignited , it has all the super powers 
## lets understand what happens and how to create own create react app - production ready app , instead of using already existing one

- npm - npm is everything except node package manager😂  -->  go to [npm official website](https://www.npmjs.com/) and click on the ❤ to see what npm is 🚀
- npm manages packages but it does not stand for node package manager
- -npm is a standard repositry for all the packages, libraries, utilities are hosted over here

# How to make our project to use npm 

- npm init
- give package name ( ex: namastereact1.0)
- give description (optional)
- give entry point - based on our project or else default
- give test command - jest (used for testing)
- give git repo
- give keywords
- give author : vamsi
- - give license : default
- give : yes
-  **We will get a json file in our application ( package.json)**
-  *package.json is configuration for npm*
-  package.json also known as **dependencies** - our project depends on lots of packages 
-  npm take care of version of the packages in package.json
-  
# How to insatll dependencies to our project 
- most important to our project is - **BUNDLER**
- *Bundler* - Our whole code needs to bundled , minified , cached , compressed , cleaned before sending to production 
- # what is job of bundler
- Bundler needs to bundle code , compress code , minfiy code  to make the code production ready 
- webpack , parcel , veet : bundlers ( we will use *parcel* in our projects... why? our choice at the end every bundler plays the same role but different algorithms)
- **parcel** will ignite our app 🔥💡 it will give all powers and strengths to our app  - parcel comes as node package 
- To install parcel to out project :: npm install <packagename>   ( npm install -D parcel)   "-D   :: development dependency"
- we will see something like this 
-     "devDependencies": {
    "parcel": "^2.12.0"       (^ - caret ~ -tilde) 
     ^ -  it will help us to manage the minor version updates to automatically update based on new releases (2.12.0 -> 2.12.1)   //preferred
     ~ - it will help us to manage the major version updates to automatically update based on new releases (2.12.0 -> 3.0.1)
- Dependenices or packages are of two types 
  - 1) Dev dependency   - required in development phase
  - 2) Normal dependency - used in production phase

# Why we will get package-lock.json and package.json?

- *package.json* - config for npm , keep track of what version installed in our system  -- keep approx version 
- *package-lock.json*  - keep track and lock the  **Exact version** and keeps the record of the dependecy installed  -- keep approx version 

    "parcel": {
    "version": "2.12.0",
    "resolved": "https://registry.npmjs.org/parcel/-/parcel-2.12.0.tgz",
    "integrity": "sha512-W+gxAq7aQ9dJIg/XLKGcRT0cvnStFAQHPaI0pvD0U2l6IVLueUAm3nwN7lkY62zZNmlvNx6jNtE4wlbS+CyqSg==",
    "dev": true,

- **integrity** : some hash value -- why? *"Code works in my local , but not working in production"*  -- to avoid that hash will verify that the version availble in my machine is deployed in the production -- it will keep track the exacy version of all the dependencies

# What is there in Node_modules?
- it is like a database wich contains all the data about the package installed --=- node modules is soo huge (heaviest object in the universe😂)
-  fetches all the codes of the package installed

# I installed only parcel but there are many other files in node modules?
- we installed parcel as dependency , in the same way parcel as a project it is dependent on other packages -->  *transitive dependency*
-  none of the node modules is a garbage , they are more important for the dependency
-  Every node module installed has its own package.json, have its own depenencies , *so our project will have multiple package.json files*

# Should we put this nodemodules to production or github or cloud?   NO

- Best pratice is to not to put in production or github 
- so create .gitignore and put in it  -- /node_modules 

# should we put package.json and package-lock.json in git?  YES 
- it will maintain the exact versions of the dependencies 
- If we have package.json and package-lock.json we can recreate all the node modules  (npm install)

## HOW DO WE IGNITE OUR APP? USING PARCEL
- **npx parcel <sourcefile>**       npx parcel index.html
- npx --> executing a package
- npm --> install a package 
  output: Server running at http://localhost:1234
          ✨ Built in 7.31s
    
- Parcel created a server for us , as when we deploy our app it will run on the server and will be there on a Port , in the same way parcel created a server for our app
- Parcel will go to the sourcefile and build a development environment

##   Installing React :: npm install react 
- we have cdn links , but what if the react version get s updated , we need to change the links manually 
- to avoid such problem , we will install react pacakage from npm library using "npm install react"
- *we have installed react , now how to use that react in our code?*
- import React from "react";      --> "react" :: this is the refernce to the react folder in node modules
- import ReactDOM from "react-dom";
![error when imported react]](image.png)

in index.hmtl we are injection the app.js so it(browser) treats this as a normal javascript file , normal js file do not have any imports
- So to tell the browser that it is a module 
- <script type="module" src="App.js"></script>
  
# Parcel background work 🔥🔥🧨-> scenes behind the parcel (gives energy to our app)  (parcel documentation)[https://parceljs.org]
- builds Devolepment Build
- Creates a local server
- Makes a Hot reloading --HMR -Hot module replacement --> we we change any thing in code and save the file it will automatically read and reload the page
- Parcel uses a *File Watching algorithm* - written in C++ ( keeps eye on all the files and track every save and build it once again)
- Faster Builds whenever we save  - because of *Caching* in .parcel-cache --> caching everything we do to get faster dev experience
- Image Optimization 
- If we do production build - it will minification --> it will do bundling the code
- compress the files during production build --> remove all whitespaces , etc and ship to production 
- Consistent Hashing 
- code splitting
- Differential Bundling  -- when app is hosted , our app can be opened inside internet explorer , chrome , firefox etc ... parcel takes care off all that , so that app can run smoothly on older browsers also 
- Diagnostice behind the scenes 
- Better error handling and suggestions 
- Also gives feature to host on HTTPS   (npx parcel index.html --https)
- Tree shaking --> in our whole code we have 100 functions and we are using 4-5 functions , parcel will remove unused code for us (extra random code)
- Different dev and prod bundles  --> production build have more optimiations compared to dev build

# How to create PROD build?
- npx parcel build index.html      (add build to get PROD Build) 
-  //we will get an error because we have main:App.js in package.json but we are specifying index.html in parcel command , so remove main in package.json 
- Where does the build goes? *it will go to the dist folder* 
- dist folder contains -->  npx parcel build index.html genertaes the dev build of project and hosted on port , it put its it in dist folder 
  
  # When we open and see the files in dist folder 
  - index.hmtl , app.js etc.. we will see that code is something not understanbale because parcel compress the code , minify the code and remove all the white spaces , it also change the names of variables to compress the code 
  
  # Why we dont upload node modules or dist or parcel-cache to git?
  - when we hosted our web page on server , server fetch the code from git not from local 
  - All the commands that we run in our local like npx build etc will be run in the server also
  - The server will fetch package.json and install in the server 
  - the copy of node modules in local is different from server nodemodules
  - so it will do npm install on server and get the own node modules and own dist folder 

# Lets make our app compatible for the old browsers !! 🌐🔥 (https://browserslist.dev)  --> we can also give country specific also 

-  in package.json add something called browserslist
-  "browserslist": ["last 100 chrome versions", "last 10 versions of firefox",....]


