import React, { useState } from 'react';

function CookieBox({ onAddCookies, onAddNuggets }) {
  const [cookies, setCookies] = useState(0);
  const [nuggets, setNuggets] = useState(0);
  const [lucky, setLucky] = useState(false);

  const handleClick = () => {
    // Probabilidade de estourar cookies e nuggets: 1 em 30 cliques
    if (Math.random() < 1 / 30) {
      onAddCookies(-cookies); // Remove os cookies deste CookieBox
      onAddNuggets(-nuggets); // Remove os nuggets deste CookieBox
      setCookies(0);
      setNuggets(0);
      setLucky(false);
      alert('Oh no! Your cookies and nuggets are reset to zero.');
      return;
    }

    // Probabilidade de ganhar o estado "lucky": 1 em 20 cliques
    if (!lucky && Math.random() < 1 / 20) {
      setLucky(true);
      alert('You are now lucky! Double cookies for each click!');
    }

    const cookiesToAdd = lucky ? 2 : 1;
    setCookies(cookies + cookiesToAdd);
    onAddCookies(cookiesToAdd); // Adiciona cookies ao total global

    // Probabilidade de adicionar nuggets (20%)
    if (Math.random() < 0.2) {
      setNuggets(nuggets + 1);
      onAddNuggets(1); // Adiciona nuggets ao total global
    }
  };

  const backgroundColor = lucky ? "#fcba03" : "gray";

  return (
    <button onClick={handleClick} style={{ backgroundColor }}>
      <div>Cookies: {cookies}</div>
      {nuggets > 0 && <div className='nuggets'>{nuggets} {nuggets === 1 ? "nugget" : "nuggets"}!</div>}
    </button>
  );
}

export default CookieBox;