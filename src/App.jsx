import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'
import './App.css'
import Botao from './Components/Botao/Botao'
import Meio from "./Components/Corpo/Meio/Meio"
import Esquerda from "./Components/Corpo/Esquerda/Esquerda"
import Direita from "./Components/Corpo/Direita/Direita"
import { useEffect, useState } from 'react'
import { getPokemons, armazenarNoSessionStorage, getPokemonPorNome } from "./ApiAndStorage/index"
import InputPokemon from './Components/InputPokemon/InputPokemon'

function App() {
  const [id, setId] = useState(16)
  const [nome, setNome] = useState()
  const [tipo, setTipo] = useState()
  const [image, setImage] = useState()
  const [background, setBackground] = useState()

  const [fadeOutDireita, setFadeOutDireita] = useState(false)
  const [fadeInDireita, setFadeInDireita] = useState(false)
  const [fadeOutEsquerda, setFadeOutEsquerda] = useState(false)
  const [fadeInEsquerda, setFadeInEsquerda] = useState(false)
  const [swapOutEsquerda, setSwapOutEsquerda] = useState(false)
  const [swapOutDireita, setSwapOutDireita] = useState(false)
  const [swapInEsquerda, setSwapInEsquerda] = useState(false)
  const [swapInDireita, setSwapInDireita] = useState(false)
  const [swapOutMeioEsquerda, setSwapOutMeioEsquerda] = useState(false)
  const [swapOutMeioDireita, setSwapOutMeioDireita] = useState(false)
  const [swapInMeioEsquerda, setSwapInMeioEsquerda] = useState(false)
  const [swapInMeioDireita, setSwapInMeioDireita] = useState(false)

  const [corDoMeio, setCorDoMeio] = useState("white")


  useEffect(()=>{
    armazenarNoSessionStorage()
  }, [])

  useEffect(()=>{
    getPokemons(id, setNome,setTipo,setImage, setBackground, setCorDoMeio)
  }, [id])

  return (

    
    <div>
      <div className='d-flex justify-content-center align-items-center gap-1'>
        <Esquerda
          fadeOut={fadeOutEsquerda}
          swapIn={swapInEsquerda}
          swapOut={swapOutEsquerda}
          fadeIn={fadeInEsquerda}
        />
        <Meio
          nome={nome}
          tipo={tipo}
          image={image}
          background={background}
          corDoMeio={corDoMeio}
          swapOutEsquerda={swapOutMeioEsquerda}
          swapOutDireita={swapOutMeioDireita}
          swapInEsquerda={swapInMeioEsquerda}
          swapInDireita={swapInMeioDireita}
        />
        <Direita
          fadeOut={fadeOutDireita}
          swapIn={swapInDireita}
          swapOut={swapOutDireita}
          fadeIn={fadeInDireita}
        />
      </div>
      <InputPokemon
          getPokemonPorNome={getPokemonPorNome}
          setId={setId}
        />
      <Botao
        direcao="esquerda"
        id={id}
        setId={setId}
        setFadeOutDireita={setFadeOutDireita}
        setFadeInDireita={setFadeInDireita}
        setFadeOutEsquerda={setFadeOutEsquerda}
        setFadeInEsquerda={setFadeInEsquerda}
        setSwapInEsquerda={setSwapInEsquerda}
        setSwapInDireita={setSwapInDireita}
        setSwapOutEsquerda={setSwapOutEsquerda}
        setSwapOutDireita={setSwapOutDireita}
        setSwapOutMeioEsquerda={setSwapOutMeioEsquerda}
        setSwapOutMeioDireita={setSwapOutMeioDireita}
        setSwapInMeioEsquerda={setSwapInMeioEsquerda}
        setSwapInMeioDireita={setSwapInMeioDireita}
      />
      <Botao 
        direcao="direita"
        id={id}
        setId={setId}
        setFadeOutDireita={setFadeOutDireita}
        setFadeInDireita={setFadeInDireita}
        setFadeOutEsquerda={setFadeOutEsquerda}
        setFadeInEsquerda={setFadeInEsquerda}
        setSwapInEsquerda={setSwapInEsquerda}
        setSwapInDireita={setSwapInDireita}
        setSwapOutEsquerda={setSwapOutEsquerda}
        setSwapOutDireita={setSwapOutDireita}
        setSwapOutMeioEsquerda={setSwapOutMeioEsquerda}
        setSwapOutMeioDireita={setSwapOutMeioDireita}
        setSwapInMeioEsquerda={setSwapInMeioEsquerda}
        setSwapInMeioDireita={setSwapInMeioDireita}
      />
    </div>
  )
}

export default App
