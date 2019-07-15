// Un alert espone 5 numeri casuali. Da li parte un timer di 30 secondi.
// Dopo 30 secondi l’utente deve inserire un prompt alla volta i numeri che ha visto precedentemente.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati;

var numeriCasuali = [], indovinati = 0;

var elemento = document.getElementById('numeriIndovinati');

var elemento2 = document.getElementById('numeri');

for (var i = 0; i < 5; i++) {
  var numeroGenerato = Math.floor(Math.random() * (10)) + 1;
  alert(numeroGenerato);
  numeriCasuali.push(numeroGenerato);
}

console.log(numeriCasuali);

alert("Hai 30 secondi per memorizzare i numeri per poi riscriverli");

setTimeout(myfunction, 3000);

function myfunction() {
  alert("Il tempo è finito, prova a ricordarti tutti i numeri nell'ordine in cui li hai visti prima");
  for (var i = 0; i < numeriCasuali.length; i++) {
    var tentativoUtente = parseInt(prompt("Inserisci un numero"));
    if (tentativoUtente === numeriCasuali[i]) {
        indovinati += 1;
        elemento.innerHTML = indovinati + " numeri";
        var text = elemento2.innerHTML;
        elemento2.innerHTML = text + "<li>" + tentativoUtente + "</li>";
    }

  }

  if (indovinati === 0) {
    alert("Non hai indovinato nessun numero, RITENTA");
  } else if (indovinati === numeriCasuali.length) {
    alert("Complimenti hai indovinato tutti i numeri");
  }
}
