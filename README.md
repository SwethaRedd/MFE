# MFE

Micro Frontends

Microfrontends Demo application
As a part of this demo we have created four diffrent applications and they are working on diffrent ports as below

components (This is first remote/child application and will run on port 3001)
to-do-list (This is second remote/child application and will run on port 3002)
Vue-app (This is third remote/child application created in vue.js and will run on port 3003).
MFApp (This is micro frontends host application and will run on port 3000).
We are using components from three child remotes applications in host application.

Steps to run
First go to components folder, do npm install and then npm start (App will open in port 3001).
Now go to to-do-list folder in another tab and do npm install and then npm start (App will open in port 3002).
Now go to vue-app folder in another tab and do npm install and then npm start (App will open in port 3003).
Now go to MFApp folder in third tab and do npm install and then npm start (App will open in port 3000).
You will see components from all three child applications are used in host application.

# Routing:

- goto parent app and install: npm react-router-dom
  configure the router.

\*\*\*\* if you don't add the default path or home path, then you will get this error:

Unexpected Application Error!
404 Not Found
💿 Hey developer 👋

You can provide a way better UX than this when your app throws errors by providing your own ErrorBoundary or errorElement prop on your route.

So add default home router path in the router configuration:
{
path: "/",
element: <FoodList />,
},

and when you go to specific path/route (configured in your code, the configured page will be loaded on the path ).

\*\*\*\* You can;t see header and footer in any of the pages, after the basic router configuration.

cosnidering: Header and Footer as common in all the pages.
I'll create a layout component.

and change the router configuration a bit by adding children key inside

and to use the dynamic component inside the specific path we can use Outlet (basically renders the child route's element, if there is one) , a named component from react-router-dom.

import { Outlet } from "react-router-dom";
