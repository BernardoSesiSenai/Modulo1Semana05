import React from 'react'
import ImageLogo from 'C:\\Users\\Khomp\\Desktop\\FutDevSesiSenai\\Exercicios_Semana_5\\Semana_5\\semana-5\\src\\Assets\\ReactLogo.png'

function Image() {
  return (
    <div>Imagem:
      <br></br>
        <img src={ImageLogo} alt="Imagem do logo" />
    </div>
  )
}

export default Image