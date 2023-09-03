import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'
import './App.css'
import Corpo from './Components/Corpo/Corpo'
import Botao from './Components/Botao/Botao'
import { useEffect, useState } from 'react'
import { getPokemons, armazenarNoSessionStorage, getPokemonPorNome } from "./ApiAndStorage/index"

function App() {
  const [id, setId] = useState(16)
  const [nome, setNome] = useState()
  const [tipo, setTipo] = useState()
  const [image, setImage] = useState()
  const [background, setBackground] = useState()

  useEffect(()=>{
    armazenarNoSessionStorage()
  }, [])

  useEffect(()=>{
    getPokemons(id, setNome,setTipo,setImage, setBackground)
  }, [id])

  return (
    <>
      <Corpo
        nome={nome}
        tipo={tipo}
        image={image}
        background={background}
        getPokemonPorNome={getPokemonPorNome}
        setId={setId}
      />
      <Botao
        direcao="esquerda"
        id={id}
        setId={setId}
      />
      <Botao 
        direcao="direita"
        id={id}
        setId={setId}
      />
    </>
  )
}

export default App
