import React from "react";
import ReactDOM  from "react-dom/client";
import { createBrowserRouter,Router,RouterProvider,Outlet} from "react-router-dom";
//  this is default import;

//  this is named import; {with curly braces}
import HeaderComponent from "./components/Header";
// this is default import;
import Footer from "./components/Footer";
import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";


// const heading  = React.createElement('h1',{
//     id:"title"
// },"what are you doing bro ?");
// console.log(heading);
//  this heading element is object return by React on passing three perameters .
// the curly brackets are props we pass in h1

// const heading1 = React.createElement('h1',{},"heading1");
// console.log(heading1);
// const heading2 = React.createElement('h2',{},"heading2");
// const container = React.createElement('div',{id:"container"},[heading1,headingimport Title  from "./components/Header";2]);
// we can pass anything in props (attribute)


const AppLayout = ()=>{
    return (
      <>
      <HeaderComponent/>
      {
      // here we can show the component dynamically
      } 
      <Outlet/>   
      <Footer/>
      </>
);
}

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    errorElement:<Error/>,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/about",
        element:<About/>,
        children:[
          {
            path:"profile",
            element:<Profile/>
          }
        ]
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/cart",
        element:<Cart/>
      },
      {
        path: "/restaurants/:id",
        element : <RestaurantMenu/>
      }
    ]
  },
]);

// why we have to start component name with capital letter

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>);
