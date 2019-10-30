let valor //não inicializada
console.log(valor); //não atribui variável. Vai imprimir undefined
//console.log(valor2); //is not defined - diferente de undefined. ainda não foi definido

valor = null //ausencia de valor
console.log(valor);
//console.log(valor.toString()); //erro - não pode ler propriedade to string de nulo;

const produto = {};
console.log(produto.preco);
console.log(produto);

produto.preco = 3.50;
console.log(produto);

produto.preco = undefined //evitar atribuir undefined
console.log(!!produto.preco);
//delete produto.preco = para deletar 
console.log(produto);

produto.preco = null //sem preço
console.log(!!produto.preco);
console.log(produto);