import type { LandingText } from "../types";

export const landingTools: Record<string, LandingText> = {
  "team-generator": {
    name: "Sorteador de times",
    card: "Divida uma lista de nomes em times justos e aleatórios.",
    seoTitle: "Sorteador de times – Divida grupos aleatórios e justos",
    metaDescription: "Sorteador de times grátis. Cole uma lista de nomes, escolha o número de times ou de pessoas por time e tenha grupos equilibrados com um toque.",
    h1: "Sorteador de times",
    lead: "Cole sua lista, escolha quantos times precisa e receba grupos aleatórios e equilibrados com um toque.",
    sections: [
      {
        heading: "Times sempre equilibrados",
        paragraphs: [
          "O sorteador embaralha sua lista com um embaralhamento criptograficamente seguro e distribui os nomes um a um, como cartas. Assim os times nunca diferem em mais de uma pessoa: 13 pessoas em 3 times viram times de 5, 4 e 4.",
          "Divida por número de times (quatro grupos para quatro estações, por exemplo) ou por pessoas por time (duplas ou trios). Dê nomes aos times, como Vermelho, Azul e Verde, e copie o resultado para colar no chat, num documento ou slide.",
        ],
      },
      { heading: "Quando times aleatórios ajudam", list: ["Trabalhos em grupo e duplas de laboratório", "Pelada, basquete ou queimada", "Dinâmicas de team building e hackathons", "Quiz e jogos de festa", "Salas simultâneas em reuniões online"] },
      { heading: "Por que sortear é melhor que escolher capitães", paragraphs: ["Deixar capitães escolherem é tradição… e o jeito certo de alguém se sentir deixado de lado. Times sorteados são mais rápidos, misturam as panelinhas e acabam com qualquer suspeita de favoritismo. Se precisar equilibrar níveis, sorteie algumas vezes e fique com a divisão mais equilibrada, ou sorteie experientes e iniciantes separadamente e junte."] },
    ],
    howTo: [
      { title: "Cole os nomes", text: "Um por linha ou separados por vírgula. Duplicados saem." },
      { title: "Escolha a divisão", text: "Número de times ou pessoas por time." },
      { title: "Nomeie os times", text: "Opcional: nomes separados por vírgula." },
      { title: "Sorteie", text: "Copie o resultado ou sorteie de novo." },
    ],
    benefits: [
      { title: "Tamanhos iguais", text: "Times nunca diferem em mais de uma pessoa." },
      { title: "Aleatório de verdade", text: "Embaralhamento Fisher–Yates criptograficamente seguro." },
      { title: "Fácil de compartilhar", text: "Copie todos os times com um toque." },
      { title: "Privado", text: "Os nomes são processados só no seu navegador." },
    ],
    faqs: [
      { q: "Como os times ficam justos?", a: "A lista é embaralhada com o Fisher–Yates sem viés usando o gerador criptográfico do navegador e depois distribuída em rodízio para equilibrar os tamanhos." },
      { q: "Dá para fazer duplas?", a: "Sim. Escolha Pessoas por time e digite 2. Com número ímpar, um grupo fica com três." },
      { q: "Tem limite de nomes?", a: "Você pode colar centenas de nomes; o sorteio é instantâneo." },
      { q: "Posso manter certas pessoas juntas?", a: "Não automaticamente. Um truque: escreva-as numa linha só, como “Sam e Alex”, para contarem como um item." },
    ],
  },
  "random-number-generator": {
    name: "Gerador de números aleatórios",
    card: "Números aleatórios em qualquer intervalo, com ou sem repetição.",
    seoTitle: "Gerador de números aleatórios – Sorteie em qualquer intervalo",
    metaDescription: "Gere números aleatórios entre qualquer mínimo e máximo. Sorteie de 1 a 1.000 números, com ou sem repetição, ordenados ou não. Grátis e seguro.",
    h1: "Gerador de números aleatórios",
    lead: "Escolha um intervalo e a quantidade, e receba resultados aleatórios sem viés na hora.",
    sections: [
      {
        heading: "Números seguros e sem viés",
        paragraphs: [
          "Muitas ferramentas simples usam Math.random, que serve para jogos mas não foi feito para ser imprevisível. Este gerador usa a Web Crypto API com amostragem por rejeição, o método recomendado para código sensível à segurança. Cada número do intervalo tem exatamente a mesma chance, até em intervalos enormes.",
          "Ative Sem repetir para sortear números únicos: útil em rifas, bolões entre amigos ou para atribuir códigos aleatórios. Gere até 1.000 números de uma vez e ordene se quiser.",
        ],
      },
      { heading: "Usos comuns", list: ["Rifas e sorteios de brindes", "Sortear ganhador pelo número do bilhete", "Aulas de estatística e probabilidade", "Escolher página, questão ou lugar aleatório", "Jogos de tabuleiro sem dado"] },
    ],
    howTo: [
      { title: "Defina o intervalo", text: "Digite mínimo e máximo. Negativos também valem." },
      { title: "Escolha a quantidade", text: "Sorteie de 1 a 1.000 números." },
      { title: "Opções", text: "Permita ou evite repetição e escolha se ordena." },
      { title: "Sorteie", text: "Copie o resultado ou gere de novo." },
    ],
    benefits: [
      { title: "Qualquer intervalo", text: "De 1–6 a mais ou menos quatro quatrilhões." },
      { title: "Sem repetir", text: "Sorteios únicos para rifas e bolões." },
      { title: "Nível criptográfico", text: "Usa crypto.getRandomValues, não Math.random." },
      { title: "Histórico", text: "Veja os resultados anteriores logo abaixo." },
    ],
    faqs: [
      { q: "Este gerador é aleatório de verdade?", a: "Ele usa o gerador criptograficamente seguro do seu aparelho, adequado para segurança. A amostragem por rejeição elimina o pequeno viés da conta de módulo simples." },
      { q: "Como sorteio números tipo loteria?", a: "Defina o intervalo (por exemplo de 1 a 60), quantidade 6 e ative Sem repetir. É só diversão: não aumenta suas chances numa loteria de verdade." },
      { q: "Dá para gerar decimais?", a: "O gerador produz inteiros. Para decimais, gere um intervalo maior e divida: de 1 a 1000 dividido por 100 dá duas casas decimais." },
    ],
  },
  "random-letter-generator": {
    name: "Gerador de letras aleatórias",
    card: "Sorteie letras para jogos de palavras e alfabetização.",
    seoTitle: "Gerador de letras aleatórias – Sorteie letras de A a Z",
    metaDescription: "Gere letras aleatórias de A a Z. Escolha vogais ou consoantes, maiúsculas ou minúsculas, pule letras difíceis e sorteie várias sem repetir.",
    h1: "Gerador de letras aleatórias",
    lead: "Sorteie uma letra ou várias de uma vez, com opções de vogais, consoantes e pular as difíceis.",
    sections: [
      {
        heading: "Feito para jogos de palavras",
        paragraphs: [
          "Stop, anagramas e desafios de soletrar começam com uma letra aleatória. A opção Pular letras difíceis deixa de fora Q, U, V, X, Y e Z, que costumam travar os jogos em que é preciso uma palavra para cada tema.",
          "Precisa de letras para formar palavras? Sorteie sete sem repetir, ou misture vogais e consoantes sorteando separadamente.",
        ],
      },
      { heading: "Para professores e famílias", paragraphs: ["Use pares de maiúscula e minúscula (Aa, Bb) para reconhecer letras, só vogais para trabalhar sons, ou um grupo de letras para um aquecimento de ortografia. Funciona muito bem no projetor ou tablet."], list: ["Aquecimento de sons das letras", "Diga três coisas que começam com…", "Forme a palavra mais longa com estas letras", "Treino de caligrafia"] },
    ],
    howTo: [
      { title: "Escolha o grupo", text: "Todas, só vogais ou só consoantes." },
      { title: "Escolha o formato", text: "Maiúsculas, minúsculas ou ambas." },
      { title: "Defina a quantidade", text: "De 1 a 26 letras, com ou sem repetir." },
      { title: "Sorteie", text: "As letras aparecem na hora." },
    ],
    benefits: [
      { title: "Ideal para jogar", text: "Pule letras difíceis para jogos mais fluidos." },
      { title: "Grupos flexíveis", text: "Vogais, consoantes ou o alfabeto inteiro." },
      { title: "Sem repetir", text: "Letras únicas para jogos de peças." },
      { title: "Justo", text: "Cada letra tem a mesma chance." },
    ],
    faqs: [
      { q: "Posso excluir certas letras?", a: "Use Pular letras difíceis para tirar Q, U, V, X, Y e Z, ou a Roleta de letras, onde dá para esconder qualquer letra." },
      { q: "Inclui Ç ou letras com acento?", a: "O gerador usa as 26 letras básicas. Você pode adicionar Ç ou letras acentuadas numa roleta personalizada." },
      { q: "O Y conta como vogal?", a: "Nos filtros de vogais e consoantes, o Y é tratado como consoante." },
    ],
  },
  "dice-roller": {
    name: "Rolador de dados",
    card: "Role até 12 dados: d4, d6, d8, d10, d12, d20 ou d100.",
    seoTitle: "Rolar dados online – Dados virtuais de d4 a d100",
    metaDescription: "Role até 12 dados virtuais online: d4, d6, d8, d10, d12, d20 ou d100. Adicione modificadores, veja o total e o histórico. Justo, rápido e grátis.",
    h1: "Rolar dados online",
    lead: "Perdeu os dados? Role até doze de uma vez, do d4 de quatro lados ao d100.",
    sections: [
      {
        heading: "Todos os dados que você precisa",
        paragraphs: [
          "Jogos de tabuleiro usam quase sempre dados de seis lados, mas RPGs de mesa usam o kit completo: d4, d6, d8, d10, d12, d20 e d100. Escolha o tipo e a quantidade, adicione um modificador de bônus ou penalidade, e o rolador mostra cada dado e o total.",
          "As rolagens recentes ficam listadas embaixo para conferir o que saiu dois turnos atrás, ótimo quando a mesa não chega a um acordo.",
        ],
      },
      { heading: "Rolagens justas", paragraphs: ["Dados físicos podem ser levemente desequilibrados; virtuais não. Cada rolagem usa o gerador criptográfico do navegador, então cada face tem exatamente a mesma chance."] },
      { heading: "Ótimo para", list: ["Jogos de tabuleiro sem dado", "Sessões de RPG (2d6, 1d20+5, 4d6 e mais)", "Aulas de matemática e probabilidade", "Jogos de festa e noites em família", "Decisões rápidas ao acaso"] },
    ],
    howTo: [
      { title: "Escolha os dados", text: "Quantos dados (1–12) e quantos lados." },
      { title: "Adicione um modificador", text: "Opcional: some ou subtraia do total." },
      { title: "Role", text: "Veja cada dado e o total." },
      { title: "Confira o histórico", text: "As rolagens recentes ficam embaixo." },
    ],
    benefits: [
      { title: "Sete tipos de dado", text: "d4, d6, d8, d10, d12, d20 e d100." },
      { title: "Totais e modificadores", text: "Sem conta de cabeça." },
      { title: "Totalmente justo", text: "Nada de faces gastas ou viciadas." },
      { title: "Sempre à mão", text: "Funciona em qualquer celular, sem app." },
    ],
    faqs: [
      { q: "Dados online são justos?", a: "Estes são. Cada face é escolhida por um gerador criptograficamente seguro com amostragem por rejeição, então todas são igualmente prováveis." },
      { q: "Como rolo 1d20+5?", a: "Coloque Número de dados em 1, Lados em d20 e Modificador em 5, e toque em Rolar." },
      { q: "Posso rolar tipos diferentes de dado juntos?", a: "Role um tipo por vez. Para rolagens mistas, role cada tipo em sequência: o histórico registra os dois." },
    ],
  },
  "coin-flip": {
    name: "Cara ou coroa",
    card: "Jogue uma moeda virtual justa, uma ou cem vezes.",
    seoTitle: "Cara ou coroa online – Jogue uma moeda",
    metaDescription: "Jogue cara ou coroa online com uma moeda virtual totalmente justa. Jogue uma vez ou 100, acompanhe sequências e a proporção de caras. Grátis e na hora.",
    h1: "Cara ou coroa online",
    lead: "Cara ou coroa? Jogue uma moeda virtual perfeitamente justa: uma vez para decidir, ou cem para ver a probabilidade em ação.",
    sections: [
      {
        heading: "Uma moeda perfeitamente justa",
        paragraphs: [
          "Pesquisadores observaram que uma moeda de verdade cai um pouco mais vezes do lado em que começou. Uma moeda virtual não tem lado inicial nem técnica de dedo: cada jogada é um 50/50 novinho do gerador criptográfico do navegador.",
          "Toque em Jogar 10 ou Jogar 100 para um experimento rápido. A proporção de caras oscila em torno de 50% e chega mais perto quanto mais você joga: é a lei dos grandes números.",
        ],
      },
      { heading: "Quando tirar cara ou coroa", list: ["Decidir quem começa ou dá a saída", "Desempatar duas opções", "Decisões rápidas de sim ou não", "Aulas de probabilidade", "Escolher o lado do campo"] },
    ],
    howTo: [
      { title: "Escolha", text: "Cara ou coroa? Fale em voz alta." },
      { title: "Jogue", text: "Toque em Jogar a moeda e veja girar." },
      { title: "Veja o resultado", text: "Cara ou coroa aparece com suas estatísticas." },
      { title: "Experimente", text: "Tente Jogar 100 e veja a proporção chegar a 50%." },
    ],
    benefits: [
      { title: "50/50 exato", text: "Sem viés de peso, desgaste ou técnica." },
      { title: "Jogadas em lote", text: "10 ou 100 moedas na hora." },
      { title: "Estatísticas", text: "Totais, sequências e resultados recentes." },
      { title: "Acessível", text: "Resultados anunciados para leitores de tela." },
    ],
    faqs: [
      { q: "Cara ou coroa virtual é 50/50?", a: "Sim. Cada jogada tem exatamente 50% de chance de dar cara, escolhida pelo gerador criptográfico do navegador." },
      { q: "Por que saíram cinco caras seguidas?", a: "Sequências são normais! Cinco caras seguidas têm cerca de 1 chance em 32, então acontece bastante em muitas jogadas." },
      { q: "Posso jogar mais de uma moeda?", a: "Use Jogar 10 ou Jogar 100 para jogar várias de uma vez e ver os totais." },
    ],
  },
  "yes-or-no-picker": {
    name: "Sim ou não",
    card: "Receba um sim, não ou talvez na hora.",
    seoTitle: "Sim ou não – Resposta aleatória na hora",
    metaDescription: "Faça uma pergunta e receba um sim ou não aleatório na hora. Adicione Talvez ou use melhor de três. Um jeito rápido e justo de decidir coisas pequenas.",
    h1: "Sim ou não?",
    lead: "Digite sua pergunta (ou não) e receba um sim ou não na hora. Sem roleta, sem espera.",
    sections: [
      {
        heading: "Quando você só quer uma resposta",
        paragraphs: [
          "A Roleta sim ou não é ótima para suspense. Esta ferramenta é para quando você quer a resposta agora. Toque no botão e receba Sim ou Não com a mesmíssima chance, ou ative Talvez para três respostas.",
          "O melhor de três sorteia três vezes e vence a maioria, o que muita gente acha mais convincente que um único resultado. Suas perguntas e respostas recentes ficam listadas embaixo.",
        ],
      },
      { heading: "Use com bom senso", paragraphs: ["Uma resposta aleatória é perfeita para escolhas pequenas e reversíveis: sobremesa ou não, ir a pé ou de carro, começar agora ou depois do almoço. Para coisas importantes, use para ouvir sua intuição: se a resposta te decepcionar, você já sabe o que queria."] },
    ],
    howTo: [
      { title: "Pergunte", text: "Digite uma pergunta de sim ou não, ou só pense nela." },
      { title: "Opções", text: "Adicione Talvez ou escolha melhor de três." },
      { title: "Veja a resposta", text: "Toque no botão para o resultado imediato." },
      { title: "Reveja", text: "As respostas recentes ficam embaixo." },
    ],
    benefits: [
      { title: "Na hora", text: "Sem animação: a resposta aparece na hora." },
      { title: "Justo", text: "Todas as respostas com a mesma chance." },
      { title: "Melhor de três", text: "Voto da maioria para mais confiança." },
      { title: "Privado", text: "Suas perguntas não saem do aparelho." },
    ],
    faqs: [
      { q: "A resposta é aleatória?", a: "Sim. Cada resposta é escolhida por um gerador criptograficamente seguro com chances exatamente iguais." },
      { q: "Como funciona o melhor de três?", a: "A ferramenta sorteia sim ou não até três vezes e para assim que uma resposta tiver dois votos. Os votos aparecem embaixo da resposta." },
      { q: "Minha pergunta fica salva?", a: "Só nesta página enquanto ela está aberta. As perguntas não são enviadas a lugar nenhum." },
    ],
  },
  "truth-or-dare-generator": {
    name: "Gerador de verdade ou desafio",
    card: "Verdades e desafios leves por faixa etária.",
    seoTitle: "Gerador de verdade ou desafio – Perguntas e desafios leves",
    metaDescription: "Gerador de verdade ou desafio grátis com perguntas e desafios para crianças, adolescentes e adultos. Sem repetição, com vez dos jogadores e cartas na hora.",
    h1: "Gerador de verdade ou desafio",
    lead: "Tire uma verdade ou desafio novo com um toque. Escolha a faixa etária, adicione os jogadores e deixe o jogo rolar.",
    sections: [
      {
        heading: "Perguntas leves para cada turma",
        paragraphs: [
          "Todas as perguntas foram escritas para o jogo ser divertido e confortável. As de crianças são engraçadas e suaves, as de adolescentes combinam com festa do pijama e grupo de jovens, e as de adultos são para festas em que a ideia é rir, não passar vergonha.",
          "As perguntas não se repetem até você ver a lista inteira daquela idade e tipo, então partidas longas continuam novas.",
        ],
      },
      { heading: "Regras para ficar divertido", list: ["Cada pessoa pode passar uma vez por partida, sem explicar.", "Desafios devem ser seguros e possíveis na sala.", "Nada de desafio com celular, post ou contato com gente de fora sem permissão.", "Se alguém parecer desconfortável, pule: é para divertir."] },
      { heading: "Prefere uma roleta?", paragraphs: ["A Roleta verdade ou desafio esconde uma pergunta em cada fatia e revela depois do giro. Dá para escrever suas próprias perguntas e compartilhar a roleta com amigos."] },
    ],
    howTo: [
      { title: "Escolha a faixa etária", text: "Crianças, adolescentes ou adultos." },
      { title: "Adicione jogadores", text: "Opcional: digite os nomes para acompanhar a vez." },
      { title: "Tire uma carta", text: "Verdade, Desafio ou Aleatório." },
      { title: "Próximo jogador", text: "Passe a vez e tire outra." },
    ],
    benefits: [
      { title: "Por idade", text: "Três seleções de perguntas." },
      { title: "Sem repetição", text: "Passa por toda a lista antes de repetir." },
      { title: "Vez de cada um", text: "Mostra de quem é a vez." },
      { title: "Na hora", text: "Sem preparo nem cadastro." },
    ],
    faqs: [
      { q: "As perguntas são próprias para crianças?", a: "O grupo Crianças foi feito para cerca de 6 a 12 anos e mantém tudo leve. Escolha sempre o grupo do jogador mais novo." },
      { q: "Posso adicionar minhas próprias verdades e desafios?", a: "Use a Roleta verdade ou desafio para escrever, salvar e compartilhar suas perguntas." },
      { q: "Quantas perguntas existem?", a: "Cada faixa tem 15 verdades e 15 desafios, e nenhum se repete até sair todos." },
    ],
  },
  "youtube-comment-picker": {
    name: "Sorteio de comentários do YouTube",
    card: "Sorteie um vencedor entre os comentários do YouTube.",
    seoTitle: "Sorteio de comentários do YouTube – Vencedor aleatório",
    metaDescription: "Sorteie um vencedor entre os comentários do YouTube. Filtre por palavra-chave, exclua seu canal, uma participação por pessoa e vários vencedores com justiça.",
    h1: "Sorteio de comentários do YouTube",
    lead: "Faça um sorteio justo: escolha vencedores aleatórios entre os comentários de um vídeo, com filtros de palavra-chave, repetidos e contas excluídas.",
    sections: [
      {
        heading: "Como funciona",
        paragraphs: [
          "Cole o link de um vídeo público do YouTube e a ferramenta carrega os comentários principais pela API oficial do YouTube Data. Depois defina as regras — palavra-chave obrigatória, contas excluídas, uma participação por pessoa ou por comentário — e sorteie quantos vencedores precisar.",
          "Se o carregamento automático não estiver disponível, cole os comentários (um por linha, como “Nome: comentário”). Copie da tela de comentários do YouTube Studio ou de qualquer exportação.",
        ],
      },
      { heading: "Um sorteio em que as pessoas confiam", list: ["Publique as regras antes de começar, com data de encerramento e como o vencedor será escolhido.", "Ative Uma participação por pessoa para o spam não ajudar.", "Exclua seu canal, moderadores e membros da equipe.", "Grave a tela ou sorteie ao vivo para mostrar que é justo.", "Siga as regras de concursos do YouTube e a legislação aplicável."] },
      { heading: "Justiça", paragraphs: ["Os vencedores são sorteados entre os comentários válidos com um embaralhamento parcial criptograficamente seguro, então cada participação válida tem a mesma chance e ninguém ganha duas vezes no mesmo sorteio."] },
    ],
    howTo: [
      { title: "Cole o link", text: "Qualquer vídeo público ou Shorts." },
      { title: "Carregue os comentários", text: "Os comentários principais chegam automaticamente." },
      { title: "Defina filtros", text: "Palavra-chave, exclusões e uma por pessoa." },
      { title: "Sorteie", text: "Um ou vários vencedores de uma vez." },
    ],
    benefits: [
      { title: "Sorteios justos", text: "Mesma chance para cada participação válida." },
      { title: "Antispam", text: "Opção de uma participação por conta." },
      { title: "Flexível", text: "Filtros por palavra e listas de exclusão." },
      { title: "Sem login", text: "Nunca pedimos sua conta do YouTube." },
    ],
    faqs: [
      { q: "Preciso entrar na minha conta do YouTube?", a: "Não. A ferramenta só lê comentários públicos, então não precisa de login." },
      { q: "Quantos comentários ela carrega?", a: "Até 4.000 comentários principais por vídeo. Para sorteios maiores, cole os comentários de uma exportação." },
      { q: "As respostas entram?", a: "Só os comentários principais são carregados, que é a regra comum em sorteios por comentário." },
      { q: "O SpinWheelGe tem vínculo com o YouTube?", a: "Não. O SpinWheelGe é uma ferramenta independente que usa a API pública do YouTube Data. YouTube é marca do Google LLC." },
    ],
  },
};
