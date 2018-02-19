// variables//

var calculator_choice;
var selected_choice;


//calculator selection//

alert ("Which calculator would you like to use ?");


var calculator_choice = prompt("(B)Basic (A)Advanced");



if (calculator_choice == "b"){

   alert("this calculator only calculates additions, mutiplications, divisions and subtractions");

} else if (calculator_choice == "a"){

   alert (" This calculator only calculates power and square root")
}


// selected calculator //

var operation = ["0. end the program",  "1. additions",  "2.subtractions", "3. mutiplications" ,"4.divisions", "Type your selection here"];

if operation == 0{
	alert("program will now end!");

} else if (operation == 1) {
var num1 = prompt("Enter the first number");
var num2 = prompt("Enter the second number");
alert ("The sum is " + (Number(num1)+Number(num2)));

} else if (operation == 2) {
var num1 = prompt("Enter the first number");
var num2 = prompt("Enter the second number");
alert ("The difference is " + (Number(num1)-Number(num2)));

} else if (operation == 3) {
var num1 = prompt("Enter the first number");
var num2 = prompt("Enter the second number");
alert ("The product is " + (Number(num1)*Number(num2)));

} else if (operation == 4) {
var num1 = prompt("Enter the first number");
var num2 = prompt("Enter the second number");
alert ("The quotiant is " + (Number(num1)/Number(num2)));

}	





