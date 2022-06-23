let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menor = numbers[0];

for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] < menor) { //"pergunta" se o número verificado é menor que o já atribuido na variavel
        menor = numbers[index] //se o número verificado for menor que o já atribuido na variavel, iŕa substituir pelo novo elemento.
    }
}

console.log(menor);