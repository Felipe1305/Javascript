import React from 'react';
import "./index.css"
import api from '../../services/api'
import Produto from '../../model/Produto'
import {Link} from 'react-router-dom'

export default class Principal extends React.Component {


        state = {

          
            produtos: [],
            mensagem: "Olá!!"
        }
        //Primeira forma de fazer a requisição na Api
        // componentDidMount(){
        //     api.get("/produto")
        //     .then(resposta => {
        //  //      var newProdutos = resposta.data.map(produto => new Produto(produto));
        //        this.setState({produtos:resposta.data.map(produto => new Produto(produto))});
        //     })
        //     .catch(error => console.log(error))
        // }

        componentDidMount (){
            this.obterProdutos();
        }

        //Assim criaremos funções no Front
        // Versão 2 para requisição de produtos
        obterProdutos = () => {
            api.get("/produto")
                .then(resposta => {
                   this.setState({produtos:resposta.data.map(produto => new Produto(produto))});
                })
                .catch(error => console.log(error))
        }

        //Versão 3 feita com Forma Assíncrona que aguarda a devolução da API.
        // obterProdutos = async () => {
        //   const resposta = await api.get("/produto");
        //   this.setState({produtos:resposta.data.map(produto => new Produto(produto))});       
        // }
       
        render(){

            //Desestruturação de objeto;
            // const {produtos} = this.state;

            return (
                <div className="container-produtos">

                    {
                        this.state.produtos.map(produto => (
                            <div className="produtos" key={produto.id}>
                                <p><strong>Id: </strong> {produto.id}</p>
                                <p><strong>Nome: </strong> {produto.nome}</p>
                                <p><strong>Valor: </strong> {produto.valor}</p>
                                <Link to={`/detalhes/${produto.id}`} className="btn-detalhes">Detalhes</Link>
                            </div>
                        ))
                    }
                   

                <h1>{this.state.mensagem}</h1>
                </div>
              
            );
        }
}