//adição
let numerosoma1 = Number(prompt('digite o primeiro numero'))
let numerosoma2 = Number(prompt('digite o segundo numero'))
let adicao = numerosoma1 + numerosoma2

console.log(`a soma do numero ${numerosoma1} e do numero ${numerosoma2} é igual a ${adicao}`)



//subtração
let numerosubtracao1 = Number(prompt('digite o primeiro numero'))
let numerosubtracao2 = Number(prompt('digite o segundo numero'))
let subtracao = numerosubtracao1 - numerosubtracao2

console.log(`a subtracao do numero ${numerosubtracao1} e do numero ${numerosubtracao2} é igual a ${subtracao}`)

//multiplicação
let numeromulticacao1 = Number(prompt('digite o primeiro numero'))
let numeromulticacao2 = Number(prompt('digite o segundo numero'))
let multicacao = numeromulticacao1 * numeromulticacao2

console.log(`a multiplicação do numero ${numeromulticacao1} e do numero ${numeromulticacao2} é igual a ${multicacao}`)


//divisão
let numerodivisao1 = Number(prompt('digite primeiro numero'))
let numerodivisao2 = Number(prompt('digite o segundo numero'))
let divisao = numerodivisao1 / numerodivisao2

console.log(`a divisão do numero ${numerodivisao1} e do numero ${numerodivisao2} é igual a ${divisao}`)


//numero maior que 10
let maior = Number(prompt('digite um numero'))


if(maior >= 10 ) {
    console.log('maior do que 10')
}

else{
    console.log('menor do que 10')
}


//area do retangulo
let largura = Number(prompt('digite a largura'))
let altura = Number(prompt('digite a altura'))
let somaArea = largura * altura

console.log(`a área do retângulo é ${somaArea}`)


//maior de idade
let idade = Number(prompt('digite sua idade.'))

if(idade >= 18) {
    console.log('maior de idade!')
}

else{
    console.log('menor de idade!')
}

//impar ou par
let imparpar = Number(prompt('digite um numero natural, para saber se é impar ou par.'))

if(imparpar %2 === 0) {
    console.log(`O número ${imparpar} é par!`)
}

else{
    console.log(`O número ${imparpar} é ímpar!`)
}



//numero positivos negativo ou zero

let positivo = Number(prompt('digite um numero positivo negativo ou neutro.'))

if(positivo >= 0) {
    console.log('o número é positivo')
}

else {
    console.log('o número é negativo')
}


//desconto
precoOriginal = Number(prompt('digite o valor do produto'))  
let desconto = 0.15      

let precoComDesconto = precoOriginal - (precoOriginal * desconto) 

console.log(`o valor do produto com o desconto de 25% é ${precoComDesconto}`)

