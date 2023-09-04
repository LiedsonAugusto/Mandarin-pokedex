import React from 'react'
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import styles from "./Botao.module.css"

export default function Botao({direcao, id, setId, setFadeOutDireita, setFadeInDireita, setFadeOutEsquerda, setFadeInEsquerda ,setSwapInEsquerda, setSwapInDireita, setSwapOutEsquerda, setSwapOutDireita, setSwapOutMeioEsquerda, setSwapOutMeioDireita, setSwapInMeioEsquerda, setSwapInMeioDireita}) {

    const botaoDireito = () =>{
        id < 30 ? setId((prevId) => prevId + 1) : setId(16)
        setFadeOutDireita(true)
        setSwapOutEsquerda(true)
        setSwapOutMeioDireita(true)
        setTimeout(() => {
            setFadeOutDireita(false)
            setSwapOutEsquerda(false)
            setSwapInDireita(true)
            setFadeInEsquerda(true)
            setSwapOutMeioDireita(false)
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
            setSwapInEsquerda(true)
            setFadeInDireita(true)
            setSwapOutMeioEsquerda(false)
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
                <button onClick={botaoEsquerdo} className={`fs-2 ${styles.btnComum}`} id={styles.btnEsquerdo} ><AiOutlineArrowLeft/></button>{' '}
            </div>
        )}
        {direcao == "direita" && (
            <div>
                <button onClick={botaoDireito} className={`fs-2 ${styles.btnComum}`} id={styles.btnDireito}><AiOutlineArrowRight /></button>{' '}
            </div>
        )}
    </>
    
  )
}
