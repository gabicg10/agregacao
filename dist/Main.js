"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Produto_1 = require("./model/Produto");
const CarrinhoCompra_1 = require("./model/CarrinhoCompra");
const produto1 = new Produto_1.Produto(`meia`, 12.50);
const produto2 = new Produto_1.Produto(`camiseta`, 62.75);
const produto3 = new Produto_1.Produto(`bermuda`, 50.48);
const produto4 = new Produto_1.Produto(`calça`, 150.59);
const produto5 = new Produto_1.Produto(`boné`, 35.99);
const carrinhoDeCompras = new CarrinhoCompra_1.CarrinhoCompra();
carrinhoDeCompras.inserirProdutos(produto1, produto2, produto3, produto4, produto5);
console.log(`Quantidade de itens no carrinho: ${carrinhoDeCompras.quantidadeProdutos()}`);
console.log(`Valor Total: ${carrinhoDeCompras.valorTotal()}`);
//# sourceMappingURL=Main.js.map