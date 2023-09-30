import { createContext, useState } from "react";

export const LeftAnimationContext = createContext()

export const LeftAnimationProvider = ({children}) => {


    const [fadeOutEsquerda, setFadeOutEsquerda] = useState(false)
    const [fadeInEsquerda, setFadeInEsquerda] = useState(false)
    const [swapOutEsquerda, setSwapOutEsquerda] = useState(false)
    const [swapInEsquerda, setSwapInEsquerda] = useState(false)

    return (
        <LeftAnimationContext.Provider value={{ fadeOutEsquerda, setFadeOutEsquerda ,fadeInEsquerda, setFadeInEsquerda ,swapOutEsquerda, setSwapOutEsquerda ,swapInEsquerda, setSwapInEsquerda}}>
            {children}
        </LeftAnimationContext.Provider>
    )
}