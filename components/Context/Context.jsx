import { createContext, useState } from "react";


const Context = createContext()
function Provider({children}){
    const wind = window.localStorage.getItem('key')
    const [order, setOrder] = useState(wind !== 'true' ? false : true)
    
    return (
        <Context.Provider value={{order, setOrder}}>
            {children}
        </Context.Provider>
    )
}
export {Context, Provider}