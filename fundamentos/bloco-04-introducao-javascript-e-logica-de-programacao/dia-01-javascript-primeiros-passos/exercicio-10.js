const custo = 12.0;
const valorVenda = 48.0;
const imposto = 2;
let quant = 1000;

const custoTotal = custo + custo * imposto;
const lucro = valorVenda - custoTotal;
let lucroTotal;

//console.log(custoTotal);
//console.log(lucro);

if (valorVenda < 0 || custo < 0 || imposto < 0 || quant < 0) {
  console.log("Erro: Valor inválido!");
} else ((valorVenda * quant) - (custoTotal * quant));
{
  console.log(lucroTotal);
}
