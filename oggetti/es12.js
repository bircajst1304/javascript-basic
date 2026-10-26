/*
  ESERCIZIO 12 - Destructuring

  Il destructuring estrae proprietà da un oggetto in variabili.

  Sintassi:  const { prop1, prop2 } = oggetto
*/

// --- SCRIVI QUI LA TUA SOLUZIONE ---

function es12_1(obj) {
  // 1. Estrai "nome" e "eta" con destructuring, restituisci nome
  // TODO: scrivi qui la tua soluzione
  const { nome } = obj;
  return nome;
}

function es12_2(obj) {
  // 2. Estrai "nome" e "cognome" con destructuring, restituisci nome + " " + cognome
  // TODO: scrivi qui la tua soluzione
  const {nome , cognome} = obj;
  return nome + " " + cognome;

}

function es12_3(obj) {
  // 3. Estrai "marca" e "modello", restituisci "Marca: " + marca + ", Modello: " + modello
  // TODO: scrivi qui la tua soluzione
  const {marca, modello} = obj;
  return "Marca: " + marca + ", Modello: " + modello;
}

// --- NON MODIFICARE SOTTO ---
export { es12_1, es12_2, es12_3 };