/*
  ESERCIZIO 6 - Operatore in

  L'operatore in verifica se una proprietà esiste in un oggetto.

  Sintassi:  "proprieta" in oggetto
  Sintassi:  key in oggetto
*/

// --- SCRIVI QUI LA TUA SOLUZIONE ---

function es6_1(obj, key) {
  // 1. Restituisci true se key è una proprietà di obj
  // TODO: scrivi qui la tua soluzione
  return key in obj;
}

function es6_2(obj) {
  // 2. Restituisci true se "email" è una proprietà di obj
  // TODO: scrivi qui la tua soluzione
  return "email" in obj;
}

function es6_3(persona) {
  // 3. Se "nome" è in persona restituisci persona.nome, altrimenti "N/A"
  // TODO: scrivi qui la tua soluzione
  if ("nome" in persona) {
    return persona.nome;
  }
  else {
    return "N/A";
  }
}

// --- NON MODIFICARE SOTTO ---
export { es6_1, es6_2, es6_3 };