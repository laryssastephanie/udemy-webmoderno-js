var numero = 1
//se usar let fora, também vai imprimir 1 e 2
{
    let numero = 2
    console.log('dentro =', numero);
}
console.log('fora =', numero);

//imprime 1 e 2, pois estão em escopos diferentes

