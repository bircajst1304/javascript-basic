/*
  ESERCIZIO 4 - Aggiungere e modificare proprietà

  Si possono aggiungere nuove proprietà o modificarle
  con l'assegnamento diretto.

  Sintassi:  oggetto.nuovaProp = valore
  Sintassi:  oggetto["prop"] = valore
*/

// --- SCRIVI QUI LA TUA SOLUZIONE ---

function es4_1(obj) {
  // 1. Aggiungi obj.citta = "Roma" e restituisci obj
  // TODO: scrivi qui la tua soluzione
  obj.citta = "Roma"
  return obj;
}

function es4_2(obj, key, val) {
  // 2. Imposta obj[key] = val e restituisci obj
  // TODO: scrivi qui la tua soluzione
obj[key] = val
return obj;
}

function es4_3(obj) {
  // 3. Incrementa obj.eta di 1 e restituisci obj
  // TODO: scrivi qui la tua soluzione
  obj.eta += 1
  return obj;
}

// --- NON MODIFICARE SOTTO ---
export { es4_1, es4_2, es4_3 };