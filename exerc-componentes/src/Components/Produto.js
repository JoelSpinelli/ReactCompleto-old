import React from 'react'

const Produto = (props) => {
  const {nome, propriedades} = props.data;
  return (
    <section style={{ border: '1px solid black', padding: '15px', marginBottom: "15px" }}>
      <p>{nome}</p>
      <ul>
        {propriedades.map((propriedade) => (
          <li key={propriedade}>{propriedade}</li>
        ))}
      </ul>
    </section>
  );
}

export default Produto
