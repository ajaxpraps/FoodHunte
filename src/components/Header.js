import {Link} from "react-router-dom";
 
 const authenticateUser=()=>{
    //  api call to check auth in backend;
    // if we get scucess we will get true otherwise false;
    // example we get true;
    return true;
 }
const Title = ()=> (
    <h1 id="title" key='h2'>
       <img className="h-24 p-2 " src="https://images-platform.99static.com//Ba6VdSQsbU4OpiyQEzLi7yHy9KQ=/440x521:1494x1575/fit-in/500x500/99designs-contests-attachments/127/127439/attachment_127439993" alt="logo" />
    </h1>
);

const HeaderComponent = ()=>{
    return (
        <div className="flex h-24 justify-between bg-pink-300 shadow-lg mb-3">
            <Title/>
            <div className="flex mt-3 font-medium text-xl">
                <ul className="flex">
                  <Link to="/"> <li className = "m-2">Home</li></Link>
                  <Link to="/about"><li className = "m-2">About</li></Link>
                  <Link to="/contact"><li className = "m-2">Contact</li></Link>
                  <Link to="/cart"><li className = "m-2">Cart</li></Link>   
                </ul>
            </div>
            {authenticateUser()?(<button>LogOut</button>):(<button>LogIn</button>)}
        </div>
    );
}

export default HeaderComponent;
// if your you need to export other components of this file then export them using export prefix and access them using {} int remote file