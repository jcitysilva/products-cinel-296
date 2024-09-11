import './App.css';
import { useState } from 'react';
import CookieBox from './components/CookieBox';

function App() {
  // Estados para controlar o total de cookies e nuggets
  const [totalCookies, setTotalCookies] = useState(0);
  const [totalNuggets, setTotalNuggets] = useState(0);

  // Função para adicionar cookies no total
  const handleAddCookies = (cookiesToAdd) => {
    setTotalCookies(totalCookies + cookiesToAdd);
  };

  // Função para adicionar nuggets no total
  const handleAddNuggets = (nuggetsToAdd) => {
    setTotalNuggets(totalNuggets + nuggetsToAdd);
  };

  return (
    <div className={"App"}>
      <div style={{ color: "white" }}>
        Total 🍪: {totalCookies}
      </div>
      <div style={{ color: "white" }}>
        Total ⚜️: {totalNuggets}
      </div>

      <div className='game'>
        {/* Passar as funções para cada CookieBox */}
        <CookieBox onAddCookies={handleAddCookies} onAddNuggets={handleAddNuggets} />
        <CookieBox onAddCookies={handleAddCookies} onAddNuggets={handleAddNuggets} />
        <CookieBox onAddCookies={handleAddCookies} onAddNuggets={handleAddNuggets} />
        <CookieBox onAddCookies={handleAddCookies} onAddNuggets={handleAddNuggets} />
        <CookieBox onAddCookies={handleAddCookies} onAddNuggets={handleAddNuggets} />
      </div>
    </div>
  );
}

export default App;