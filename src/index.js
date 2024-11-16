// Pontos dos heróis
const heróis = [
  { nome: "Sentinela", pontos: 35000 },
  { nome: "Spawn", pontos: 9500 },
  { nome: "Hulk", pontos: 8980 },
  { nome: "Deadpool", pontos: 7501 },
  { nome: "Senhor Destino", pontos: 5560 },
  { nome: "Doutor Manhattan", pontos: 4780 },
  { nome: "Doutor Estranho", pontos: 1987 },
  { nome: "Flash", pontos: 870 },
];

// Função para classificar heróis
function classificarHerói(pontos) {
  if (pontos < 1000) {
    return "Ferro";
  } else if (pontos >= 1001 && pontos <= 2000) {
    return "Bronze";
  } else if (pontos >= 2001 && pontos <= 5000) {
    return "Prata";
  } else if (pontos >= 5001 && pontos <= 7000) {
    return "Ouro";
  } else if (pontos >= 7001 && pontos <= 8000) {
    return "Platina";
  } else if (pontos >= 8001 && pontos <= 9000) {
    return "Ascendente";
  } else if (pontos >= 9001 && pontos <= 10000) {
    return "Imortal";
  } else if (pontos >= 10001) {
    return "Radiante";
  }
}

// Classificar heróis
heróis.forEach((herói) => {
  const classificação = classificarHerói(herói.pontos);
  console.log(`O héroi de nome ${herói.nome}, está no nível de ${classificação}`);
});
