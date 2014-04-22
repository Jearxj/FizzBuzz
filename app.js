$(document).ready(function() {
 do {
  var number = prompt("Please enter a number from 1 - 100");
  console.log("prompt is working");
    if (number < 1) {
        alert("Please enter a number greater than 1!");
    } else if (number > 100) {
        alert("Please enter a number less than 100!");
    }
 } while (number < 1 || number > 100) {
        var number = prompt("Please enter a number from 1 - 100");
    }
 
 for (var i = 1; i <= number; i++) {
     console.log(i);
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("fizzbuzz");
            $(".container").append("fizzbuzz ");
        } else if (i % 3 === 0) {
            console.log("fizz");
            $(".container").append("fizz ");
        } else if (i % 5 === 0) {
            console.log("buzz");
            $(".container").append("buzz ");
        } else {
            $(".container").append(i + " ");
        }     
 }
})