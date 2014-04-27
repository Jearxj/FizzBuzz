$(document).ready(function() {
 var count = function (number) {
    for (var i = 1; i <= number; i++) {
        console.log(i);
        if (i !== 1) {
            $(".container").append(", "); 
        }
        var didPrint = false;   
        if (i % 3 === 0) {
            didPrint = true;
            console.log("fizz");
            $(".container").append("fizz");
        } 
        if (i % 5 === 0) {
            didPrint = true;
            console.log("buzz");
            $(".container").append("buzz");
        } 
        if (didPrint === false) {
            $(".container").append(i);
        }
    }
 }
    
 do {
  var number = prompt("Please enter a number from 1 - 100");
  console.log("prompt is working");
    if (number < 1) {
        alert("Please enter a number greater than 1!");
    } else if (number > 100) {
        alert("Please enter a number less than 100!");
    }
 } while (number < 1 || number > 100); 
     
 count(number);
    
})