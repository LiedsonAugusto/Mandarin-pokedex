import { Card } from 'react-bootstrap'
import stylesCorpo from "../Corpo.module.css"
import styles from "./Esquerda.module.css"
import { useContext } from 'react';
import { LeftAnimationContext } from '../../../Context/LeftAnimationContext';


export default function Esquerda() {

  const { fadeOutEsquerda, setFadeOutEsquerda ,fadeInEsquerda, setFadeInEsquerda ,swapOutEsquerda, setSwapOutEsquerda ,swapInEsquerda, setSwapInEsquerda } = useContext(LeftAnimationContext)

  console.log("renderizou esquerda");

  return (
    <div id='esquerda' className={styles.resolucao}>
        <Card 
          id={styles.esquerda} 
          className={`d-flex 
          ${stylesCorpo.esquerdaDireita} 
          ${stylesCorpo.modeloCarta}
          ${swapInEsquerda ? styles.swapIn : ''} 
          ${fadeOutEsquerda ? styles.fadeOut : ''}
          ${swapOutEsquerda ? styles.swapOut : ''}
          ${fadeInEsquerda ? styles.fadeIn : ''}`} 
          style={{width: "20vw", height: "362px", maxWidth: "20rem"}}>
        </Card>
    </div>
  )
}
