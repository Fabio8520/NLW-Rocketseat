const perguntas = [
  {
    pergunta: "Quem projetou a Casa da Cascata, uma obra emblemática da arquitetura moderna?",
    respostas: [
      "Frank Lloyd Wright",
      "Le Corbusier",
      "Mies van der Rohe"
    ],
    correta: 0 // Resposta correta: "Frank Lloyd Wright"
  },
  {
    pergunta: "Qual destes é um exemplo de estilo arquitetônico romano?",
    respostas: [
      "Partenon",
      "Panteão",
      "Sagrada Família"
    ],
    correta: 1 // Resposta correta: "Panteão"
  },
  {
    pergunta: "Quem é o arquiteto responsável pela concepção do edifício Burj Khalifa em Dubai?",
    respostas: [
      "Norman Foster",
      "Frank Gehry",
      "Adrian Smith"
    ],
    correta: 2 // Resposta correta: "Adrian Smith"
  },
  {
    pergunta: "O Palácio de Versalhes está localizado em qual país?",
    respostas: [
      "Espanha",
      "Itália",
      "França"
    ],
    correta: 2 // Resposta correta: "França"
  },
  {
    pergunta: "Qual destes é um exemplo de estilo arquitetônico gótico?",
    respostas: [
      "Casa Batlló",
      "Catedral de Notre-Dame",
      "Museu Guggenheim Bilbao"
    ],
    correta: 1 // Resposta correta: "Catedral de Notre-Dame"
  },
  {
    pergunta: "Quem projetou o Museu Solomon R. Guggenheim em Nova York?",
    respostas: [
      "Zaha Hadid",
      "Frank Lloyd Wright",
      "I. M. Pei"
    ],
    correta: 1 // Resposta correta: "Frank Lloyd Wright"
  },
  {
    pergunta: "Qual destes é um exemplo de estilo arquitetônico renascentista?",
    respostas: [
      "Castelo de Neuschwanstein",
      "Palácio de Buckingham",
      "Palazzo Vecchio"
    ],
    correta: 2 // Resposta correta: "Palazzo Vecchio"
  },
  {
    pergunta: "Quem foi o arquiteto do Empire State Building em Nova York?",
    respostas: [
      "Louis Sullivan",
      "William Van Alen",
      "Daniel Burnham"
    ],
    correta: 1 // Resposta correta: "William Van Alen"
  },
  {
    pergunta: "O Coliseu é uma estrutura icônica situada em qual cidade?",
    respostas: [
      "Atenas",
      "Roma",
      "Paris"
    ],
    correta: 1 // Resposta correta: "Roma"
  },
  {
    pergunta: "Quem projetou a Ópera de Sydney?",
    respostas: [
      "Renzo Piano",
      "Jørn Utzon",
      "Santiago Calatrava"
    ],
    correta: 1 // Resposta correta: "Jørn Utzon"
  }
];


//Seleciona a div com id quiz
const quiz = document.querySelector('#quiz')
//Seleciona a tag template
const template = document.querySelector('template');

const corretas = new Set();

const totalDePerguntas = perguntas.length;
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas;


// loop ou laço de repetição das perguntas
for(const item of perguntas){
  //Clona todo o conteúdo do template e armazena em quizItem
  const quizItem = template.content.cloneNode(true);
  //Modifica o conteúdo de h3 adicionando as perguntas
  quizItem.querySelector('h3').textContent = item.pergunta;

  // loop ou laço de repetição das respostas
  for(const resposta of item.respostas) {
    //Seleciona  e clona todo o conteúdo da dt
    const dt = quizItem.querySelector('dl dt').cloneNode(true);
    //Seleciona a tag span e atribui resposta a ela
    dt.querySelector('span').textContent = resposta;
    //Seleciona a tag input e adiciona os indices de perguntas
    dt.querySelector('input').setAttribute('name', 'pergunta-', + perguntas.indexOf(item));
    //Seleciona o valor de input e passa i indice da resposta
    dt.querySelector('input').value = item.respostas.indexOf(resposta);
    //verifica se o indice clicado está correto
    dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.correta;
      
      corretas.delete(item);
      if(estaCorreta) {
        corretas.add(item);
      }
      mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas;
    };

    //Seleciona dl e adiciona o conteúdo de dt
    quizItem.querySelector('dl').appendChild(dt);
  }

    // remove o primeiro item de dt
    quizItem.querySelector('dl dt').remove()

  // Coloca a pergunta na tela
  quiz.appendChild(quizItem);
}
