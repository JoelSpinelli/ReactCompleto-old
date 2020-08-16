import React from 'react'
import useLocalStorage from './useLocalStorage'

const App = () => {
  const [produto, setProduto] = useLocalStorage('produto', '');

  function handleClick({target}) {
    setProduto(target.innerText);
  }
  return (
    <>
      <p>Produto preferido: {produto}</p>
      <button onClick={handleClick}>notebook</button>
      <button onClick={handleClick}>smartphone</button>
    </>
  );
}

export default App
