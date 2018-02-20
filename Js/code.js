// variables//

var calculator_choice;
var selected_choice;
var isRunning = true;


//calculator selection - Basic //


while (isRunning) {


    var calculator_choice = prompt("Which calculator would you like to use ? (B)Basic (A)Advanced");

    if (calculator_choice == "b"){
      var operation = prompt("0. end the program\n1. additions\n2.subtractions\n3. mutiplications\n4.divisions\nType your selection here");

      if (operation == 0){
        alert("program will now end!");
        isRunning = false;
      
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

    } else if (calculator_choice == "a"){
     var selected_choice = prompt ("0. end the program\n1.To the power\n2.squareRoot");
 
     	if (selected_choice == 0){
     		alert("program will now end!");
        isRunning = false;
     
     }else if  (selected_choice == 2){
     	var num1 = prompt("Enter the first number");
		alert ("The square root is " + Math.sqrt(Number(num1)));


    }else if (selected_choice == 1){
    	var num1 = prompt ("Enter the first number");
    	alert(" the power is" + Math.pow(Number(num1)));


    }


 }


}

   





