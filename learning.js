/* data types: 
undefined (hasnt been defined), null(set it to be nothing), 
boolean (true/false), string (text/digits, printed text), 
symbol (immutable unique primitive value), number, and 
object(can store key value pairs)*/
//variable = label to store data, can be set as any data type

var myName = "beau";
//can be used everywhere
myName = 8;
//variable can be changed
let ourName = "freeCodeCamp";
//only within the scope of where you declare it
const pi = 3.14;
//variable that can never change
/* more functions of variables*/
var a; 
var b = 2;

a = 7;

b = a
//defined a indefintely, and b as 2. then set a as 7, and redefined b as a

console.log(a);
a++;
//increment operator, +1
a+=7;
// adds 7 to value of a, same as a = a + 7 
//can do this with -, *, and / for all arithmetic funtions

//strings! examples
var kidus = "Kidus";
//use \" for quotes if you want them inside of strings
var kidusQuote = "Kidus is \"the greatest human being alive\""
console.log(kidusQuote);
//can also use ` for full freedom, and ' (as outside quotes) for 2nd degree freedom
//ex
var kidusQuote2 = 'Kidus is "the greatest human being alive"';
var kidusQuote3 = `Kidus' little john is nicknamed "jack."`;
console.log(kidusQuote2);
console.log(kidusQuote3);
/* escape sequences in strings:
\'single quote
\" double quote
\\ backslash (forward slash / is fine)
\n new line
\r carriage return
\t tab
\b backspace
\f form feed
*/
var kidusQuote4 = "Kidus Zelalem\n\tDesigner\n\t\t\\Now, Programmer.";
console.log(kidusQuote4);
// can add strings too, can similarly use =+ to redefine strings
var kidusConc = kidusQuote + kidusQuote4;
kidusConc+=kidusQuote3
console.log(kidusConc);
//length of strings is done using .length function
var kidusConcLength = kidusConc.length
console.log(kidusConcLength);
//finding what letter or whatever is in a specific place in string u index it
var kCFirst = kidusConc[0]
console.log(kCFirst);
console.log("Second Commit");
