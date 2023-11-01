"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarrinhoCompra = void 0;
class CarrinhoCompra {
    constructor() {
        this.produtos = [];
    }
    inserirProdutos(...produtos) {
        for (const produto of produtos) {
            this.produtos.push(produto);
        }
    }
    quantidadeProdutos() {
        return this.produtos.length;
    }
    valorTotal() {
        return this.produtos.reduce((soma, produto) => soma + produto.preco, 0);
    }
}
exports.CarrinhoCompra = CarrinhoCompra;
//# sourceMappingURL=CarrinhoCompra.js.map