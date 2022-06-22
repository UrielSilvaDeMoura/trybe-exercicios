let statusCandidato = "lista";

switch (statusCandidato) {
  case "aprovado":
    console.log("Parabéns, você foi aprovada(o)!");
    break;

  case "lista":
    console.log("Você esta na nossa lista de espera.");
    break;

  case "reprovado":
    console.log("Você foi reprovada(o).");
    break;

  default:
    console.log("não se aplica");
}
