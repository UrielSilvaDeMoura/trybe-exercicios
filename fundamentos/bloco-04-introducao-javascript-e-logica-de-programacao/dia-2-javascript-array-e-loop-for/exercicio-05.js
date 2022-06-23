let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maior = numbers[0];

for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > maior) { //"pergunta" se o número verificado é maior que o já atribuido na variavel
        maior = numbers[index] //se o número verificado for maior que o já atribuido na variavel, iŕa substituir pelo novo elemento.
    }
}

console.log(maior);