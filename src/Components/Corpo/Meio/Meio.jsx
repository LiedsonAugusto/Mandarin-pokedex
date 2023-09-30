import { Card } from 'react-bootstrap'
import stylesCorpo from "../Corpo.module.css"
import styles from "./Meio.module.css"
import { useContext } from 'react';
import { CorpoContext } from '../../../Context/CorpoContext';
import { CorDoMeioContext } from '../../../Context/CorDoMeioContext';
import { MeioAnimationContext } from '../../../Context/MeioAnimationContext';


export default function Meio() {

  console.log("renderizou meio");

  const { nome, 
    setNome, 
    tipo, 
    setTipo, 
    image, 
    setImage, 
    background, 
    setBackground } = useContext(CorpoContext)
  const { corDoMeio, setCorDoMeio } = useContext(CorDoMeioContext)
  const { swapInMeioEsquerda, setSwapInMeioEsquerda ,swapInMeioDireita, setSwapInMeioDireita ,swapOutMeioEsquerda, setSwapOutMeioEsquerda ,swapOutMeioDireita, setSwapOutMeioDireita } = useContext(MeioAnimationContext)

  return (
      <Card  
        className={`d-flex justify-content-center 
        ${stylesCorpo.modeloCarta} 
        ${swapOutMeioEsquerda ? styles.swapOutEsquerda : ''}
        ${swapOutMeioDireita ? styles.swapOutDireita : ''}
        ${swapInMeioEsquerda ? styles.swapInEsquerda : ''}
        ${swapInMeioDireita ? styles.swapInDireita : ''}`} 
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