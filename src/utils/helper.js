export const filterData =(searchText,allRestaurants)=>{
    const data = allRestaurants.filter((restaurant)=>{
         return restaurant?.info?.name?.toLowerCase()?.includes(searchText?.toLowerCase());
    })
   return data;
}