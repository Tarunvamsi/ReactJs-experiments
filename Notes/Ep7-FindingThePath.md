# Finding the Path

Routing between different web pages

# How to create routes?

- We need to create a routing configuration
- import { createBrowserRouter, RouterProvider } from "react-router-dom";

- Configuration means Informationn that will tell the browser router that will what should happen on specific path
-       - const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <AppLayout></AppLayout>,
            errorElement: <Error></Error>,
        },
        {
            path: "/about",
            element: <About></About>,
        },
        ]);
- It will take list of paths
- Create Configuration , and provide this configuration to render it (import RouterProvider )
- Providing --> root.render()

- import { useRouteError } from "react-router-dom";
- To handle the error efficiently and customized error page
- -An < Outlet> should be used in parent route elements to render their child route elements. This allows nested UI to show up when child routes are rendered. If the parent route matched exactly, it will render a child index route or nothing if there is no index route.

- - Never Use anchor tag in react to navgiate through pages , beacuase anchor tag will rerender the whole page again when navigated

- Instead use _Link_ from React router Dom -> it works same as anchor tag , Link will not make rerender the whole page, it will just replace the content

- Two types of routinf in Web Applications

  - Client Side Routing -> It will load all the components when we be loaded for the 1st time , and it will replace that component , it wont send any network call , (only network call is calling API)

  - Server Side Routing -> we have differnet files for each page , when we click anchor tag will send a request and gets the data and renders the UI and refresh the whole page

- _Single page application_ --> means client side routing , just replacing the components ,not making any network calls

# Dynamic Routing
