const pessoa = {
    saudacao: 'Bom Dia!',
    falar() {
        console.log(this.saudacao) //saudação aponta para o this, que é a pessoa
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() //conflito entre paradigmas: funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()
// Bind: usado para referenciar o this.