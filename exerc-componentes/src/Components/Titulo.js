import React from 'react'

const Titulo = (props) => {
  const titulo = props.children;
  return <h1 style={{ color: '#4c8b64' }}>{titulo}</h1>
}

export default Titulo
