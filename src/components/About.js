import { Outlet } from "react-router-dom";
import Profile from "./ProfileClass";
import FunctionalProfilComponent from "./Profile";
import React from "react";


class About extends React.Component{
     
    constructor(props){
       super(props);
       console.log("parnt constructor")
    }

    componentDidMount(){
        console.log("parent did mount");
    }
    render(){
        console.log("parent render");
        return (
            <div>
            <h1>this is about section</h1>
            {/* <p>this will show us the about page</p> */}
            {/* <Outlet/> */}
            <Profile name={"ajay Functional"}/>
            {/* <FunctionalProfilComponent name={"ajay class"}/> */}
           </div>
        )
    }
}

export default About;