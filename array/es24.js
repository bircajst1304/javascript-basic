/*
  ESERCIZIO RIASSUNTIVO 10 (Sfida) - Rubrica telefonica

  Data la rubrica:
  [
    { nome: "Anna", telefono: "123" },
    { nome: "Bob", telefono: "456" },
    { nome: "Clara", telefono: "789" }
  ]

  Dato un nome passato come parametro:
  - cerca il contatto corrispondente
  - se trovato, restituisci il numero di telefono
  - se non trovato, restituisci "non trovato"

  Suggerimento: usa find().
*/

// --- SCRIVI QUI LA TUA SOLUZIONE ---

function es24(nome) {
  const rubrica = [
    { nome: "Anna", telefono: "123" },
    { nome: "Bob", telefono: "456" },
    { nome: "Clara", telefono: "789" }
  ];
  // TODO: scrivi qui la tua soluzione
  const trovato = rubrica.find(n => n.nome === nome);
  if (trovato) {
    return trovato.telefono;
  }
  else {
    return "non trovato";
  }
}

// --- NON MODIFICARE SOTTO ---
export { es24 };
