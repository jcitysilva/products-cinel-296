import React, { useState } from 'react';

function CookieBox() {
    const [cookies, setCookies] = useState(0);
    const [nuggets, setNuggets] = useState(0);
    const [lucky, setLucky] = useState(false); // Novo estado para "lucky"

    const handleClick = () => {
        // Probabilidade de estourar cookies e nuggets: 1 em 30 cliques
        if (Math.random() < 1 / 30) {
            setCookies(0);
            setNuggets(0);
            setLucky(false); // Resetar o estado de lucky
            alert('Oh no! Your cookies and nuggets are reset to zero.');
            return; // Sai da função para não adicionar cookies nesse clique
        }

        // Probabilidade de ganhar o estado "lucky": 1 em 20 cliques
        if (!lucky && Math.random() < 1 / 20) {
            setLucky(true);
            alert('You are now lucky! Double cookies for each click!');
        }

        // Se estiver no estado "lucky", adiciona 2 cookies por clique
        setCookies(cookies + (lucky ? 2 : 1));

        // Probabilidade de adicionar pepitas/nuggets (20%)
        if (Math.random() < 0.2) {
            setNuggets(nuggets + 1);
        }
    };

    // Cor de fundo alterada se estiver no estado "lucky"
    let backgroundColor = lucky ? "#fcba03" : "gray";

    return (
        <button onClick={handleClick} style={{ backgroundColor }}>
            <div>Cookies: {cookies}</div>
            {nuggets > 0 && <div className='nuggets'>{nuggets} {nuggets === 1 ? "nugget" : "nuggets"}!</div>}
        </button>
    );
}

export default CookieBox;
