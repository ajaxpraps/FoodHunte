import { useState,useEffect } from "react";


const useRestaurant =(resId)=>{

    const [restaurant,SetRestaurant] = useState(null); 
    const [items,setItems] = useState([]);

    const getRestaurantInfo =async()=>{
        const res = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.461996&lng=80.227601&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`);
        const data = await res.json();
        // console.log(data);
        // console.log(data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards)
        console.log(data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards)
        SetRestaurant(data?.data?.cards[0]?.card?.card?.info);
        setItems(data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards)
    }
    
    useEffect(()=>{
        getRestaurantInfo();
    },[])

    return [restaurant,items];

}

export default useRestaurant;