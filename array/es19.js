/*
  ESERCIZIO RIASSUNTIVO 5 - Media dall'array

  Dato l'array [7, 8, 9, 6, 10] passato come parametro:
  - calcola la somma (usa un ciclo o reduce se lo conosci)
  - calcola la media
  - restituisci un oggetto { somma, media }

  Suggerimento: usa un loop for per sommare gli elementi.
*/

// --- SCRIVI QUI LA TUA SOLUZIONE ---

function es19(voti) {
  // TODO: scrivi qui la tua soluzione
  var somma = 0;
  for (let i = 0; i < voti.length; i++) {
    const elementi = voti[i];
    somma += elementi;
  }
  var media = somma / voti.length;
  return {somma, media};
}

// --- NON MODIFICARE SOTTO ---
export { es19 };
