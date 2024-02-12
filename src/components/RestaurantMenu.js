import { useEffect,useState } from "react";
import {useParams} from "react-router-dom";
import { IMG_CDC_URL } from "../constant";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";

const RestaurantMenu  = ()=>{


    const params = useParams();
    const {id} = params;

  const restaurantData = useRestaurant(id);
  const restaurant = restaurantData[0];
  const items = restaurantData[1];
// early return;
     if(!restaurant){
        return <Shimmer/>
     }
    return (
        <div className="menu-page">
        <div className="details">
        <h1>this is restaurant menu page of id :{id}</h1>
         <h2>{restaurant.name}</h2>
        <img  src={IMG_CDC_URL+restaurant.cloudinaryImageId} alt=""/>
        <h2>{restaurant.locality}</h2>
        </div>
        <div className="menu">
           <h1>Menu</h1>
           <ul className="menu-items">
            {
                items.map((item,index)=>{
                    return (
                              <li key={index}>{item?.card?.info?.name}</li>
                    )
                })
            }
           </ul>
        </div>
        </div>
    );
}

export default RestaurantMenu;