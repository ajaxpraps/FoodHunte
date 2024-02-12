import { useState,useEffect } from "react";
import { IMG_CDC_URL , restaurantList } from "../constant";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";



const RestrauntCard = (props)=>{
    // console.log(props); 
    return (
       <div className="m-2 h-96 w-56  p-1.5 bg-fuchsia-300 shadow-lg">
        <img className="h-3/5 w-full mb-3" src={IMG_CDC_URL+props.data.cloudinaryImageId} alt="" />
        <h2 className="font-bold mb-1 text-xl">{props.data.name}</h2>
        <h3>{props.data.areaName}</h3>
        <h4>{props.data.avgRating}</h4>
       </div>
    );
}

const Body = ()=>{

    const [searchText,setSearchText] = useState("");
    const [restaurents,setRestaurents]=useState([]);
    const [allRestaurants,setAllRestaurants] = useState([]);
    


    const getRestaurants = async()=>{
        try{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.461996&lng=80.227601&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();    
        // const bigData = json.data.cards[5].card.card.gridElements.infoWithStyle.restaurants; it is badway of doing use optional chaining;
        const bigData = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        // this path is keep cahanging
        console.log(bigData);
        setRestaurents(bigData);
        setAllRestaurants(bigData);
        }catch(err){
              console.log(err);
        }
    }

    useEffect(()=>{
        console.log("useEffect");
        getRestaurants();
    },[]);
  
        // useONline
        const online = useOnline();

        if(!online){
            return <>you are offline bro</>;
        }

  

    // if(allRestaurants.length>0 && restaurents?.length==0){
    //     return <h1>restaurants not found</h1>
    // }

    return (allRestaurants.length==0)?(<Shimmer/>):(
        <>
        <div className="bg-pink-300 p-3 my-2">
            <input 
            type="text" 
            className="p-2 text-l" 
            placeholder="search" 
            value={searchText}
            onChange={(e)=>setSearchText(e.target.value)}
            />
            <button className="text-xl mx-3 bg-purple-700 p-2 rounded-lg text-white" onClick={()=>(setRestaurents(filterData(searchText,allRestaurants)))}>search</button>
        </div>
        { (allRestaurants.length>0 && restaurents.length>0)?(
                   <div className="flex flex-wrap">
                   {
                     restaurents.map((restaurant)=>{
                       return(
                          <Link to={"/restaurants/"+restaurant.info.id} key={restaurant.info.id}>
                             <RestrauntCard className="" data ={restaurant.info} />
                          </Link>
                          
                       );
                     })
                   }
                  </div>
        ):(<h1>restaurants Not found...</h1>)}
   
        </>
    );
}

export default Body;