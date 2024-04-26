import { Magia, Minion } from "./intarfaces";

export const familiarDoSangueSombrio: Minion = {
    id: 1,
    name: "Familiar do Sangue Sombrio - 🧛🏻",
    cost: 1,
    type: "minion",
    atk: 1,
    def: 1,
    effect: "Quando esta carta atacar, a carta atacada fica marcada com 1 ponto de sangramento."
};

export const almaDoSangueSombrio: Minion = {
    id: 2,
    name: "Alma do Sangue Sombrio - 🧛🏻",
    cost: 2,
    type: "minion",
    atk: 1,
    def: 2,
    effect: "Quando esta carta for enviada para o cemitério, busque um 'Necromante do Sangue Sombrio' do seu deck para sua mão."
};

export const criaVampiricaDoSangueSombrio: Minion = {
    id: 3,
    name: "Cria Vampírica do Sangue Sombrio - 🧛🏻",
    cost: 2,
    type: "minion",
    atk: 2,
    def: 1,
    effect: "Quando esta carta for invocada no campo, invoque uma carta 'Familiar do Sangue Sombrio' do cemitério."
};

export const necromanteDoSangueSombrio: Minion = {
    id: 4,
    name: "Necromante do Sangue Sombrio - 🧛🏻",
    cost: 3,
    type: "minion",
    atk: 3,
    def: 3,
    effect: "Quando esta carta for invocada no campo, invoque uma carta 'Cria Vampírica do Sangue Sombrio' do cemitério."
};

export const dhampirDoSangueSombrio: Minion = {
    id: 5,
    name: "Dhampir do Sangue Sombrio - 🧛🏻",
    cost: 4,
    type: "minion",
    atk: 4,
    def: 3,
    effect: "Quando esta carta for invocada no campo, marque todas as cartas do oponente com 1 ponto de sangramento."
};

export const condeDoReinoDasBrumas: Minion = {
    id: 6,
    name: "Conde do Reino das Brumas - 🧛🏻",
    cost: 5,
    type: "minion",
    atk: 5,
    def: 5,
    effect: "Quando esta carta destruir uma carta do oponente, durante a fase de Climax invoque a carta no seu lado do campo."
};

// Definição das magias

export const pactoSombrio: Magia = {
    id: 7,
    name: "Pacto Sombrio - 🪄",
    cost: 1,
    type: "spell",
    effect: "Quando esta carta for ativada, seu avatar perde 1 ponto de vida; se isso acontecer, invoque um token 'Zumbi do Sangue Sombrio' 1/1",
    atk: 0,
    def: 0
};

export const servoDoSangueSombrio: Magia = {
    id: 8,
    name: "Servo do Sangue Sombrio - 🪄",
    cost: 2,
    type: "spell",
    effect: "Escolha uma carta 'Sangue Sombrio' do seu cemitério e invoque no seu campo.",
    atk: 0,
    def: 0
};

export const frenesiSanguinario: Magia = {
    id: 9,
    name: "Frenesi Sanguinário - 🪄",
    cost: 2,
    type: "spell",
    effect: "Quando esta carta for ativada, todas as cartas 'Sangue Sombrio' ganham +2 de ataque até final do turno.",
    atk: 0,
    def: 0
};

export const dominioDoMedo: Magia = {
    id: 10,
    name: "Domínio do Medo - 🪄",
    cost: 3,
    type: "spell",
    effect: "Quando esta carta for ativada, todas as cartas do oponente perdem 1 ponto de defesa, até final do turno.",
    atk: 0,
    def: 0
};

export const luaCheia: Magia = {
    id: 11,
    name: "Lua Cheia - 🪄",
    cost: 5,
    type: "spell",
    effect: "Quando esta carta for ativada, todas as cartas 'Sangue Sombrio' causam 1 ponto de sangramento quando causam dano, até o final do turno.",
    atk: 0,
    def: 0
};

export const brumasDoReinoVampirico: Magia = {
    id: 12,
    name: "Brumas do Reino Vampírico - 🪄",
    cost: 7,
    type: "spell",
    effect: "Quando esta carta for ativada, todas as cartas do oponente marcadas com sangramento são enviadas para o cemitério.",
    atk: 0,
    def: 0
};