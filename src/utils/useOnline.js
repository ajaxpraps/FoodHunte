import { useEffect, useState } from "react";

const useOnline =()=>{
    const [isOnline,setIsOnline]= useState(true);
   
    useEffect(()=>{
        window.addEventListener("online",()=>{
            setIsOnline(true);
        })
        window.addEventListener("offline",()=>{
            setIsOnline(false);
        })

    //  this event listener will always be on running whether the component is unmounted

      return

    },[])
    

    return isOnline; // return boolean value;
}

export default useOnline;