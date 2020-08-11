import React from 'react';
import Link from 'next/link';

export default function Creditos() {
    return (
        <div className="wrapper">
            <div className="container2">
                <header className="header">
                    <Link href="/"><img className="logo clicavel" src={require('../img/logo.svg')} alt="Porccionne Logo" /></Link>
                    <h1 className="subtitulo">Conheça os criadores do Porccionne!</h1>
                </header>
                <main>
                    <div className="card-container">
                        <div className="flipper">
                            <div className="card front">
                                <h2 className="nome">Matheus Gomes</h2>
                                <div className="funcao">
                                    <p>Idealizador</p>
                                    <p>Desenvolvedor</p>
                                </div>
                            </div>
                            <div className="card back">
                                <a href="https://github.com/theOlldboy" target="_blank">Github</a>
                            </div>
                        </div>
                    </div>
                    <div className="card-container">
                        <div className="flipper">
                            <div className="card front">
                                <h2 className="nome">João Brum</h2>
                                <div className="funcao">
                                    <p>Designer</p>
                                </div>
                            </div>
                            <div className="card back">
                                <a href="https://www.behance.net/joaobrum" target="_blank">Behance</a>
                            </div>
                        </div>
                    </div>
                    <div className="card-container">
                        <div className="flipper">
                            <div className="card front">
                                <h2 className="nome">Gabriel Paiva</h2>
                                <div className="funcao">
                                    <p>Desenvolvedor</p>
                                    <p>Front-end</p>
                                </div>
                            </div>
                            <div className="card back">
                                <a href="https://github.com/gabriel-paiva" target="_blank">Github</a>
                            </div>
                        </div>
                    </div>
                    <div className="card-container">
                        <div className="flipper">
                            <div className="card front">
                                <h2 className="nome">Murilo Gomes</h2>
                                <div className="funcao">
                                    <p>Desenvolvedor</p>
                                    <p>Back-end</p>
                                </div>
                            </div>
                            <div className="card back">
                                <a href="https://github.com/murilogds" target="_blank">Github</a>
                            </div>
                        </div>
                    </div>
                    <div className="card-container">
                        <div className="flipper">
                            <div className="card front">
                                <h2 className="nome">Eliseu Kadesh</h2>
                                <div className="funcao">
                                    <p>Desenvolvedor</p>
                                    <p>Back-end</p>
                                </div>
                            </div>
                            <div className="card back">
                                <a href="https://github.com/eliseukadesh67" target="_blank">Github</a>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            <footer className="footer">
                <Link href="/creditos"><p>Copyrigth © 2020 - Porccionne</p></Link>
            </footer>
        </div>
    );
}