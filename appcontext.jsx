import React, {useEffect, useState, createContext, useContext} from "react";


const AppContext = createContext();

export const useAppContext = ()=>useContext(AppContext);




export const AppProvider = ({children})=>{
            const [user,setUser] = useState(null);
            const [items,setItems] = useState([])
            const [theme,setTheme] = useState("dark")
            const [category,setCategory] = useState("daily")
            const [loaded,setLoaded] = useState(false);


            useEffect(()=>{
                fetch("./data.json")
                .then(res=>res.json())
                .then(res=>{
                    // console.log("res",res)
                    setItems(res.items);
                    setUser(res.user);
                    setTimeout(()=>{setLoaded(true)},2000);
                })
           
            },[])


            const toggleTheme=()=>{
                    setTheme((theme)=>theme = theme === "light" ? "dark" : "light");
            }

            

            const values={
                user,
                items,
                category,
                theme,
                loaded,
                setCategory,
                toggleTheme,
             }


    return (
        <AppContext.Provider value={values}>
            {children}
        </AppContext.Provider>
    )
}