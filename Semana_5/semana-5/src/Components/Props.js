import React from 'react'

function Props(props) {
  return (
    <div>Exemplo utilizando Props:
        <h1>{props.nome}</h1>
        <h2>{props.sobrenome}</h2>
    </div>
  )
}

export default Props