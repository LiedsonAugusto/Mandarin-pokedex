import React from 'react'
import { Card } from 'react-bootstrap'
import stylesCorpo from "../Corpo.module.css"
import styles from "./Esquerda.module.css"


export default function Esquerda({fadeOut, swapIn, swapOut, fadeIn}) {

  return (
    <div id='esquerda' className={styles.resolucao}>
        <Card id={styles.esquerda} className={`d-flex ${stylesCorpo.esquerdaDireita} 
        ${stylesCorpo.modeloCarta}
        ${swapIn ? styles.swapIn : ''} 
        ${fadeOut ? styles.fadeOut : ''}
        ${swapOut ? styles.swapOut : ''}
        ${fadeIn ? styles.fadeIn : ''}`} 
        style={{width: "20vw", height: "362px", maxWidth: "20rem"}}>
        </Card>
    </div>
  )
}
