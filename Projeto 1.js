// Projeto 1 - Gerador de Mensagens Motivacionais

const MENSAGENS = [
    "O sofrimento existe, mas esquecido não durará.",
    "Que todos os seres sejam livres do sofrimento.",
    "A compaixão é o verdadeiro caminho para a paz interior.",
    "Cada momento é uma oportunidade para começar novamente.",
    "O ego é a raiz de toda ilusão e sofrimento.",
    "A iluminação não é atingir algo novo, é acordar para a realidade.",
    "Cultive a bondade e colherá a paz.",
    "O presente é o único tempo que você realmente possui.",
    "A mente é como água: quando está agitada, não reflete claramente.",
    "Abandone a raiva, abandone o apego. Assim você encontrará paz.",
    "O Buda está em você, apenas acordado e consciente.",
    "Meditar é retornar ao seu verdadeiro eu.",
    "Tudo é impermanente, tudo muda. Aceite isto e seja livre.",
    "A sabedoria vem do silêncio interior.",
    "O caminho do meio evita os extremos e leva à paz.",
    "Perdoe os outros não porque eles merecem, mas para libertar a si mesmo.",
    "Você é responsável pelo seu próprio despertar espiritual.",
    "A verdadeira riqueza é o contentamento com o que você tem.",
    "Observar seus pensamentos sem julgá-los é o começo da liberdade.",
    "Cada respiração é uma chance de deixar ir o que não serve.",
    "A gentileza é a força mais poderosa do universo.",
    "Quando você consegue estar em paz consigo mesmo, está em paz com tudo.",
    "O apego é a causa de todo o sofrimento. Solte-se.",
    "Viva como um lótus: enraizado na lama, mas elevado e puro.",
    "A ignorância é a escuridão, o conhecimento é a luz.",
    "Sua natureza verdadeira é pura, calma e iluminada.",
    "O nada que você teme não é nada, é tudo.",
    "Cultive a paciência, ela é a raiz da paz.",
    "A realidade é aquilo que você experimenta aqui e agora.",
    "Cada ser tem a Natureza de Buda dentro de si.",
    "Não procure a verdade fora de você, está dentro.",
    "A morte não é o fim, é uma transformação.",
    "Viva com intenção, cada ação tem consequências.",
    "O karma é a lei universal da causa e efeito.",
    "Saia do reino dos pensamentos e entre no reino do ser.",
    "A verdadeira felicidade não depende de circunstâncias externas.",
    "Aprenda a morrer a cada dia e viverá mais plenamente.",
    "A prática constante leva ao despertar gradual.",
    "Você não é seus pensamentos, você é o observador deles.",
    "O caminho para a iluminação começa onde você está.",
    "A aceitação é o primeiro passo para a transformação.",
    "Renuncie ao desejo de controlar tudo e ganhe verdadeira liberdade.",
    "Cada momento é sagrado quando vivido com plena atenção.",
    "A compaixão começa com o amor por si mesmo.",
    "Escape da prisão da mente através da meditação.",
    "O nirvana não é um lugar, é um estado de ser.",
    "Cultive a alegria genuína pela felicidade dos outros.",
    "A verdade é simples: sofra menos, ame mais.",
    "Você é o criador do seu próprio destino através das ações presentes.",
    "O Buda ensinou: desperte e seja livre, mas a jornada é sua."
];

/**
 * Gera uma mensagem motivacional aleatória
 * @param {string} nome - Nome do usuário
 * @returns {string} Mensagem completa
 */
function obterMensagemMotivacional(nome) {
    if (!nome || typeof nome !== 'string') {
        throw new Error('Nome deve ser uma string válida');
    }
    
    const indice = Math.floor(Math.random() * MENSAGENS.length);
    return `${nome}, ${MENSAGENS[indice]}`;
}

// Executar
try {
    const mensagem = obterMensagemMotivacional("Edu");
    console.log(mensagem);
} catch (erro) {
    console.error('Erro:', erro.message);
}
