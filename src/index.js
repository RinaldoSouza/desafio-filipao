console.log("Desafio Classificador de Nível de Heroi");

const rankingDeHerois = [
  {
    nome: "Sentinela",
    pontos: 35000,
  },
  {
    nome: "Spawn",
    pontos: 9500,
  },
  {
    nome: "Hulk",
    pontos: 8980,
  },
  {
    nome: "Deadpool",
    pontos: 7501,
  },
  {
    nome: "Senhor Destino",
    pontos: 5560,
  },
  {
    nome: "Doutor Manhattan",
    pontos: 4780,
  },
  {
    nome: "Doutor Estranho",
    pontos: 1987,
  },
  {
    nome: "Flash",
    pontos: 870,
  },
];

function exibirRanking() {
  console.log("Ranking de Heróis:");
  rankingDeHerois.forEach((heroi, indice) => {
    console.log(`${indice + 1}. ${heroi.nome} - ${heroi.pontos} pontos`);
  });
}

exibirRanking();