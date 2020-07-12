import React from 'react';
import Head from 'next/head';

export default function Home() {

  return (
    <div className="container">
      <Head>
        <title>Porccionne!</title>
      </Head>

      <main>
        <div className="header">
          <h1>Bem-vindo ao Porccionne!</h1>
          <p>
            Porccione é a sua calculadora de porções online.
          </p>
          <p>
            Aqui você pode planejar aquele seu churrasco do fim de semana ou calcular a receita de bolo para toda a sua família.
          </p>
        </div>
        <div className="form">
          <label>Cole sua receita aqui:</label>
          <br />
          <textarea
            name="textarea"
            id="textarea"
            cols="100"
            rows="20"
          />
          <br />
          <label>Quantas porções essa receita rende:</label>
          <br />
          <input type="number" name="item" id="item" min="1" max="1000" />
          <br />
          <label>Quantas porções você deseja fazer render:</label>
          <br />
          <input type="number" name="item" id="item" min="1" max="1000" />
          <br />
          <button type="submit">Calcular</button>

        </div >
      </main >

      <footer>
        
      </footer>
    </div >
  )
}
