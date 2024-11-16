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

if (poder >= 1000) {
    categoria = "Ferro";
  } else if (poder >= 2000) {
    categoria = "Bronze";
  } else if (idade >= 5000) {
    categoria = "Prata";  }