//Função sem retorno
//recebe dados de entrada
//retorna um resultado
//bloco de código nomeado

function imprimirSoma(a, b) {
    console.log(a + b)
};

imprimirSoma(2, 3);
imprimirSoma(2); //valor inteiro + undefined = NaN
imprimirSoma(2, 10, 4, 5, 6, 7, 8); //pega os dois primeiros, ignora o resto. Sem erro.
imprimirSoma(); //NaN

//Função com retorno
function soma(a, b = 1) {
    return a + b
};

console.log(soma(2, 3));
soma(2, 3) //não imprime no console
console.log(soma(2));//considera b = 1
console.log(soma()); //NaN, pois não tem a
