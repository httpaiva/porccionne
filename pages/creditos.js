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
                    <div className="card">
                        <h2 className="nome">Jorge</h2>
                        <p className="funcao">Programador</p>
                    </div>
                    <div className="card">
                        <h2 className="nome">Jorge</h2>
                        <p className="funcao">Programador</p>
                    </div>
                    <div className="card">
                        <h2 className="nome">Jorge</h2>
                        <p className="funcao">Programador</p>
                    </div>
                </main>
            </div>
            <footer className="footer">
                <Link href="/creditos"><p>Copyrigth © 2020 - Porccionne</p></Link>
            </footer>
        </div>
    );
}