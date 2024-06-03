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
