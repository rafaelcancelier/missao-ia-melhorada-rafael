const caixapPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");






const perguntas = [
    {
        enunciado: "Você prefere fazer seu hobby em casa ou fora de casa?",
        alternativas: [
            {
                texto: "Fazer seu hobby em casa.",
                afirmacao:[
                    "Você se sente mais confortável e relaxado ao praticar seu hobby no ambiente de casa.",
                    "Você tem total controle sobre o espaço, a iluminação e o som, criando o cenário perfeito para se concentrar no que ama",
                    "É mais fácil manter uma rotina consistente, pois não depende de deslocamentos ou horários externos",
                ]
            },
            {
                texto: "Fazer seu hobby fora de casa.",
                afirmacao:[ 
                    "Você gosta de explorar novos lugares e aproveitar o ar livre ao realizar seu hobby.",
                    "A mudança de ambiente estimula a criatividade e traz novas inspirações para o que você ama fazer",
                    "Socializar com outras pessoas que compartilham o mesmo interesse enriquece a experiência e cria conexões valiosas",
                ]
            }
        ]
    },
    {
        enunciado: "Com que frequência você pratica seu hobby?",
        alternativas: [
            {
                texto: "Todos os dias ou quase todos os dias.",
                afirmacao:[
                    "Você integra seu hobby na rotina diária para manter o equilíbrio e o prazer constante.",
                    "A prática constante aprimora suas habilidades e traz um senso de progresso contínuo",
                    "Dedicar tempo diariamente reforça a paixão e transforma o hobby em parte essencial da sua identidade",
                ]
            },
            {
                texto: "Algumas vezes por semana ou menos.",
                afirmacao:[
                    "Você prefere reservar momentos especiais para seu hobby, tornando-o uma recompensa ocasional.",
                    "Equilibrar o hobby com outras responsabilidades permite que cada sessão seja mais intensa e revigorante",
                    "A raridade das práticas aumenta a expectativa e o entusiasmo, renovando a motivação a cada retorno"
                ]
            }
        ]
    },
    {
        enunciado: "Você prefere hobbies criativos ou físicos?",
        alternativas: [
            {
                texto: "Hobbies criativos, como pintar ou escrever",
                afirmacao:[ 
                    "Você gosta de expressar ideias e emoções através de criações artísticas e imaginativas.",
                    "Transformar pensamentos em obras tangíveis traz uma sensação única de realização e liberdade",
                    "O processo criativo funciona como uma válvula de escape, ajudando a aliviar o estresse e a recarregar as energias mentais",
                ]
            },
            {
                texto: "Hobbies físicos, como correr ou dançar",
                afirmacao:[
                    "Você valoriza o movimento e a energia que os hobbies ativos trazem para o corpo e a mente.",
                    "A liberação de endorfinas durante a atividade física melhora o humor e aumenta a sensação de bem-estar geral",
                    "Desafiar seus limites físicos fortalece a disciplina e a confiança em si mesmo, refletindo positivamente em outras áreas da vida",
                ]
            }
        ]
    },
    {
        enunciado: "Você compartilha seu hobby com outras pessoas?",
        alternativas: [
            {
                texto: "sim, gosto de fazer com amigos ou família",
                afirmacao:[
                    "Você encontra mais diversão ao conectar-se com outros e trocar experiências no hobby.",
                    "Compartilhar risadas, dicas e conquistas com pessoas queridas torna cada momento mais memorável e motivador",
                    "O senso de pertencimento e apoio mútuo cria laços mais fortes e transforma o hobby em uma fonte de conexão emocional",
                ]
            },
            {
                texto: "Não, prefiro praticar sozinho.",
                afirmacao:[
                    "Você aprecia a introspecção e o foco pessoal que um hobby solitário proporciona.",
                    "Praticar sozinho permite total liberdade de ritmo, estilo e experimentação, sem interferências externas",
                    "O silêncio e a solitude favorecem a concentração profunda, levando a um estado de fluxo e autodescoberta",
                ]
            }
        ]
    },
    {
        enunciado: "Qual é o melhor horário do dia para seu hobby?",
        alternativas: [
            {
                texto: "De manhã ou à tarde.",
                afirmacao:[
                    "Você usa o hobby para energizar o dia e manter a produtividade alta.",
                    "Aproveitar a luz natural e a mente descansada impulsiona a criatividade e o rendimento",
                    "Praticar cedo cria um momentum positivo que se reflete em todas as tarefas seguintes",
                ]
            },
            {
                texto: "À noite ou antes de dormir",
                afirmacao:[
                    "Você relaxa com o hobby no final do dia, ajudando a desconectar e descansar melhor.",
                    "O ambiente calmo da noite favorece a reflexão e a imersão total, sem interrupções",
                    "Praticar antes de dormir transforma o hobby em um ritual de bem-estar que melhora a qualidade do sono",
                ]
            }
        ]
    },
 {
        enunciado: "Você já pensou em transformar seu hobby em profissão?",
        alternativas: [
            {
                texto:"Sim, adoraria trabalhar com isso.",
                afirmacao:[
                    "Você sonha em unir paixão e carreira para uma vida mais realizada profissionalmente.",
                    "Transformar o que ama em fonte de renda traz propósito e motivação diária ao trabalho",
                    "Você enxerga oportunidades de crescimento e impacto ao profissionalizar sua paixão.",
                ]
            },
            {
                texto: "Não, prefiro mantê-lo como lazer.",
                afirmacao:[
                    "Você preserva o hobby como um escape puro, sem pressões de trabalho ou obrigações.",
                    "Manter o hobby como lazer garante que ele continue sendo uma fonte de prazer genuíno e liberdade.",
                    "Separar paixão de profissão protege o equilíbrio emocional e evita o risco de desgaste",
                    ]
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = " ";

function mostraPerguntas(){

    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }

    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = " ";
    mostraAlternativas();
}

function mostraAlternativas(){
    for (const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}


function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = aleatorio(opcaoSelecionada.afirmacao);
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPerguntas();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Se fosse possível ...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = " ";
}

function aleatorio(lista){
    const posicao = Math.floor(Math.random()*lista.length);
    return lista[posicao];
}

mostraPerguntas();
