import React from 'react'
import { Card } from 'react-bootstrap'

export default function CardPokemon({nome, tipo, image, background}) {
  return (
    <Card >
      <h2 className='text-center p-2 mt-2'>{nome}</h2>
      <div className='p-5 d-flex justify-content-center align-items-center' style={{backgroundImage: `url(${background})`, backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
        <img height={"130px"} src={`${image}`} alt="..." />
      </div>
      <Card.Body className='text-center'>
        <h5>Type: {tipo}</h5>
      </Card.Body>
    </Card>
  )
}
