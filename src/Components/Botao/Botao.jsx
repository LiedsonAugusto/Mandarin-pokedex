import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import styles from "./Botao.module.css"
import { memo, useContext } from "react";
import { MeioAnimationContext } from "../../Context/MeioAnimationContext";
import { RightAnimationContext } from "../../Context/RightAnimationContext";
import { LeftAnimationContext } from "../../Context/LeftAnimationContext";
import { IdContext } from "../../Context/IdContext";

function Botao({direcao}) {

    const { id, setId } = useContext(IdContext)
    const { fadeOutEsquerda, setFadeOutEsquerda ,fadeInEsquerda, setFadeInEsquerda ,swapOutEsquerda, setSwapOutEsquerda ,swapInEsquerda, setSwapInEsquerda } = useContext(LeftAnimationContext)
    const { fadeOutDireita, setFadeOutDireita ,fadeInDireita, setFadeInDireita ,swapOutDireita, setSwapOutDireita ,swapInDireita, setSwapInDireita } = useContext(RightAnimationContext)
    const { swapInMeioEsquerda, setSwapInMeioEsquerda ,swapInMeioDireita, setSwapInMeioDireita ,swapOutMeioEsquerda, setSwapOutMeioEsquerda ,swapOutMeioDireita, setSwapOutMeioDireita } = useContext(MeioAnimationContext)

    console.log("renderizou botao");

    const botaoDireito = () =>{
        id < 30 ? setId((prevId) => prevId + 1) : setId(16)
        setFadeOutDireita(true)
        setSwapOutEsquerda(true)
        setSwapOutMeioDireita(true)
        setTimeout(() => {
            setFadeOutDireita(false)
            setSwapOutEsquerda(false)
            setSwapOutMeioDireita(false)
            setSwapInDireita(true)
            setFadeInEsquerda(true)
            setSwapInMeioEsquerda(true)
            setTimeout(() => {
                setSwapInDireita(false)
                setFadeInEsquerda(false)
                setSwapInMeioEsquerda(false)
            }, 500);
        }, 500);
    }

    const botaoEsquerdo = () =>{
        id > 16 ? setId((prevId) => prevId - 1) : setId(30)
        setFadeOutEsquerda(true)
        setSwapOutDireita(true)
        setSwapOutMeioEsquerda(true)
        setTimeout(() => {
            setFadeOutEsquerda(false)
            setSwapOutDireita(false)
            setSwapOutMeioEsquerda(false)
            setSwapInEsquerda(true)
            setFadeInDireita(true)
            setSwapInMeioDireita(true)
            setTimeout(() => {
                setSwapInEsquerda(false)
                setFadeInDireita(false)
                setSwapInMeioDireita(false)
            }, 500);
        }, 500);
    }

  return (
    <>
        {direcao == "esquerda" && (
            <div>
                <button onClick={botaoEsquerdo} className={`fs-2 ${styles.btnComum}`} id={styles.btnEsquerdo} ><AiOutlineArrowLeft/></button>
            </div>
        )}
        {direcao == "direita" && (
            <div>
                <button onClick={botaoDireito} className={`fs-2 ${styles.btnComum}`} id={styles.btnDireito}><AiOutlineArrowRight /></button>
            </div>
        )}
    </>
    
  )
}

export const BotaoMemo = memo(Botao)
