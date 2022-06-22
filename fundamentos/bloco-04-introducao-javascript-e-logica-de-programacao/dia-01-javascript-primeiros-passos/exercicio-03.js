const primeiro = 31;
const segundo = 40;
const terceiro = 30;

if (primeiro > segundo && primeiro > terceiro) {
  console.log('Este é o maior = ' + primeiro);
} 
else if (segundo > primeiro && segundo > terceiro) {
    console.log('Este é o maior = ' + segundo);
}
else {
    console.log('Este é o maior = ' + terceiro);
}
