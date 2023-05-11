import { useEffect, useState } from "react"

const useStatus = ()=>{

    const [userOnline , setUserOnline ] = useState(true)

    useEffect( ()=>{
        function OnlineHandler(){
            setUserOnline(true);
                };
                function OfflineHandler(){
            setUserOnline(false);
                };
            
                window.addEventListener("online", ()=>OnlineHandler)
                window.addEventListener("offline",()=>OfflineHandler)

                return()=>{
                    window.removeEventListener("online", ()=>OnlineHandler)
                    window.removeEventListener("offline",()=>OfflineHandler)
                }
    },[])  ;
          return userOnline

}

export default useStatus