var surnameList = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"];

do {
  var userSurname = prompt("Inserisci il tuo cognome");
} while (parseInt(userSurname));

surnameList.push(userSurname);

const lowercased = surnameList.map((surnameList) => surnameList.toLowerCase());

lowercased.sort();

var listItem = document.getElementById("surname-list");

for(var i =0; i < lowercased.length; i++){
    console.log(lowercased[i]);
    listItem.innerHTML += "<li>" + lowercased[i] + "</li>";
}
