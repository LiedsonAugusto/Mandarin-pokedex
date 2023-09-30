import React, { memo, useContext, useState } from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap'
import { TbPokeball } from "react-icons/tb";
import { AiOutlineSearch } from "react-icons/ai";
import { AlertaMemo } from '../Alerta/Alerta';
import styles from "./InputPokemon.module.css"
import {  getPokemonPorNome  } from "../../ApiAndStorage/index"
import { IdContext } from '../../Context/IdContext';

function InputPokemon() {

  const { id, setId } = useContext(IdContext)

  const [verificar, setVerificar] = useState("none")
  const [nomeInput, setNomeInput] = useState()

  async function trocar (){
    let resultado = await getPokemonPorNome(nomeInput, setId)
    resultado === 1 ? setVerificar("none") : setVerificar("flex")
  }

  console.log("renderizou input")

  return (
    <div className='d-flex justify-content-center align-items-center flex-column'>
      <div className={`d-flex mt-5 ${styles.tamanhoInput}`}>
        <InputGroup>
          <InputGroup.Text className='fs-4'><TbPokeball/></InputGroup.Text>
          <Form.Control
            onChange={(e)=>setNomeInput(e.target.value)}
            placeholder="Nome do pokemon"
          />
          <Button onClick={trocar} variant="outline-danger"><AiOutlineSearch className='fs-4 ' /></Button>
        </InputGroup>
      </div>
      <AlertaMemo
        display={verificar}
      />
    </div>
  )
}

export const InputPokemonMemo = memo(InputPokemon)
