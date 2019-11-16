function teste1(num) {
    if(num >= 7)
        console.log(num)

    console.log('Final')
}

teste1(6);
teste1(8);

function teste2(num) {
    if(num > 7); { //sentença de código vazia terminada com ;
        console.log(num)
    }
}

teste2(6);
teste2(8);

//não usar ponto e vírgula ; na definição de um bloco if e nas estruturas de controle