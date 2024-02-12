import React from "react";

class ProfileClass extends React.Component{
    constructor(props){
        super(props);
        console.log("child constructor")
        this.state = {
           userInfo: "",
        };
    } 
    async componentDidMount(){
        // this code will run after mount
        // so there will api calls
        const res = await fetch("https://api.github.com/users");
        const users = await res.json();
        this.setState({
            userInfo:users[0],
        })
        console.log(users);
    }

    render(){
        console.log("child render")
        return <div>
            <h1>this is class component</h1>
            <h2>{this.state.userInfo.login}</h2>
            <h2>{this.state.userInfo.id}</h2>
        </div>
    }
}

export default ProfileClass; 