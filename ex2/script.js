// Il software deve chiedere all’utente il suo nome e il sesso con due prompt diversi.
// Sulla pagina html deve apparire “Ciao <nome>“, il colore del nome deve essere azzurro o rosa a seconda del sesso inserito;


// definizione variabili
var nome, sesso;
var elemento = document.getElementById('mio_id');

nome = prompt("Inserisci il tuo nome");

sesso = prompt("Sei maschio o femmina?");

// trasfrormazione tutto in maiuscolo per controllo inserimento
var sessoGrande = sesso.toUpperCase();

console.log(sessoGrande);


// ciclo per definire se l'utente è maschio o femmina
if (sessoGrande === "FEMMINA") {
  elemento.style.color = "pink";
  elemento.innerHTML = " " + nome;
} else if(sessoGrande === "MASCHIO") {
  elemento.style.color = "lightblue";
  elemento.innerHTML = " " + nome;
}
