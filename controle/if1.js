function soBoaNoticia(nota) {
    if(nota >=7) {
        console.log('Aprovado com ' + nota);
    }
}

soBoaNoticia(8.1);
soBoaNoticia(6.1);

function seForVerdadeEuFalo(valor) {
    if(valor) {
        console.log('É verdade... ' + valor)
    }
}

seForVerdadeEuFalo('eu vi');
seForVerdadeEuFalo(); //undefined  = falso. Não imprime
seForVerdadeEuFalo(null) ;
seForVerdadeEuFalo(undefined);
seForVerdadeEuFalo(NaN);
seForVerdadeEuFalo('');
seForVerdadeEuFalo(0);
seForVerdadeEuFalo(-1); //verdadeiro
seForVerdadeEuFalo(' '); //string preenchida é true
seForVerdadeEuFalo('?');
seForVerdadeEuFalo([]); //array vazio é true
seForVerdadeEuFalo([1, 2]); 
seForVerdadeEuFalo({}); //objeto vazio é true
