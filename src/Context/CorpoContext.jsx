import { createContext, useState } from "react";

export const CorpoContext = createContext()

export const CorpoProvider = ({children}) => {

    const [nome, setNome] = useState()
    const [tipo, setTipo] = useState()
    const [image, setImage] = useState()
    const [background, setBackground] = useState()

    return (
        <CorpoContext.Provider value={{nome, 
                                        setNome, 
                                        tipo, 
                                        setTipo, 
                                        image, 
                                        setImage, 
                                        background, 
                                        setBackground}}>
            {children}
        </CorpoContext.Provider>
    )
}