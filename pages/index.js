import React from 'react';
import Head from 'next/head';

export default function Home() {

  return (
    <div className="wrapper">
      <div className="container">
        <Head>
          <title>Porccionnne!</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta name="keywords" content="porccionne, calculadora, receitas, porções" />
          <meta
            name="description"
            content="Porccione é a sua calculadora de porções de receitas. 
            Aqui você pode planejar aquele seu churrasco do fim de semana 
            ou calcular a receita de bolo para toda a sua família."
          />
          <meta name="robots" content="index, follow" />
          <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet"></link>
        </Head>
        <header className="header">
          <img className="logo" src={require('../img/logo.svg')} alt="Porccionne Logo" />
          <h1 className="subtitulo">Produza suas receitas conosco</h1>
        </header>
        <main>
          <div className="inicial">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque dui vitae amet tortor. Imperdiet auctor faucibus aliquam etiam eu in tellus sit id. Curabitur donec varius dolor fringilla morbi nisl. Quis pretium, pretium turpis lorem pretium fringilla massa. Sapien vel proin enim, adipiscing amet. Dignissim et risus amet, nisl, tortor quis ipsum est. Dui convallis eget nibh ac.
              Curabitur donec varius dolor fringilla morbi nisl. Quis pretium, pretium turpis lorem pretium fringilla massa. Sapien vel proin enim, adipiscing amet.
            </p>
            <div className="textarea-input">
              <textarea 
                placeholder="Cole sua receita aqui"
                name="textarea" 
                id="textarea" 
                cols="30" 
                rows="10"
                autoFocus
                required
              />
              <button className="continuar">Continuar</button>
            </div>
          </div>
        </main>
      </div >
      <footer className="footer">
        <p>Copyrigth © 2020 - Porccionne</p>
      </footer>
    </div>
  )
}
