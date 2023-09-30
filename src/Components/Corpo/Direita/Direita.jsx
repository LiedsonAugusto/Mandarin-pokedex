import { Card } from 'react-bootstrap'
import stylesCorpo from "../Corpo.module.css"
import styles from "./Direita.module.css"
import { useContext } from 'react';
import { RightAnimationContext } from '../../../Context/RightAnimationContext';

export default function Direita() {

  const { fadeOutDireita, setFadeOutDireita ,fadeInDireita, setFadeInDireita ,swapOutDireita, setSwapOutDireita ,swapInDireita, setSwapInDireita } = useContext(RightAnimationContext)

  console.log("renderizou direita");

  return (
    <div id="direita" className={styles.resolucao}>
        <Card 
          id={styles.direita} 
          className={`d-flex 
          ${stylesCorpo.esquerdaDireita} 
          ${stylesCorpo.modeloCarta} 
          ${fadeOutDireita ? styles.fadeOut : ''}
          ${fadeInDireita ? styles.fadeIn : ''}
          ${swapOutDireita ? styles.swapOut : ''}
          ${swapInDireita ? styles.swapIn : ''}`} 
          style={{width: "20vw", height: "362px", maxWidth: "20rem"}}>
        </Card>
    </div>
  )
}
