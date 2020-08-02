import React from 'react';
import Home from './Components/Home'
import Produtos from './Components/Produtos'
import Header from './Components/Header'

// Replique a interface como a apresentada na aula
// Utilize a array abaixo para mostrar os produtos
// Quebre em componentes o que precisar ser reutilizado
// Dica: const { pathname } = window.location; (puxa o caminho do URL)

const {pathname} = window.location;

function App() {
  let Component;
  Component = pathname === '/produtos' ? Produtos : Home;

  return (
    <>
      <Header />
      <Component />
    </>
  );
}

export default App;
