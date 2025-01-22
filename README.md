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
