//const non si riassegna ma il push funziona in const
const arraySquadre = ["Cagliari", "Udinese", "Roma", "Napoli", "Genoa", "Sampdoria"];


//queste due variabili possono essere qualsiasi numero scelti da noi.
var indicePartenza = 2;

var indiceArrivo = 5;

//invochiamo funzione creata sotto
var risultato = arrayFilter(arraySquadre,indicePartenza,indiceArrivo);
console.log(risultato);


//ARROW FUNCTION
let arrayFilter = (array, max, min) => {
  //usando let sara visibile in console solo all'interno del blocco{}
  let nuovoArray = [];

  for (let i = 0; i < array.length; i++) {
    var elementoCorrente = array[i];

    if(i >= min && i <= max){
      nuovoArray.push(elementoCorrente);
    }
  }
  return nuovoArray;
};

//funzione che prende una porzione dell'array con punto di partenza e arrivo noti.
// function arrayFilter(array, min, max) {
//   var nuovoArray = [];
//
//       for (let i = 0; i < array.length; i++) {
//         var elementoCorrente = array[i];
//
//         if(i >= min && i <= max){
//           nuovoArray.push(elementoCorrente);
//         }
//       }
//       return nuovoArray;
//       };
