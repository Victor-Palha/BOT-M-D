import { Magia, Minion } from "./intarfaces";

export const aprendizDeNucleoDeDefesa: Minion = {
    id: 1,
    name: "Aprendiz de Núcleo de Defesa",
    cost: 1,
    type: "minion",
    atk: 1,
    def: 1,
    effect: "Ao ser evocado, crie um token 0/1 no seu campo."
};

export const nucleoDeDefesaNjord: Minion = {
    id: 2,
    name: "Núcleo de Defesa, Njord",
    cost: 2,
    type: "minion",
    atk: 2,
    def: 1,
    effect: "Quando esta carta chegar no campo, invoque um Núcleo de Defesa até custo 2 do cemitério."
};

export const nucleoDeDefesaThor: Minion = {
    id: 3,
    name: "Núcleo de Defesa Thor",
    cost: 2,
    type: "minion",
    atk: 1,
    def: 3,
    effect: "Protetor. (O seu oponente precisa atacar esta carta ou outra carta 'protetor')"
};

export const nucleoDeDefesaBragi: Minion = {
    id: 4,
    name: "Núcleo de Defesa Bragi",
    cost: 3,
    type: "minion",
    atk: 3,
    def: 2,
    effect: "Compre 1 carta."
};

export const mensageiroDoNucleoDeDefesa: Minion = {
    id: 5,
    name: "Mensageiro do Núcleo de Defesa",
    cost: 3,
    type: "minion",
    atk: 2,
    def: 3,
    effect: "Envie um lacaio do seu campo com 2💧 ou menos para o cemitério. Coloque um lacaio Núcleo de defesa na mão."
};

export const nucleoDeDefesaSkol: Minion = {
    id: 6,
    name: "Núcleo de Defesa Skol",
    cost: 4,
    type: "minion",
    atk: 4,
    def: 4,
    effect: "effect: Compre 2 cartas."
};

export const nucleoDeDefesaHati: Minion = {
    id: 7,
    name: "Núcleo de Defesa Hati",
    cost: 6,
    type: "minion",
    atk: 5,
    def: 5,
    effect: "effect: Aumente em 2 o ataque de todos os lacaios que você controla."
};

// Definição das novas magias

export const sacrificioDoHeroi: Magia = {
    id: 8,
    name: "Sacrifício do Herói",
    cost: 2,
    type: "spell",
    effect: "Mande para o cemitério uma carta de Lacaio até o custo 3 do seu campo e envie para o cemitério um lacaio oponente de no máximo custo 3.",
    atk: 0,
    def: 0
};

export const protocoloEvacuacao: Magia = {
    id: 9,
    name: "Protocolo: Evacuação",
    cost: 2,
    type: "spell",
    effect: "Devolva para a mão do dono original um lacaio do campo.",
    atk: 0,
    def: 0
};

export const protocoloEmergencia: Magia = {
    id: 10,
    name: "Protocolo: Emergência",
    cost: 2,
    type: "spell",
    effect: "Compre 3 cartas, escolha duas e mande para a mão, devolva para o fundo do deck a restante.",
    atk: 0,
    def: 0
};

export const protocoloReforco: Magia = {
    id: 11,
    name: "Protocolo: Reforço",
    cost: 2,
    type: "spell",
    effect: "Conceda 'PROTETOR' para dois lacaios no seu campo.",
    atk: 0,
    def: 0
};

export const bloquearSuprimentos: Magia = {
    id: 12,
    name: "Bloquear Suprimentos",
    cost: 4,
    type: "spell",
    effect: "Negue a ativação de uma magia.",
    atk: 0,
    def: 0
};

export const protocoloProtecao: Magia = {
    id: 13,
    name: "Protocolo: Proteção",
    cost: 5,
    type: "spell",
    effect: "Equipe em um lacaio. Roube 1 de vida ou 1 de ataque de todos os lacaios do oponente. (Escolha ao ativar esta carta qual valor será alterado)",
    atk: 0,
    def: 0
};

export const protocoloFinal: Magia = {
    id: 14,
    name: "PROTOCOLO FINAL",
    cost: 7,
    type: "spell",
    effect: "Destrua todas as cartas do campo com 3 ou mais de ataque.",
    atk: 0,
    def: 0
};