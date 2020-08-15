import React from 'react'
import {GlobalContext} from './GlobalContext';

const Produto = () => {
  const global = React.useContext(GlobalContext);

  return (
    <div>
      <p>Produto: {global.contar}</p>
      <button onClick={() => global.adicionarDois()}>Adicionar</button>
    </div>
  );
}

export default Produto
