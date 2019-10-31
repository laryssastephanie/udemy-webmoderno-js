var numero = 1
{
    var numero = 2
    console.log('dentro =', numero);
};
console.log('fora =', numero);
//numero 2 impresso duas vezes, pois o primeiro que estava fora conflitou com o segundo que estava dentro do bloco
