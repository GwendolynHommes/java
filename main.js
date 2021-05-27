let getal1;
console.log ("getal1 = " + getal1);
// in console zie ik dat getal1 niet gedefinieerd is

//const getal2;
//console.log ("getal2 = " + getal2);
// de console geeft aan dat er een syntax fout is gemaakt.
//Dit komt omdat de constante geen waard heeft
//ik heb deze code even als opmering gezet om zo de code door te laten lopen.

let getal3;
getal3 = 3;
console.log ("getal3 = " + getal3);
// ik krijg nu getal3 = 3 te zien in de console.

getal3 = 5;
console.log ("getal3 = " + getal3);
// door de waarde aan te passen zie ik in de console ok de waarde veranderd

let datatype;
datatype = true;
console.log (typeof datatype);
//true en false zijn beide boolean. 

let datatype1;
datatype1 = 'Hello World';
console.log (typeof  datatype1);
//dit is een string, te herkennen aan de '-tekens.

let datatype2;
datatype2 = 17.5;
console.log (typeof  datatype2);
//dit is een number, te herkennen aan het getal, dit mag met of zonder punt.

let datatype3;
datatyp3 = 1n;
console.log (typeof datatype3);
//dit is een big integer, te herkennen aan de 'n' op het einde.

let getala = 6;
let getalb = 8;

console.log (getala + getalb);
console.log (getalb - getala);
console.log (getala * getalb);
console.log (getalb / getala);

let d = 3;
let v = 5;
let t = 10;
let tw = 2;

console.log (d+v*t/tw);
//antwoord is 28


//opdracht 9
let number = 3;
number--;
console.log(number);
//er wordt 1 opgeteld of afgetrokken van de gegeven waarde.
//antwoorden zijn resp. 4 en 2


let nummer = 3;
const som = ++nummer +2;
console.log (som);

//6. ++ wordt genegeerd als het erachter staat om date r al een + wordt gegeven om 2 op te tellen
//8. ++ ervoor kan dus ook en dan wordt er geen verwarring gezaaid met +2

let numberb = 3;
numberb += 4;
console.log (numberb);
//10. uitkomst is 7. dus telt erbij op net als de = er niet zou staan.


let getallen = 3;
getallen  += 4;
getallen -= 2;
getallen /= 5;
getallen *= 4;
console.log (getallen); 
//11. 3+4 = 7; 7-2=5; 5/5=1 en 1*4 is 4
//uitkomst is 4


//string opdrachten (opdracht 12 ev)

const voor = 'Voornaam';
const achter = 'Achternaam';
console.log (voor + " + " + achter);
//12. verschil is de quotes


let opdr = 'opdracht';
let cijfer = 7;
let combinedtext = opdr + cijfer;
console.log(combinedtext);
//13. string en nummer kunnen gecombineerd worden. cijfer wordt dan als een string gezien en niet als een getal dat opgetelt moet worden bij een string.

//14. ik gebruik hele tijd al single quotes omdat het een toestsaanslag minder is. :)

let text = "terxt"
text += 'another text';
console.log (text);
//15.  terxt another text
//let text = "text another text"; console.log (text);

//opdrachten met built in methods
//Maak een eigen voorbeeld van de volgende functies en licht toe wat de functie doet in het blok: 
//1. charAt() geeft aan hoeveelste karakter in de string het is. let op 1e karakter is volgens javascripty 0.
//Let anystring = 'World';
//console.log("The character at index 0   is '" + anyString.charAt(0)   + "'");
//console.log("The character at index 1   is '" + anyString.charAt(1)   + "'");
//console.log("The character at index 2   is '" + anyString.charAt(2)   + "'");
//console.log("The character at index 3   is '" + anyString.charAt(3)   + "'");
//console.log("The character at index 4   is '" + anyString.charAt(4)   + "'");
//console.log("The character at index 999 is '" + anyString.charAt(999) + "'");

//2. concat() met concat kun je strings aan elkaar vast koppelen. hetzelfde als met + of +=
//voorkeur is dan ook de laatste twee te gebruiken.
//Let hello = 'Hello';
//console.log (hello.concat (Wereld));

//3. slice() hiermee kun je een string opdelen doo rbepaalde gedeeltes van de string te gebruiken.
//dit weer op basis van het zoveelste karakter vand e string (vergeet 0 niet!!)
//4. split() hiermee kun je aangeven welk karakter gebruikt wordt om woorden uit elkaar te houden.
//5. substr()hier mee kun je een deel van de string gebruiken.


//opdrachten over conditions


















