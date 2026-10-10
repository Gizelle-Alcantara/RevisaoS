window.MODULOS = [
  {
    "id": 1,
    "title": "Fundamentos e algoritmos",
    "subtitle": "Entenda o que é um algoritmo e como transformar um problema em etapas.",
    "explanation": "Algoritmo é uma sequência finita e organizada de instruções para resolver um problema. Antes de programar, identifique entradas, processamento e saídas.",
    "example": "Entrada: duas notas. Processamento: calcular a média. Saída: apresentar a média.",
    "code": "inicio\n  leia(nota1, nota2)\n  media <- (nota1 + nota2) / 2\n  escreva(media)\nfim",
    "question": "O que um algoritmo deve ter?",
    "options": [
      "Etapas claras e finitas",
      "Somente desenhos",
      "Sempre conexão com internet",
      "Apenas cálculos"
    ],
    "answer": 0,
    "why": "Um algoritmo possui instruções ordenadas e termina após um número finito de passos."
  },
  {
    "id": 2,
    "title": "Fluxogramas e pseudocódigo",
    "subtitle": "Represente soluções antes de escolher uma linguagem.",
    "explanation": "Pseudocódigo descreve a lógica em linguagem próxima do português. Fluxogramas usam símbolos: oval para início/fim, paralelogramo para entrada/saída, retângulo para processo e losango para decisão.",
    "example": "Em um fluxograma, perguntar se idade >= 18 usa um losango e dois caminhos: sim e não.",
    "code": "inicio\n  leia(idade)\n  se idade >= 18 entao\n    escreva(\"Maior de idade\")\n  senao\n    escreva(\"Menor de idade\")\n  fimse\nfim",
    "question": "Qual símbolo é usado para decisão no fluxograma?",
    "options": [
      "Retângulo",
      "Losango",
      "Oval",
      "Seta"
    ],
    "answer": 1,
    "why": "O losango representa a condição que cria caminhos alternativos."
  },
  {
    "id": 3,
    "title": "Variáveis, constantes e tipos",
    "subtitle": "Aprenda a guardar e classificar dados.",
    "explanation": "Variável é um espaço nomeado que pode mudar durante o programa. Constante guarda um valor fixo. Tipos comuns: inteiro, real, caractere, texto e lógico (verdadeiro/falso).",
    "example": "idade = 17 é inteiro; altura = 1.70 é real; nome = \"Ana\" é texto; aprovado = verdadeiro é lógico.",
    "code": "inteiro idade <- 17\nreal altura <- 1.70\ntexto nome <- \"Ana\"\nlogico aprovado <- falso",
    "question": "Qual tipo é mais adequado para armazenar verdadeiro/falso?",
    "options": [
      "Real",
      "Texto",
      "Lógico",
      "Inteiro"
    ],
    "answer": 2,
    "why": "Dados booleanos só assumem verdadeiro ou falso."
  },
  {
    "id": 4,
    "title": "Entrada, saída e atribuição",
    "subtitle": "Saiba receber dados e apresentar resultados.",
    "explanation": "Comando de entrada lê dados do usuário; comando de saída mostra mensagens e resultados. Atribuição (<-) armazena o resultado de uma expressão em uma variável.",
    "example": "Se x começa em 4, depois de x <- x + 3, x passa a valer 7.",
    "code": "inicio\n  escreva(\"Informe seu nome:\")\n  leia(nome)\n  escreva(\"Olá, \", nome)\nfim",
    "question": "Se x = 5 e executamos x <- x * 2, qual o novo x?",
    "options": [
      "5",
      "7",
      "10",
      "25"
    ],
    "answer": 2,
    "why": "Multiplique 5 por 2 e armazene o resultado: 10."
  },
  {
    "id": 5,
    "title": "Operadores e precedência",
    "subtitle": "Resolva expressões com a ordem correta.",
    "explanation": "Aritméticos: +, -, *, /, % (resto). Relacionais: >, <, >=, <=, ==, !=. Lógicos: E, OU, NÃO. Na precedência usual, parênteses vêm antes da multiplicação, que vem antes da soma.",
    "example": "2 + 3 * 4 = 14; (2 + 3) * 4 = 20.",
    "code": "a <- 2 + 3 * 4\nb <- (2 + 3) * 4\nescreva(a, b)",
    "question": "Quanto vale 10 % 3?",
    "options": [
      "3",
      "1",
      "0",
      "10"
    ],
    "answer": 1,
    "why": "10 dividido por 3 deixa resto 1."
  },
  {
    "id": 6,
    "title": "Estrutura sequencial",
    "subtitle": "Execute instruções na ordem em que aparecem.",
    "explanation": "Em uma sequência, cada instrução é executada uma após a outra, sem escolhas nem repetições. Use para calcular totais, médias, áreas e descontos.",
    "example": "Para calcular a área de um retângulo: leia largura, leia altura, multiplique e mostre.",
    "code": "inicio\n  leia(largura, altura)\n  area <- largura * altura\n  escreva(area)\nfim",
    "question": "Qual é a área com largura 5 e altura 4?",
    "options": [
      "9",
      "10",
      "20",
      "25"
    ],
    "answer": 2,
    "why": "Área do retângulo = largura × altura = 20."
  },
  {
    "id": 7,
    "title": "Condicionais: se, senão e senão se",
    "subtitle": "Crie decisões a partir de condições.",
    "explanation": "O SE executa um bloco apenas quando a condição é verdadeira. SENÃO trata a alternativa. SENÃO SE permite testar faixas diferentes, em ordem.",
    "example": "Com nota 8, a condição nota >= 7 é verdadeira e a saída é Aprovado.",
    "code": "se nota >= 7 entao\n  escreva(\"Aprovado\")\nsenao se nota >= 4 entao\n  escreva(\"Recuperação\")\nsenao\n  escreva(\"Reprovado\")\nfimse",
    "question": "Qual a saída para nota = 5 no exemplo?",
    "options": [
      "Aprovado",
      "Recuperação",
      "Reprovado",
      "Erro"
    ],
    "answer": 1,
    "why": "5 é menor que 7, mas é maior ou igual a 4."
  },
  {
    "id": 8,
    "title": "Escolha/caso",
    "subtitle": "Selecione um caminho entre alternativas conhecidas.",
    "explanation": "A estrutura ESCOLHA/CASO compara uma expressão com valores possíveis. É útil para menus e opções discretas; CASO CONTRÁRIO trata o valor inesperado.",
    "example": "Opção 2 em um menu pode mostrar Consultar cadastro.",
    "code": "escolha(opcao)\n  caso 1: escreva(\"Cadastrar\")\n  caso 2: escreva(\"Consultar\")\n  outrocaso: escreva(\"Opção inválida\")\nfimescolha",
    "question": "Quando ESCOLHA/CASO costuma ser mais útil?",
    "options": [
      "Menu de opções numeradas",
      "Calcular uma soma simples",
      "Imprimir sempre a mesma frase",
      "Declarar uma constante"
    ],
    "answer": 0,
    "why": "Casos correspondem às opções de um menu."
  },
  {
    "id": 9,
    "title": "Laço enquanto",
    "subtitle": "Repita enquanto a condição for verdadeira.",
    "explanation": "ENQUANTO testa a condição antes de cada repetição. Se for falsa desde o início, o bloco pode não executar nenhuma vez. Atualize a variável de controle para evitar laço infinito.",
    "example": "Contador inicia em 1, imprime 1, 2, 3 e para quando chega a 4.",
    "code": "contador <- 1\nenquanto contador <= 3 faca\n  escreva(contador)\n  contador <- contador + 1\nfimenquanto",
    "question": "Quantas vezes o laço executa se contador inicia em 1 e vai até 3?",
    "options": [
      "2",
      "3",
      "4",
      "Infinitas"
    ],
    "answer": 1,
    "why": "Executa para 1, 2 e 3: três vezes."
  },
  {
    "id": 10,
    "title": "Laços para e repita",
    "subtitle": "Compare as três formas de repetição.",
    "explanation": "PARA é conveniente quando o número de repetições é conhecido. REPITA ... ATÉ testa a condição de parada ao final e executa pelo menos uma vez. ENQUANTO verifica antes.",
    "example": "PARA i de 1 até 5 escreve cinco números. REPITA executa o menu uma vez antes de perguntar se o usuário quer sair.",
    "code": "para i de 1 ate 5 faca\n  escreva(i)\nfimpara\n\nrepita\n  leia(senha)\nate senha == \"1234\"",
    "question": "Qual estrutura executa o bloco pelo menos uma vez?",
    "options": [
      "Enquanto",
      "Repita ... até",
      "Se",
      "Escolha"
    ],
    "answer": 1,
    "why": "A condição de parada do REPITA é verificada depois do bloco."
  },
  {
    "id": 11,
    "title": "Contadores, acumuladores e rastreamento",
    "subtitle": "Acompanhe valores passo a passo.",
    "explanation": "Contador registra quantas vezes algo ocorreu; acumulador soma valores. Teste de mesa é uma tabela que mostra o estado das variáveis em cada passo e ajuda a prever a saída e descobrir erros.",
    "example": "Valores 2, 4 e 6: contador termina em 3 e soma termina em 12.",
    "code": "soma <- 0\npara i de 1 ate 3 faca\n  leia(valor)\n  soma <- soma + valor\nfimpara\nescreva(soma)",
    "question": "Se soma inicia em 0 e recebe 2, 4 e 6, qual será o valor final?",
    "options": [
      "6",
      "10",
      "12",
      "24"
    ],
    "answer": 2,
    "why": "0 + 2 + 4 + 6 = 12."
  },
  {
    "id": 12,
    "title": "Vetores (arrays)",
    "subtitle": "Guarde vários valores sob um mesmo nome.",
    "explanation": "Vetor é uma coleção linear acessada por índice. A posição inicial depende da linguagem: em C e JavaScript, começa em 0. Percorrer um vetor é acessar cada elemento em um laço.",
    "example": "notas = [6, 8, 10]. Na indexação iniciada em 0: notas[0] = 6 e notas[2] = 10.",
    "code": "notas <- [6, 8, 10]\nsoma <- 0\npara i de 0 ate 2 faca\n  soma <- soma + notas[i]\nfimpara\nmedia <- soma / 3",
    "question": "Em um vetor [5, 9, 12] que começa no índice 0, qual é o elemento no índice 1?",
    "options": [
      "5",
      "9",
      "12",
      "1"
    ],
    "answer": 1,
    "why": "Índice 0 aponta para 5; índice 1 para 9."
  },
  {
    "id": 13,
    "title": "Matrizes",
    "subtitle": "Organize dados em linhas e colunas.",
    "explanation": "Matriz é uma estrutura bidimensional: cada elemento é identificado por linha e coluna. Normalmente são utilizados dois laços aninhados para percorrê-la.",
    "example": "Em matriz [[1,2],[3,4]], o elemento na linha 1, coluna 0 (índices a partir de 0) vale 3.",
    "code": "matriz <- [[1,2],[3,4]]\npara linha de 0 ate 1 faca\n  para coluna de 0 ate 1 faca\n    escreva(matriz[linha][coluna])\n  fimpara\nfimpara",
    "question": "Qual valor de matriz[1][0] em [[1,2],[3,4]]?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "answer": 2,
    "why": "Linha de índice 1 = [3,4]; coluna 0 = 3."
  },
  {
    "id": 14,
    "title": "Funções e procedimentos",
    "subtitle": "Divida o problema em blocos menores.",
    "explanation": "Função recebe parâmetros e pode retornar um valor. Procedimento executa uma tarefa sem necessariamente retornar um resultado. Modularizar evita repetição e facilita testes e manutenção.",
    "example": "Uma função dobrar(3) devolve 6, podendo ser usada em vários pontos do programa.",
    "code": "funcao dobrar(numero)\n  retorne numero * 2\nfimfuncao\nescreva(dobrar(3))",
    "question": "Qual o retorno de dobrar(7), se a função multiplica por 2?",
    "options": [
      "7",
      "9",
      "14",
      "21"
    ],
    "answer": 2,
    "why": "7 × 2 = 14."
  },
  {
    "id": 15,
    "title": "Recursividade",
    "subtitle": "Entenda quando uma função chama a si mesma.",
    "explanation": "Recursão é quando uma função invoca ela própria para resolver um problema menor. Precisa de caso-base para interromper as chamadas. Sem caso-base, pode executar indefinidamente até esgotar recursos.",
    "example": "Fatorial de 4 é 4 × 3 × 2 × 1 = 24. O caso-base pode ser fatorial(0) = 1.",
    "code": "funcao fatorial(n)\n  se n <= 1 entao retorne 1\n  retorne n * fatorial(n - 1)\nfimfuncao",
    "question": "Qual elemento é indispensável em uma função recursiva?",
    "options": [
      "Caso-base",
      "Matriz",
      "Entrada de teclado",
      "Dois laços"
    ],
    "answer": 0,
    "why": "O caso-base impede chamadas recursivas infinitas."
  },
  {
    "id": 16,
    "title": "Busca linear e binária",
    "subtitle": "Localize valores em conjuntos de dados.",
    "explanation": "Busca linear examina elementos sucessivamente e funciona mesmo quando estão desordenados. Busca binária divide a faixa de busca pela metade, mas requer dados ordenados.",
    "example": "Em [2, 4, 6, 8, 10], a busca binária por 8 pode descartar metade do conjunto após comparar com 6.",
    "code": "para i de 0 ate tamanho-1 faca\n  se valores[i] == procurado entao\n    retorne i\n  fimse\nfimpara\nretorne -1",
    "question": "Qual condição é necessária para aplicar corretamente a busca binária?",
    "options": [
      "Vetor ordenado",
      "Vetor vazio",
      "Somente números pares",
      "Itens repetidos"
    ],
    "answer": 0,
    "why": "Busca binária depende de uma ordem para descartar uma metade."
  },
  {
    "id": 17,
    "title": "Ordenação e complexidade",
    "subtitle": "Aprenda a organizar listas e comparar soluções.",
    "explanation": "Ordenar significa colocar itens em uma ordem (crescente ou decrescente). Bubble sort compara vizinhos e realiza trocas. Complexidade descreve como tempo/memória crescem com o tamanho da entrada: uma passagem linear é O(n).",
    "example": "Ordenar [4, 1, 3] em ordem crescente resulta em [1, 3, 4].",
    "code": "para i de 0 ate n-2 faca\n  para j de 0 ate n-2-i faca\n    se v[j] > v[j+1] entao\n      troque(v[j], v[j+1])\n    fimse\n  fimpara\nfimpara",
    "question": "Qual é a ordem crescente de [7, 2, 5]?",
    "options": [
      "[7,5,2]",
      "[2,5,7]",
      "[5,2,7]",
      "[2,7,5]"
    ],
    "answer": 1,
    "why": "Crescente significa do menor para o maior."
  },
  {
    "id": 18,
    "title": "Pilha e fila",
    "subtitle": "Reconheça estruturas de armazenamento.",
    "explanation": "Pilha segue LIFO: o último elemento a entrar é o primeiro a sair (como pratos empilhados). Fila segue FIFO: o primeiro a entrar é o primeiro a sair (como uma fila de atendimento).",
    "example": "Se A entra antes de B numa pilha, B sai primeiro. Em uma fila, A sai primeiro.",
    "code": "pilha.empilhar(\"A\")\npilha.empilhar(\"B\")\nescreva(pilha.desempilhar()) // B",
    "question": "Qual estrutura segue FIFO?",
    "options": [
      "Pilha",
      "Fila",
      "Árvore binária",
      "Constante"
    ],
    "answer": 1,
    "why": "FIFO significa First In, First Out."
  },
  {
    "id": 19,
    "title": "Linguagem C: estrutura e tipos",
    "subtitle": "Conecte os algoritmos ao código em C.",
    "explanation": "Um programa em C geralmente usa #include <stdio.h>, função main, chaves e instruções terminadas por ponto e vírgula. Tipos comuns são int, float, double e char. printf apresenta saída; scanf lê dados e normalmente requer & antes da variável numérica.",
    "example": "int idade = 18; printf(\"%d\", idade); mostra 18.",
    "code": "#include <stdio.h>\nint main(void) {\n  int idade;\n  printf(\"Idade: \");\n  scanf(\"%d\", &idade);\n  printf(\"Você digitou %d\\n\", idade);\n  return 0;\n}",
    "question": "Qual função lê um número digitado no teclado em C?",
    "options": [
      "printf",
      "scanf",
      "return",
      "include"
    ],
    "answer": 1,
    "why": "scanf é utilizada para ler dados formatados."
  },
  {
    "id": 20,
    "title": "Erros, testes e depuração",
    "subtitle": "Aprenda a conferir se um algoritmo funciona.",
    "explanation": "Erro de sintaxe viola regras da linguagem; erro de lógica produz resultado errado mesmo executando; erro de execução surge durante a operação. Teste de mesa e casos de teste devem incluir valores normais, limites e entradas inválidas.",
    "example": "Para aprovação com nota >= 7, teste notas 6,9; 7,0; 7,1. O valor 7,0 é um caso de fronteira.",
    "code": "// Exemplo de teste de fronteira\nnota <- 7\nse nota >= 7 entao\n  escreva(\"Aprovado\")\nfimse",
    "question": "O código executa, mas calcula a média errada. Qual tipo de erro?",
    "options": [
      "Erro de lógica",
      "Erro de sintaxe",
      "Falha de energia",
      "Nenhum"
    ],
    "answer": 0,
    "why": "Erro lógico pode gerar resultado incorreto sem impedir a execução."
  }
];
