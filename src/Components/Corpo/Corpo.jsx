import React from 'react'
import CardPokemon from './CardPokemon/CardPokemon'
import InputPokemon from './InputPokemon/InputPokemon'
import styles from "./Corpo.module.css"



export default function Corpo({nome, tipo, image, background, getPokemonPorNome, setId}) {
  return (
    <div id={styles.corpo}>
        <CardPokemon
         nome={nome}
         tipo={tipo}
         image={image}
         background={background}
        />
        <InputPokemon
          getPokemonPorNome={getPokemonPorNome}
          setId={setId}
        />
    </div>
  )
}
