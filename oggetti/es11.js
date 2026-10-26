/*
  ESERCIZIO 11 - Spread operator (...)

  Lo spread ... copia le proprietà di un oggetto in un altro.

  Sintassi:  { ...oggetto }
  Sintassi:  { ...obj1, ...obj2 }
*/

// --- SCRIVI QUI LA TUA SOLUZIONE ---

function es11_1(obj) {
  // 1. Restituisci una copia di obj usando lo spread
  // TODO: scrivi qui la tua soluzione
  return {...obj};
}

function es11_2(obj, key, val) {
  // 2. Restituisci un nuovo oggetto con obj e la proprietà aggiuntiva { [key]: val }
  // Suggerimento: { ...obj, [key]: val }
  // TODO: scrivi qui la tua soluzione
  return {...obj, [key]: val};
}

function es11_3(base, extra) {
  // 3. Unisci base e extra con lo spread
  // TODO: scrivi qui la tua soluzione
  return {...base, ...extra};
}

// --- NON MODIFICARE SOTTO ---
export { es11_1, es11_2, es11_3 };