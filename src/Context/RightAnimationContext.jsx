import { createContext, useState } from "react";

export const RightAnimationContext = createContext()

export const RightAnimationProvider = ({children}) => {


    const [fadeOutDireita, setFadeOutDireita] = useState(false)
    const [fadeInDireita, setFadeInDireita] = useState(false)
    const [swapOutDireita, setSwapOutDireita] = useState(false)
    const [swapInDireita, setSwapInDireita] = useState(false)

    return (
        <RightAnimationContext.Provider value={{ fadeOutDireita, setFadeOutDireita ,fadeInDireita, setFadeInDireita ,swapOutDireita, setSwapOutDireita ,swapInDireita, setSwapInDireita}}>
            {children}
        </RightAnimationContext.Provider>
    )
}