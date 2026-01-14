// Projeto 1
const nomeUsuario = "Edu";
let mensagens = [
    " sua disciplina diária vai transformar seus sonhos em resultados inevitáveis.",
    " se voce decidir evoluir todos os dias acaba vencendo em todas as áreas da vida.",
    " seu sucesso é construído quando você faz o que precisa ser feito, mesmo sem motivação."
];

const indiceAleatorio = Math.floor (Math.random() * mensagens.length);

const mensagemFinal = `${nomeUsuario},${mensagens[indiceAleatorio]}`;

console.log(mensagemFinal);
