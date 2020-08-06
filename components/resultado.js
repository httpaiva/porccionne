import React from 'react';

export default function Resultado(props) {
    return (
        <div className="resultado-container" style={{whiteSpace: "pre-wrap"}}>
            <h1>Sua receita porccionnada!</h1>
            <div className="resultado">
                <p>{props.text}</p>
            </div>
        </div>
    );
}