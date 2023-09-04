import { Card } from 'react-bootstrap'
import stylesCorpo from "../Corpo.module.css"
import styles from "./Meio.module.css"

export default function Meio({nome, tipo, image, background, corDoMeio ,swapOutEsquerda, swapOutDireita, swapInEsquerda, swapInDireita}) {

  return (
      <Card  
        className={`d-flex justify-content-center 
        ${stylesCorpo.modeloCarta} 
        ${swapOutEsquerda ? styles.swapOutEsquerda : ''}
        ${swapOutDireita ? styles.swapOutDireita : ''}
        ${swapInEsquerda ? styles.swapInEsquerda : ''}
        ${swapInDireita ? styles.swapInDireita : ''}`} 
        style={{width: "25vw", height: "28rem", maxWidth: "30rem", minWidth: "15rem", backgroundColor: `${corDoMeio}`}}>
        <div>
          <h2 className='text-center p-2 mt-3'>{nome}</h2>
          <div className={`p-5 d-flex justify-content-center align-items-center ${styles.sombreado}`} style={{backgroundImage: `url(${background})`, backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
            <img height={"150px"} src={`${image}`} alt="..." />
          </div>
          <Card.Body className='text-center mt-3'>
            <h5>Type: {tipo}</h5>
          </Card.Body>
        </div>
      </Card>
  )
}