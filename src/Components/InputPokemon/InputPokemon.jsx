import React, { useState } from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap'
import { TbPokeball } from "react-icons/tb";
import { AiOutlineSearch } from "react-icons/ai";
import Alerta from '../Alerta/Alerta';
import styles from "./InputPokemon.module.css"


export default function InputPokemon({getPokemonPorNome, setId}) {

  const [verificar, setVerificar] = useState("none")
  const [nomeInput, setNomeInput] = useState()

  async function trocar (){
    let resultado = await getPokemonPorNome(nomeInput, setId)
    resultado === 1 ? setVerificar("none") : setVerificar("flex")
  }

  return (
    <div className='d-flex justify-content-center align-items-center flex-column'>
      <div className={`d-flex mt-5 ${styles.tamanhoInput}`}>
        <InputGroup>
          <InputGroup.Text className='fs-4'><TbPokeball/></InputGroup.Text>
          <Form.Control
            onChange={(e)=>setNomeInput(e.target.value)}
            placeholder="Nome do pokemon"
          />
          <Button onClick={trocar} variant="outline-primary"><AiOutlineSearch className='fs-4 ' /></Button>
        </InputGroup>
      </div>
      <Alerta
        display={verificar}
      />
    </div>
  )
}
