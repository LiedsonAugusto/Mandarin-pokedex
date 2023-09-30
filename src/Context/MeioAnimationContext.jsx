import { createContext, useState } from "react";

export const MeioAnimationContext = createContext()

export const MeioAnimationProvider = ({children}) => {


    const [swapInMeioEsquerda, setSwapInMeioEsquerda] = useState(false)
    const [swapInMeioDireita, setSwapInMeioDireita] = useState(false)
    const [swapOutMeioEsquerda, setSwapOutMeioEsquerda] = useState(false)
    const [swapOutMeioDireita, setSwapOutMeioDireita] = useState(false)

    return (
        <MeioAnimationContext.Provider value={{ swapInMeioEsquerda, setSwapInMeioEsquerda ,swapInMeioDireita, setSwapInMeioDireita ,swapOutMeioEsquerda, setSwapOutMeioEsquerda ,swapOutMeioDireita, setSwapOutMeioDireita}}>
            {children}
        </MeioAnimationContext.Provider>
    )
}