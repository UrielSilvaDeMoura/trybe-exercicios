const a = -10;
const b = 45; 
const c = 80;

const resultado = true;


if (a+b+c === 180){
    console.log(resultado);
}
else if (a < 0 || b < 0 || c <0) {
    console.log('Erro = este ângulo não é válido!');
}
else {
    console.log(!resultado);
}
