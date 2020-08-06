import React, {useState} from 'react';
import Head from 'next/head';

// Components:
import ResultadoBox from '../components/resultado';
//Functions:
import splitText from '../utils/SplitText';

export default function Home() {

  const [receita, setReceita] = useState('');
  const [resultado, setResultado] = useState('');

  function handleFormReceita(e) {
    e.preventDefault();

    const receitaSeparada = JSON.stringify(splitText(receita));
    setResultado(<ResultadoBox text={receitaSeparada} />);
  }

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
          <form id="form1" onSubmit={handleFormReceita} >
            <div className="formulario1">
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
                <input type="number" name="rende" id="rende" min="1" max="1000" required />
                <label htmlFor="vairender">Quanto ela deve render:</label>
                <input type="number" name="vairender" id="vairender" min="1" max="1000" required />
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
