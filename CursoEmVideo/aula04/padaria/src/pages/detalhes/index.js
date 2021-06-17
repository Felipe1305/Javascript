// import React, {Component} from 'react';
import React from 'react';
import "./index.css";

export default class Detalhes extends React.Component {

    state = {
        produto:{}
    }

    render(){
        const {produto} = this.state;
        return (
            <div className="detalhes-produto">
                <h2>{produto.nome}</h2>
                <h3>{produto.quantidade}</h3>
                <h3>{produto.valor}</h3>
                <p>
                    <a href={produto.urlImagem}>Imagem</a>
                </p>

            </div>
        );
    }
}