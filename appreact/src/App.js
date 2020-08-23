import React from 'react'

const App = () => {
  const [produto, setProduto] = React.useState('');
  const [cor, setCor] = React.useState('');

  function handleChange({target}) {
    setProduto(target.value);
  }

  return(
    <form>
      <h2>Cor</h2>
      <label>
        <input
          type="radio"
          onChange={({target}) => setCor(target.value)}
          checked={cor ==='azul'}
          value="azul"
        />
        azul
      </label>
      <label>
        <input
          type="radio"
          onChange={({ target }) => setCor(target.value)}
          checked={cor === 'vermelho'}
          value="vermelho"
        />
        Vermelho
      </label>

      <h2>Produtos</h2>
      <label>
        <input
          type="radio"
          onChange={handleChange}
          name="produto"
          value="smartphone"
        />
        Smartphone
      </label>
      <label>
        <input
          type="radio"
          onChange={handleChange}
          name="produto"
          value="notebook"
        />
        Notebook
      </label>
    </form>
  )
}

export default App

