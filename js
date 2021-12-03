var random = Math.floor(Math.random() * 11);
var answer = window.prompt("From 1 - 10, what do you think is the number? You have 3 tries, type it here: ");
if (random == answer) {
alert("Correct! The answer was " + random);
} else {
var answer = window.prompt("Wrong, try again: ");
if (random == answer) {
	alert("Yay, you got it! The answer was " + random)
 } else {
 var answer = window.prompt("Wrong, try again: ");
 if (random == answer) {
 alert("Yay, you got it!")
 		} else {
    alert("Wrong, the answer was " + random)
    }
 	}
}
