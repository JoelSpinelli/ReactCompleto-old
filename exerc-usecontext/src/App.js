import React from 'react';
import Produto from './Produto';
import { GlobalStorage } from './GlobalContext';
import Limpar from './Limpar';

function App() {
  return (
    <div>
      <GlobalStorage>
        <Produto />
        <Limpar />
      </GlobalStorage>
    </div>
  );
}

export default App;
