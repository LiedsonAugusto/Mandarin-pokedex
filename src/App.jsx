import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'
import './App.css'
import { BotaoMemo } from './Components/Botao/Botao'
import Meio from "./Components/Corpo/Meio/Meio"
import Esquerda from "./Components/Corpo/Esquerda/Esquerda"
import Direita from "./Components/Corpo/Direita/Direita"
import { useContext, useEffect} from 'react'
import { getPokemons, armazenarNoSessionStorage } from "./ApiAndStorage/index"
import { InputPokemonMemo } from './Components/InputPokemon/InputPokemon'
import { CorpoContext} from './Context/CorpoContext'
import { IdContext } from './Context/IdContext'
import { CorDoMeioContext } from './Context/CorDoMeioContext'

function App() {

  const { id, setId } = useContext(IdContext)
  const { nome, 
    setNome, 
    tipo, 
    setTipo, 
    image, 
    setImage, 
    background, 
    setBackground } = useContext(CorpoContext)
  const { corDoMeio, setCorDoMeio } = useContext(CorDoMeioContext)

  console.log("renderizou o app");


  useEffect(()=>{
    armazenarNoSessionStorage()
  }, [])

  useEffect(()=>{
    getPokemons(id, setNome,setTipo,setImage, setBackground, setCorDoMeio)
  }, [id])

  return (

    
    <div>
      <div className='d-flex justify-content-center align-items-center gap-1'>
        <Esquerda/>
        <Meio/>
        <Direita/>
      </div>
      <InputPokemonMemo/>
      <BotaoMemo
        direcao="esquerda"
      />
      <BotaoMemo
        direcao="direita"
      />
    </div>
  )
}

export default App
