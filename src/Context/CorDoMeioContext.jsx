import { createContext, useState } from "react";

export const CorDoMeioContext = createContext()

export const CorDoMeioProvider = ({children}) => {

    const [corDoMeio, setCorDoMeio] = useState("white")

    return (
        <CorDoMeioContext.Provider value={{corDoMeio, setCorDoMeio}}>
            {children}
        </CorDoMeioContext.Provider>
    )
}