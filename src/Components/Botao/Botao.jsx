import React from 'react'
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import styles from "./Botao.module.css"

export default function Botao({direcao, id, setId}) {

    const botaoDireito = () =>{
        id < 30 ? setId((prevId) => prevId + 1) : setId(16)
    }

    const botaoEsquerdo = () =>{
        id > 16 ? setId((prevId) => prevId - 1) : setId(30)
    }

  return (
    <>
        {direcao == "esquerda" && (
            <div>
                <button onClick={botaoEsquerdo} id={styles.btnEsquerdo} ><AiOutlineArrowLeft className="fs-2" /></button>{' '}
            </div>
        )}
        {direcao == "direita" && (
            <div>
                <button onClick={botaoDireito} id={styles.btnDireito}><AiOutlineArrowRight className="fs-2" /></button>{' '}
            </div>
        )}
    </>
    
  )
}
