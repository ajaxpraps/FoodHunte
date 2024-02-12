import { useEffect, useState } from "react";
const Profile = (props)=>{

     const [count,setCount] = useState(0);
     useEffect(()=>{
        // api calls will be here
     });
    return (
        <div className="profile">
            <h1>Functional component</h1>
            <h2>{props.name}</h2>
            <h3>count : {count}</h3>
            <button onClick={()=>setCount(1)}>function</button>
        </div>
    )
}

export default Profile;