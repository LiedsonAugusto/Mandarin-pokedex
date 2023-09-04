import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import stylesCorpo from "../Corpo.module.css"
import styles from "./Direita.module.css"



export default function Direita({fadeOut, fadeIn, swapOut, swapIn}) {

  return (
    <div id="direita" className={styles.resolucao}>
        <Card id={styles.direita} className={`d-flex ${stylesCorpo.esquerdaDireita} 
        ${stylesCorpo.modeloCarta} 
        ${fadeOut ? styles.fadeOut : ''}
        ${fadeIn ? styles.fadeIn : ''}
        ${swapOut ? styles.swapOut : ''}
        ${swapIn ? styles.swapIn : ''}`} 
        style={{width: "20vw", height: "362px", maxWidth: "20rem"}}>
        </Card>
    </div>
  )
}
