const perguntas = [
    {
      pergunta: "Qual dos seguintes é um tipo de dado primitivo em JavaScript?",
      respostas: [
        "Array",
        "Object",
        "String"
      ],
      correta: 2 // Resposta correta: "String"
    },
    {
      pergunta: "Qual é a palavra-chave utilizada para declarar uma variável em JavaScript?",
      respostas: [
        "variable",
        "declare",
        "var"
      ],
      correta: 2 // Resposta correta: "var"
    },
    {
      pergunta: "Qual método é usado para imprimir mensagens no console em JavaScript?",
      respostas: [
        "print()",
        "log()",
        "console.log()"
      ],
      correta: 2 // Resposta correta: "console.log()"
    },
    {
      pergunta: "Qual operador é usado para comparação estrita em JavaScript?",
      respostas: [
        "==",
        "===",
        "="
      ],
      correta: 1 // Resposta correta: "==="
    },
    {
      pergunta: "Qual é o resultado da expressão '2' + 2 em JavaScript?",
      respostas: [
        "22",
        "4",
        "Erro"
      ],
      correta: 0 // Resposta correta: "22"
    },
    {
      pergunta: "Qual dos seguintes é um exemplo de um loop de repetição em JavaScript?",
      respostas: [
        "if",
        "while",
        "switch"
      ],
      correta: 1 // Resposta correta: "while"
    },
    {
      pergunta: "Qual é a função do método push() em JavaScript?",
      respostas: [
        "Remover um elemento de um array",
        "Adicionar um elemento ao final de um array",
        "Ordenar um array"
      ],
      correta: 1 // Resposta correta: "Adicionar um elemento ao final de um array"
    },
    {
      pergunta: "Qual método é usado para converter uma string em minúsculas em JavaScript?",
      respostas: [
        "toUpperCase()",
        "toLowerCase()",
        "toLower()"
      ],
      correta: 1 // Resposta correta: "toLowerCase()"
    },
    {
      pergunta: "O que o operador typeof retorna em JavaScript?",
      respostas: [
        "O tipo de uma variável",
        "O valor de uma variável",
        "Um booleano"
      ],
      correta: 0 // Resposta correta: "O tipo de uma variável"
    },
    {
      pergunta: "Qual é a sintaxe correta para comentários de uma linha em JavaScript?",
      respostas: [
        "// Comentário",
        "/* Comentário */",
        "<!-- Comentário -->"
      ],
      correta: 0 // Resposta correta: "// Comentário"
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