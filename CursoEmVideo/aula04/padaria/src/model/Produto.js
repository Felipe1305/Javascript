export default class Produto{
    constructor(obj){
        obj = obj || {};
        
        this.id = obj.id;
        this.nome = obj.nome;
        this.quantidade = obj.quantidade;
        this.valor = obj.valor;
        this.urlImagem = obj.urlImagem;
    }
}