import React, {useState} from 'react';
import Head from 'next/head';

// Components:
import ResultadoBox from '../components/resultado';
//Functions:
import splitText from '../utils/SplitText';
import calculo from '../utils/Calculo';
import montaReceita from '../utils/MontaReceita';

export default function Home() {

  const [receita, setReceita] = useState('');
  const [rende, setRende] = useState(0);
  const [vaiRender, setVaiRender] = useState(0);
  const [resultado, setResultado] = useState('');

  function handleFormReceita(e) {
    e.preventDefault();

    const receitaSeparada = splitText(receita);
    const receitaCalculada = calculo(receitaSeparada, rende, vaiRender);
    const texto = montaReceita(receitaCalculada);
    setResultado(<ResultadoBox text={texto} />);
  }

  return (
    <div className="wrapper">
      <div className="container">
        <Head>
          <title>Porccionnne! Calculadora de receitas.</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta name="keywords" content="porccionne, calculadora, receitas, porções" />
          <meta
            name="description"
            content="Porccione é a sua calculadora de porções de receitas. 
            Aqui você pode planejar aquele seu churrasco do fim de semana 
            ou calcular a receita de bolo para toda a sua família."
          />
          <meta name="robots" content="index, follow" />
          <meta name="google-site-verification" content="So7SQcaOQN7J0n4OJtIkzjYq09TJqFj40y-MUhIoXpQ" />
          <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet"></link>
        </Head>
        <header className="header">
          <img className="logo" src={require('../img/logo.svg')} alt="Porccionne Logo" />
          <h1 className="subtitulo">Calcule e produza suas receitas</h1>
        </header>
        <main>
          <form id="form1" onSubmit={handleFormReceita} >
            <div className="formulario1">
              <p>
                Quer adaptar aquela receita deliciosa para servir vários amigos ou somente para um jantar a dois? Com o <strong>Porccionne</strong> você consegue. <br></br> Cole sua receita, escolha o número de porções e bon appétit!
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
                  value={receita}
                  onChange={e => setReceita(e.target.value)}
                />
                {/* <button type="submit" className="continuar">Continuar</button> */}
              </div>
            </div>
            <div className="formulario2" >
              {/* <div className="linha-receita">
                <input type="number" name="quantidade" id="quantidade" min="1" max="100000" />
                <input type="text" id="unidade" />
                <input type="text" id="ingrediente" />
              </div> */}
              <div className="rendimento">
                <label htmlFor="rende">Quanto a receita rende:</label>
                <input type="number" value={rende} name="rende" id="rende" min="1" max="1000" required onChange={e => setRende(e.target.value)}/>
                <label htmlFor="vairender">Quanto ela deve render:</label>
                <input type="number" value={vaiRender} name="vairender" id="vairender" min="1" max="1000" required onChange={e => setVaiRender(e.target.value)}/>
              </div>
              <button type="submit" className="porccionar" form="form1"></button>
            </div>
          </form>
          {resultado}
        </main>
      </div >
      <footer className="footer">
        <p>Copyrigth © 2020 - Porccionne</p>
      </footer>
    </div>
  )
}
