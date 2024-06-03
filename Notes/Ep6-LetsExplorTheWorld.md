## EP6 : Lets explore the world

# MonoLith Architecture 
    - Traditoanlly when web apps are developed , they all developed using monolith arch
    - Suppose we have huge big Projec
      - We have everything in the same project (API Code , Ui code , Auth code, DB code, Notifications code)
      - If we want to change anything in the proejct for even small modifications like button color , we need to recompile the project , and redeploy the project , very big task
      - Only one stack should be used for whole project

# MicroService Architecture 
    - We will have Different services for Different Jobs 
    -  Backend Service 
    -  Ui service
    -  Auth service
    -  DB service
    -  Notification servicr etc.. 
       - All these services combined together will become a big application
    - For each and every thing we will have differnet projects --> This is known as seperation of concerns 
    -  Follows the simgle responsibility principle( every sevice have their own job)
    -  We can have different tech stacks for each service(Advantage)
-  
# How do these services interact each other 
    - Ui needs to contact Backend and Backend to DB and Back end to Auth
    - All the services Run on their Own sepcific Ports
      - And all the ports(1234,5500,1000 etc..) are mapped to domain name (/,/api,/sms)
  
# Load data Dynamically from API ..;
 
# Approach 1
    - As soon as our page load we can make an api call and wait for data to come adn then we render the UI 
    - Supose api call takes 500ms , our page will wait for 500ms and then render the UI 
    - Page load --> API call --> Render the data

# Approach2 
    - As soon as our page loads , we will render the page and we will do an API call and then we will Re render again
    - Load page --> Render --> API call --> Re-render

- In react we will always use Approach 2 it is better
- It will give better UX (user experinece)
- In approach 1 till 500ms (till api call time) we will see blank page which is bad UX
- In approach 2 we will get rendered something amd after api call we will load data, which a good UX
- No matter how many times we render , Approach 2 is better ( React have faster render cycle)