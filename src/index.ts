import { aprendizDeNucleoDeDefesa, bloquearSuprimentos, mensageiroDoNucleoDeDefesa, nucleoDeDefesaBragi, nucleoDeDefesaHati, nucleoDeDefesaNjord, nucleoDeDefesaSkol, nucleoDeDefesaThor, protocoloEmergencia, protocoloEvacuacao, protocoloFinal, protocoloReforco, sacrificioDoHeroi } from "./BanannaGame/Roger";
import { almaDoSangueSombrio, brumasDoReinoVampirico, condeDoReinoDasBrumas, criaVampiricaDoSangueSombrio, dhampirDoSangueSombrio, dominioDoMedo, familiarDoSangueSombrio, frenesiSanguinario, luaCheia, necromanteDoSangueSombrio, pactoSombrio, servoDoSangueSombrio } from "./BanannaGame/Victor";
import { Games } from "./BanannaGame/game";
import { Player } from "./BanannaGame/player";
import { ClientExtension } from "./client";

const client = new ClientExtension();

const deckRoger = [
    aprendizDeNucleoDeDefesa,
    aprendizDeNucleoDeDefesa,
    aprendizDeNucleoDeDefesa,
    nucleoDeDefesaNjord,
    nucleoDeDefesaNjord,
    nucleoDeDefesaNjord,
    nucleoDeDefesaThor,
    nucleoDeDefesaThor,
    nucleoDeDefesaThor,
    nucleoDeDefesaBragi,
    nucleoDeDefesaBragi,
    nucleoDeDefesaBragi,
    mensageiroDoNucleoDeDefesa,
    mensageiroDoNucleoDeDefesa,
    mensageiroDoNucleoDeDefesa,
    nucleoDeDefesaSkol,
    nucleoDeDefesaSkol,
    nucleoDeDefesaSkol,
    nucleoDeDefesaHati,
    nucleoDeDefesaHati,
    nucleoDeDefesaHati,
    protocoloEvacuacao,
    protocoloEvacuacao,
    protocoloEvacuacao,
    protocoloEmergencia,
    protocoloEmergencia,
    protocoloEmergencia,
    protocoloEmergencia,
    bloquearSuprimentos,
    bloquearSuprimentos,
    bloquearSuprimentos,
    bloquearSuprimentos,
    protocoloFinal,
    protocoloFinal,
    protocoloReforco,
    protocoloReforco,
    protocoloReforco,
    protocoloReforco,
    sacrificioDoHeroi,
    sacrificioDoHeroi,
    sacrificioDoHeroi,
]

const deckVictor = [
    familiarDoSangueSombrio,
    familiarDoSangueSombrio,
    familiarDoSangueSombrio,
    familiarDoSangueSombrio,
    almaDoSangueSombrio,
    almaDoSangueSombrio,
    almaDoSangueSombrio,
    almaDoSangueSombrio,
    criaVampiricaDoSangueSombrio,
    criaVampiricaDoSangueSombrio,
    criaVampiricaDoSangueSombrio,
    criaVampiricaDoSangueSombrio,
    necromanteDoSangueSombrio,
    necromanteDoSangueSombrio,
    necromanteDoSangueSombrio,
    dhampirDoSangueSombrio,
    dhampirDoSangueSombrio,
    dhampirDoSangueSombrio,
    condeDoReinoDasBrumas,
    condeDoReinoDasBrumas,
    pactoSombrio,
    pactoSombrio,
    pactoSombrio,
    pactoSombrio,
    servoDoSangueSombrio,
    servoDoSangueSombrio,
    servoDoSangueSombrio,
    servoDoSangueSombrio,
    frenesiSanguinario,
    frenesiSanguinario,
    frenesiSanguinario,
    frenesiSanguinario,
    dominioDoMedo,
    dominioDoMedo,
    dominioDoMedo,
    luaCheia,
    luaCheia,
    luaCheia,
    luaCheia,
    brumasDoReinoVampirico,
    brumasDoReinoVampirico
]

const player_victor = new Player("Victor", deckVictor, [], [null, null, null, null, null, null], [],  0, 0, 20)
const player_roger = new Player("Roger", deckRoger, [], [null, null, null, null, null, null], [], 0, 0, 20)

export const GAME = new Games(player_victor, player_roger)
client.init().then(()=>{
    // console.dirxml(client.commands)
    // console.log(client.events)
    // console.dirxml(client.aliases)
}).catch((err)=>{
    console.log(err)
})