let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };
 //console.log('Bem-vinda, ' + info.personagem);

  info.recorrente ='sim';

  //console.log(info);

//for (let chave in info){
 //   console.log(chave);}

// for (let chave in info){
//     console.log(info[chave]);
// }
let info2 = {
    personagem: 'Tio patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente: 'sim'
};

for (let concat in info) {
    if (
        concat === 'recorrente' &&
        info.recorrente === 'sim' &&
        info2.recorrente === 'sim'
    ){
        console.log("Ambos recorrentes");
    }
    else {
        console.log(info[concat] + ' e ' + info2[concat]);
    }
}